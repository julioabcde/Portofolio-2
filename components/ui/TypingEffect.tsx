'use client'
import { useEffect, useState, useCallback, useRef } from 'react'
import clsx from 'clsx'

type TypingPhase = 'typing' | 'pausing' | 'deleting' | 'waiting'

interface TypingEffectProps {
  /** Array of words/phrases to cycle through */
  words: string[]
  /** Typing speed in milliseconds per character */
  typingSpeed?: number
  /** Deleting speed in milliseconds per character */
  deletingSpeed?: number
  /** Pause duration after typing completes (ms) */
  pauseDuration?: number
  /** Delay before starting to type next word (ms) */
  waitDuration?: number
  /** Whether to show the cursor */
  showCursor?: boolean
  /** Custom cursor character */
  cursorChar?: string
  /** Custom classes for the container */
  className?: string
  /** Custom classes for the text */
  textClassName?: string
  /** Custom classes for the cursor */
  cursorClassName?: string
  /** Whether to loop through words infinitely */
  loop?: boolean
  /** Callback when a word is fully typed */
  onWordComplete?: (word: string, index: number) => void
  /** Callback when all words are typed (only fires if loop is false) */
  onComplete?: () => void
  /** Enable smooth easing for more natural typing rhythm */
  smoothTyping?: boolean
}

/**
 * Generates a random variation for typing speed to simulate natural typing
 */
function getRandomizedSpeed(baseSpeed: number, variation: number = 0.4): number {
  const min = baseSpeed * (1 - variation)
  const max = baseSpeed * (1 + variation)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * TypingEffect Component
 * 
 * A reusable typewriter effect component that cycles through an array of words
 * with smooth, natural-feeling typing and deleting animations.
 * 
 * @example
 * ```tsx
 * <TypingEffect
 *   words={['Developer', 'Designer', 'Creator']}
 *   typingSpeed={80}
 *   deletingSpeed={50}
 *   pauseDuration={2000}
 * />
 * ```
 */
export function TypingEffect({
  words,
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDuration = 2000,
  waitDuration = 300,
  showCursor = true,
  cursorChar = '|',
  className,
  textClassName,
  cursorClassName,
  loop = true,
  onWordComplete,
  onComplete,
  smoothTyping = true,
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [phase, setPhase] = useState<TypingPhase>('typing')
  const [isComplete, setIsComplete] = useState(false)
  
  // Refs for cleanup
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isMountedRef = useRef(true)

  // Clear timeout helper
  const clearCurrentTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  // Get speed with optional randomization for natural feel
  const getSpeed = useCallback(
    (baseSpeed: number) => {
      return smoothTyping ? getRandomizedSpeed(baseSpeed) : baseSpeed
    },
    [smoothTyping]
  )

  useEffect(() => {
    isMountedRef.current = true
    return () => {
      isMountedRef.current = false
      clearCurrentTimeout()
    }
  }, [clearCurrentTimeout])

  useEffect(() => {
    if (!isMountedRef.current || words.length === 0) return
    if (isComplete) return

    const currentWord = words[wordIndex]
    clearCurrentTimeout()

    switch (phase) {
      case 'typing': {
        if (displayText.length < currentWord.length) {
          // Continue typing
          timeoutRef.current = setTimeout(() => {
            if (isMountedRef.current) {
              setDisplayText(currentWord.slice(0, displayText.length + 1))
            }
          }, getSpeed(typingSpeed))
        } else {
          // Word complete, start pausing
          onWordComplete?.(currentWord, wordIndex)
          setPhase('pausing')
        }
        break
      }

      case 'pausing': {
        timeoutRef.current = setTimeout(() => {
          if (isMountedRef.current) {
            setPhase('deleting')
          }
        }, pauseDuration)
        break
      }

      case 'deleting': {
        if (displayText.length > 0) {
          // Continue deleting
          timeoutRef.current = setTimeout(() => {
            if (isMountedRef.current) {
              setDisplayText(displayText.slice(0, -1))
            }
          }, getSpeed(deletingSpeed))
        } else {
          // Deletion complete
          const nextIndex = wordIndex + 1
          
          if (nextIndex >= words.length && !loop) {
            // All words done, not looping
            setIsComplete(true)
            onComplete?.()
          } else {
            // Move to next word
            setWordIndex(nextIndex % words.length)
            setPhase('waiting')
          }
        }
        break
      }

      case 'waiting': {
        timeoutRef.current = setTimeout(() => {
          if (isMountedRef.current) {
            setPhase('typing')
          }
        }, waitDuration)
        break
      }
    }

    return clearCurrentTimeout
  }, [
    displayText,
    phase,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    waitDuration,
    loop,
    isComplete,
    getSpeed,
    clearCurrentTimeout,
    onWordComplete,
    onComplete,
  ])

  return (
    <span className={clsx('inline-flex items-baseline', className)}>
      <span className={textClassName}>{displayText}</span>
      {showCursor && (
        <span
          className={clsx(
            'inline-block ml-0.5 animate-blink',
            cursorClassName
          )}
          aria-hidden="true"
        >
          {cursorChar}
        </span>
      )}
    </span>
  )
}

/**
 * Hook version for more flexibility
 * Returns the current display text and phase information
 */
export function useTypingEffect(
  words: string[],
  options: Omit<TypingEffectProps, 'words' | 'showCursor' | 'cursorChar' | 'className' | 'textClassName' | 'cursorClassName'> = {}
) {
  const {
    typingSpeed = 100,
    deletingSpeed = 60,
    pauseDuration = 2000,
    waitDuration = 300,
    loop = true,
    onWordComplete,
    onComplete,
    smoothTyping = true,
  } = options

  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [phase, setPhase] = useState<TypingPhase>('typing')
  const [isComplete, setIsComplete] = useState(false)

  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isMountedRef = useRef(true)

  const clearCurrentTimeout = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  const getSpeed = useCallback(
    (baseSpeed: number) => {
      return smoothTyping ? getRandomizedSpeed(baseSpeed) : baseSpeed
    },
    [smoothTyping]
  )

  useEffect(() => {
    isMountedRef.current = true
    return () => {
      isMountedRef.current = false
      clearCurrentTimeout()
    }
  }, [clearCurrentTimeout])

  useEffect(() => {
    if (!isMountedRef.current || words.length === 0) return
    if (isComplete) return

    const currentWord = words[wordIndex]
    clearCurrentTimeout()

    switch (phase) {
      case 'typing': {
        if (displayText.length < currentWord.length) {
          timeoutRef.current = setTimeout(() => {
            if (isMountedRef.current) {
              setDisplayText(currentWord.slice(0, displayText.length + 1))
            }
          }, getSpeed(typingSpeed))
        } else {
          onWordComplete?.(currentWord, wordIndex)
          setPhase('pausing')
        }
        break
      }

      case 'pausing': {
        timeoutRef.current = setTimeout(() => {
          if (isMountedRef.current) {
            setPhase('deleting')
          }
        }, pauseDuration)
        break
      }

      case 'deleting': {
        if (displayText.length > 0) {
          timeoutRef.current = setTimeout(() => {
            if (isMountedRef.current) {
              setDisplayText(displayText.slice(0, -1))
            }
          }, getSpeed(deletingSpeed))
        } else {
          const nextIndex = wordIndex + 1

          if (nextIndex >= words.length && !loop) {
            setIsComplete(true)
            onComplete?.()
          } else {
            setWordIndex(nextIndex % words.length)
            setPhase('waiting')
          }
        }
        break
      }

      case 'waiting': {
        timeoutRef.current = setTimeout(() => {
          if (isMountedRef.current) {
            setPhase('typing')
          }
        }, waitDuration)
        break
      }
    }

    return clearCurrentTimeout
  }, [
    displayText,
    phase,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    waitDuration,
    loop,
    isComplete,
    getSpeed,
    clearCurrentTimeout,
    onWordComplete,
    onComplete,
  ])

  return {
    displayText,
    phase,
    wordIndex,
    currentWord: words[wordIndex] ?? '',
    isComplete,
    isTyping: phase === 'typing',
    isDeleting: phase === 'deleting',
    isPaused: phase === 'pausing' || phase === 'waiting',
  }
}

export default TypingEffect
