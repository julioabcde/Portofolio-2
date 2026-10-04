'use client'

import { useEffect, useState, useSyncExternalStore } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useDesktop } from '@/lib/hooks/useDesktop'

type Greeting = { text: string; lang: string; locale: string }

const greetings: Greeting[] = [
    { text: 'Hello', lang: 'English', locale: 'en' },
    { text: 'Halo', lang: 'Indonesian', locale: 'id' },
    { text: 'Hola', lang: 'Spanish', locale: 'es' },
    { text: 'Ciao', lang: 'Italian', locale: 'it' },
    { text: 'Salut', lang: 'French', locale: 'fr' },
    { text: 'Hej', lang: 'Swedish', locale: 'sv' },
    { text: 'Oi', lang: 'Portuguese', locale: 'pt' },
    { text: '你好', lang: 'Mandarin', locale: 'zh' },
    { text: '안녕하세요', lang: 'Korean', locale: 'ko' },
    { text: 'こんにちは', lang: 'Japanese', locale: 'ja' },
    { text: 'สวัสดี', lang: 'Thai', locale: 'th' },
    { text: 'Kumusta', lang: 'Tagalog', locale: 'tl' },
]

const BASE_BEAT_MS = 100
const MS_PER_CHAR = 20
const MIN_BEAT_MS = 200
const REDUCED_MOTION_HOLD_MS = 900

const beatFor = (text: string) => {
    const chars = text.replace(/\s+/g, '').length
    return Math.max(MIN_BEAT_MS, BASE_BEAT_MS + chars * MS_PER_CHAR)
}

/**
 * Session gating.
 *
 * The splash plays once per browser tab session. The flag is written only
 * after the exit animation completes, so an interrupted splash replays.
 *
 * sessionStorage is read through useSyncExternalStore: the server snapshot is
 * `null` ("unknown"), which renders a plain cover in the same background
 * colour. That avoids both a hydration mismatch and a flash of the homepage
 * before the splash appears. Once hydrated, React re-renders with the real
 * client value.
 */
const SPLASH_SEEN_KEY = 'portfolio-splash-seen'

const subscribeNoop = () => () => {}

const readSplashSeen = (): boolean => {
    try {
        return window.sessionStorage.getItem(SPLASH_SEEN_KEY) === 'true'
    } catch {
        // Storage unavailable (privacy mode, etc.): skip rather than replay on every visit.
        return true
    }
}

const getServerSnapshot = (): boolean | null => null

const markSplashSeen = () => {
    try {
        window.sessionStorage.setItem(SPLASH_SEEN_KEY, 'true')
    } catch {
        // Ignore — worst case the splash plays again next time.
    }
}

export default function SplashScreen() {
    const seen = useSyncExternalStore(subscribeNoop, readSplashSeen, getServerSnapshot)

    if (seen === null) {
        return <div aria-hidden="true" className="fixed inset-0 z-[9999] bg-background" />
    }

    if (seen) return null

    return <SplashSequence />
}

function SplashSequence() {
    const reduceMotion = useReducedMotion()
    // Reduced motion: hold a single greeting briefly instead of cycling through all of them.
    const compact = !useDesktop()
    const total = reduceMotion || compact ? 1 : greetings.length

    const [index, setIndex] = useState(0)
    const [exiting, setExiting] = useState(false)

    useEffect(() => {
        if (exiting) return

        const beat = compact ? 450 : reduceMotion ? REDUCED_MOTION_HOLD_MS : beatFor(greetings[index].text)
        const t = setTimeout(() => {
            if (index + 1 < total) {
                setIndex(index + 1)
            } else {
                setExiting(true)
            }
        }, beat)
        return () => clearTimeout(t)
    }, [index, exiting, reduceMotion, compact, total])

    const current = greetings[Math.min(index, total - 1)]

    return (
        <AnimatePresence onExitComplete={markSplashSeen}>
            {!exiting && (
                <motion.section
                    key="splash"
                    aria-hidden="true"
                    initial={false}
                    exit={reduceMotion || compact ? { opacity: 0 } : { y: '-100%' }}
                    transition={
                        reduceMotion || compact
                            ? { duration: 0.3 }
                            : { duration: 0.9, ease: [0.83, 0, 0.17, 1] }
                    }
                    className="fixed inset-0 z-[9999] bg-background flex items-center justify-center will-change-transform"
                >
                    <motion.div
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.7, 0, 0.84, 0] }}
                        className="flex flex-col items-center gap-3 text-center"
                    >
                        <p
                            key={`greet-${index}`}
                            lang={current.locale}
                            className="text-6xl font-semibold sm:text-7xl"
                            style={{
                                fontFamily:
                                    'Georgia, "Songti SC", "STSong", "Noto Serif SC", "Noto Serif JP", "Noto Serif KR", "Yu Mincho", "Hiragino Mincho ProN", "MS Mincho", "Noto Serif Thai", "Leelawadee UI", "Tahoma", serif',
                            }}
                        >
                            {current.text}
                        </p>

                        <p className="text-xs uppercase tracking-[0.32em] text-muted">
                            {current.lang}
                        </p>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}
