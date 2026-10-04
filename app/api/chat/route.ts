import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { checkRateLimit } from '@/lib/rate-limiter'
import { CHAT_SYSTEM_PROMPT } from '@/lib/chat-context'

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions'

const bodySchema = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(['user', 'assistant']),
        content: z.string().trim().min(1).max(1000),
      }),
    )
    .min(1)
    .max(10),
})

/** POST /api/chat — portfolio Q&A through Groq. Requires GROQ_API_KEY. */
export async function POST(request: NextRequest) {
  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey)
    return NextResponse.json({ error: 'Chat is not available right now.' }, { status: 503 })

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  // ponytail: in-memory per-instance limit (5/min); use a shared store (e.g. Upstash) if abused.
  if (checkRateLimit('chat:' + ip))
    return NextResponse.json({ error: 'Too many messages. Try again in a minute.' }, { status: 429 })

  const parsed = bodySchema.safeParse(await request.json().catch(() => null))
  if (!parsed.success)
    return NextResponse.json({ error: 'Invalid message.' }, { status: 400 })

  const model = process.env.GROQ_MODEL || 'openai/gpt-oss-20b'
  try {
    const res = await fetch(GROQ_URL, {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model,
        temperature: 0.3,
        max_completion_tokens: 1024,
        ...(model.startsWith('openai/gpt-oss') && { reasoning_effort: 'low' }),
        messages: [{ role: 'system', content: CHAT_SYSTEM_PROMPT }, ...parsed.data.messages],
      }),
    })
    if (!res.ok) {
      console.error('[Chat] Groq error', res.status, await res.text())
      return NextResponse.json({ error: 'Chat is not available right now.' }, { status: 502 })
    }
    const data = await res.json()
    const reply: string | undefined = data.choices?.[0]?.message?.content?.trim()
    if (!reply)
      return NextResponse.json({ error: 'No answer this time. Please try again.' }, { status: 502 })
    return NextResponse.json({ reply })
  } catch (error) {
    console.error('[Chat] Error:', error)
    return NextResponse.json({ error: 'Chat is not available right now.' }, { status: 500 })
  }
}
