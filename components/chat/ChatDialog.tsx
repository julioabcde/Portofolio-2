'use client'
import { useEffect, useRef, useState } from 'react'
import { ArrowUp, X } from 'lucide-react'
import { PROFILE } from '@/lib/data/profile'

type Message = { role: 'user' | 'assistant'; content: string }

const SUGGESTIONS = [
  'What does Julio work on?',
  'Tell me about Velocart.',
  'What is his tech stack?',
]

export default function ChatDialog({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const dialog = useRef<HTMLDialogElement>(null)
  const list = useRef<HTMLDivElement>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const el = dialog.current
    if (!el) return
    if (open && !el.open) {
      el.showModal()
      el.querySelector('textarea')?.focus()
    }
    if (!open && el.open) el.close()
  }, [open])

  useEffect(() => {
    list.current?.scrollTo({ top: list.current.scrollHeight })
  }, [messages, pending])

  async function send(text: string) {
    const content = text.trim()
    if (!content || pending) return
    const next = [...messages, { role: 'user' as const, content }]
    setMessages(next)
    setInput('')
    setError('')
    setPending(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next.slice(-10) }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setMessages([...next, { role: 'assistant', content: data.reply }])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setPending(false)
    }
  }

  return (
    <dialog
      ref={dialog}
      onClose={onClose}
      aria-labelledby="chat-title"
      className="m-0 h-[100dvh] max-h-none w-full max-w-none bg-background p-0 text-foreground backdrop:bg-[rgba(10,9,8,0.4)] md:m-auto md:h-[min(720px,90dvh)] md:max-w-[560px] md:rounded-lg md:border md:border-border"
    >
      <div className="flex h-full flex-col">
        <header className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4">
          <h2 id="chat-title" className="font-display text-lg font-semibold italic">
            Ask about {PROFILE.name}
            <span className="text-primary">.</span>
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close chat"
            className="flex h-11 w-11 items-center justify-center text-muted hover:text-foreground"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </header>

        <div
          ref={list}
          aria-live="polite"
          className="flex-1 space-y-3 overflow-y-auto px-4 py-5"
        >
          {messages.length === 0 && (
            <div className="space-y-3">
              <p className="text-sm text-muted">
                Questions about Julio’s experience, projects, or stack. Answers
                are AI-generated from this portfolio.
              </p>
              <ul className="flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <li key={s}>
                    <button
                      type="button"
                      onClick={() => send(s)}
                      className="rounded-lg border border-border px-3 py-2 text-left text-sm hover:border-primary"
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {messages.map((m, i) => (
            <p
              key={i}
              className={
                'max-w-[85%] whitespace-pre-wrap rounded-lg px-3.5 py-2.5 text-[15px] leading-relaxed ' +
                (m.role === 'user'
                  ? 'ml-auto bg-foreground text-background'
                  : 'border border-border bg-surface')
              }
            >
              {m.content}
            </p>
          ))}
          {pending && <p className="font-mono text-xs text-muted">Thinking…</p>}
          {error && (
            <p role="alert" className="text-sm text-primary">
              {error}
            </p>
          )}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            send(input)
          }}
          className="shrink-0 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
        >
          <div className="flex items-end gap-2 rounded-lg border border-border bg-surface p-2 focus-within:border-primary">
            <label htmlFor="chat-input" className="sr-only">
              Message
            </label>
            <textarea
              id="chat-input"
              rows={2}
              maxLength={1000}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  send(input)
                }
              }}
              placeholder="How can I help you?"
              className="max-h-40 flex-1 resize-none bg-transparent px-2 py-1.5 text-[15px] focus-visible:outline-none placeholder:text-subtle"
            />
            <button
              type="submit"
              disabled={pending || !input.trim()}
              aria-label="Send message"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-foreground disabled:opacity-40"
            >
              <ArrowUp aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </dialog>
  )
}
