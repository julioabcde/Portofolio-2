'use client'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

interface TypingEffectProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  showCursor?: boolean
  cursorChar?: string
  className?: string
}

export function TypingEffect({
  words,
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDuration = 2000,
  showCursor = true,
  cursorChar = '|',
  className,
}: TypingEffectProps) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (words.length === 0) return
    const word = words[wordIndex]

    // Fully typed: pause, then start deleting.
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), pauseDuration)
      return () => clearTimeout(t)
    }
    // Fully deleted: advance to next word.
    if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
      return
    }

    const next = deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
    const t = setTimeout(() => setText(next), deleting ? deletingSpeed : typingSpeed)
    return () => clearTimeout(t)
  }, [text, deleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={clsx('inline-flex items-baseline', className)}>
      <span>{text}</span>
      {showCursor && (
        <span className="inline-block ml-0.5 animate-blink" aria-hidden="true">
          {cursorChar}
        </span>
      )}
    </span>
  )
}
