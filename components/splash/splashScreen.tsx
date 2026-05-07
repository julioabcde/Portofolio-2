'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type Greeting = { text: string; lang: string; locale: string }

type Props = {
    onFinish?: () => void
}

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

const beatFor = (text: string) => {
    const chars = text.replace(/\s+/g, '').length
    return Math.max(MIN_BEAT_MS, BASE_BEAT_MS + chars * MS_PER_CHAR)
}

export default function SplashScreen({ onFinish }: Props) {
    const [index, setIndex] = useState(0)
    const [exiting, setExiting] = useState(false)

    useEffect(() => {
        if (index >= greetings.length) {
            setExiting(true)
            return
        }

        const beat = beatFor(greetings[index].text)
        const t = setTimeout(() => setIndex((i) => i + 1), beat)
        return () => clearTimeout(t)
    }, [index])

    const safeIndex = Math.min(index, greetings.length - 1)
    const current = greetings[safeIndex]

    return (
        <AnimatePresence onExitComplete={() => onFinish?.()}>
            {!exiting && (
                <motion.section
                    key="splash"
                    initial={false}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.9, ease: [0.83, 0, 0.17, 1] }}
                    className="fixed inset-0 z-[9999] bg-background flex items-center justify-center will-change-transform"
                >
                    <motion.div
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.7, 0, 0.84, 0] }}
                        className="flex flex-col items-center gap-3 text-center"
                    >
                        <h1
                            key={`greet-${index}`}
                            lang={current.locale}
                            className="text-6xl font-semibold sm:text-7xl"
                            style={{
                                fontFamily:
                                    'Georgia, "Songti SC", "STSong", "Noto Serif SC", "Noto Serif JP", "Noto Serif KR", "Yu Mincho", "Hiragino Mincho ProN", "MS Mincho", "Noto Serif Thai", "Leelawadee UI", "Tahoma", serif',
                            }}
                        >
                            {current.text}
                        </h1>

                        <p className="text-xs uppercase tracking-[0.32em] text-muted">
                            {current.lang}
                        </p>
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    )
}
