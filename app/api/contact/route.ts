import { NextRequest, NextResponse } from 'next/server'

import { validateContactForm } from '@/validators'
import { checkRateLimit } from '@/lib/rate-limiter'
import { sendEmail, buildEmailHtml } from '@/lib/mailer'
import { escapeHtml } from '@/utils/escapeHtml'

/**
 * Extract client IP from request headers
 */
function getClientIp(request: NextRequest): string {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
}

/**
 * POST /api/contact
 * Handle contact form submissions
 */
export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const clientIp = getClientIp(request)
    if (checkRateLimit(clientIp)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse & validate with Zod
    const body = await request.json()
    const result = validateContactForm(body)

    if (!result.success) {
      const firstError = result.error.issues[0]?.message || 'Invalid form data'
      return NextResponse.json({ error: firstError }, { status: 400 })
    }

    const { firstName, lastName, email, message, company } = result.data

    // Honeypot check - bots will fill this hidden field
    if (company) {
      return NextResponse.json({ success: true })
    }

    // Sanitize for HTML (data already trimmed by Zod)
    const safeName = escapeHtml(`${firstName} ${lastName}`)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message)

    // Send email
    await sendEmail({
      to: process.env.EMAIL_TO || process.env.EMAIL_USER || '',
      replyTo: email,
      subject: `[Portfolio] Message from ${safeName}`,
      text: `Name: ${safeName}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: buildEmailHtml(safeName, safeEmail, safeMessage),
    })

    console.info(`[Contact] Email sent from: ${email}`)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Contact] Error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}
