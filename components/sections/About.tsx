'use client'

import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion'

const STORY_BLOCKS = [
  {
    number: '01',
    heading: 'Where It Started',
    body: 'My interest in technology started early — taking machines apart, reading documentation I barely understood, building tiny things that did not quite work. The web was the first place where what I built could actually live somewhere, and that quiet thrill never left.',
  },
  {
    number: '02',
    heading: 'Learning the Skills',
    body: 'As my curiosity grew, I started shaping it deliberately. Typography, interaction design, motion, and the engineering beneath premium interfaces — I learned that craft is the slow distance between something that works and something that feels right.',
  },
  {
    number: '03',
    heading: 'My Experience',
    body: 'My professional journey has included shipping production interfaces, collaborating with designers and product teams, and translating editorial ambition into code that performs. Each project is a study in restraint, precision, and pacing.',
  },
] as const

const TIMELINE = [
  {
    period: '2022 — Present',
    title: 'Binus University',
    sub: 'Computer Science',
  },
  {
    period: '2025 — 2026',
    title: 'Front End Developer',
    sub: 'Periksa Solusi Indonesia',
  },
] as const

function StoryBlock({
  number,
  heading,
  body,
}: {
  number: string
  heading: string
  body: string
}) {
  const ref = useRef<HTMLElement>(null)

  // Memperlebar offset agar jarak scroll cukup panjang untuk menjalankan urutan animasi
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 90%', 'center 40%'],
  })

  const PRE = 0.18
  const POST = 1

  // STEP 1: Number muncul paling awal (0% - 30% scroll progress)
  const numberOpacity = useTransform(scrollYProgress, [0, 0.3], [PRE, POST])
  const numberBlur = useTransform(scrollYProgress, [0, 0.3], ['blur(8px)', 'blur(0px)'])

  // STEP 2 & 3: Heading reveal saat user scroll sedikit lagi (20% - 55% scroll progress)
  // Mulai sedikit tumpang tindih dengan number agar flow-nya seamless
  const headingOpacity = useTransform(scrollYProgress, [0.2, 0.55], [PRE, POST])
  const headingY = useTransform(scrollYProgress, [0.2, 0.55], [15, 0])
  const headingBlur = useTransform(scrollYProgress, [0.2, 0.55], ['blur(8px)', 'blur(0px)'])

  // STEP 4 & 5: Paragraph fade in secara perlahan setelah heading (45% - 90% scroll progress)
  const paragraphOpacity = useTransform(scrollYProgress, [0.45, 0.9], [PRE, POST])
  const paragraphY = useTransform(scrollYProgress, [0.45, 0.9], [15, 0])
  const paragraphBlur = useTransform(scrollYProgress, [0.45, 0.9], ['blur(8px)', 'blur(0px)'])

  return (
    <article ref={ref} className="relative py-8 sm:py-12">
      <div className="grid grid-cols-[auto_1fr] items-start gap-x-8 sm:gap-x-12">
        <motion.span
          aria-hidden="true"
          style={{ opacity: numberOpacity, filter: numberBlur }}
          className="font-mono text-[2.75rem] sm:text-[3.5rem] leading-none tracking-tight text-foreground/25 select-none will-change-[opacity,filter]"
        >
          {number}
        </motion.span>

        <div>
          <motion.h3
            style={{ opacity: headingOpacity, y: headingY, filter: headingBlur }}
            className="font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-foreground will-change-[opacity,transform,filter]"
          >
            {heading}
          </motion.h3>
          <motion.p
            style={{ opacity: paragraphOpacity, y: paragraphY, filter: paragraphBlur }}
            className="mt-5 max-w-[52ch] text-[0.98rem] sm:text-[1.02rem] leading-[1.75] text-muted will-change-[opacity,transform,filter]"
          >
            {body}
          </motion.p>
        </div>
      </div>
    </article>
  )
}

function TimelineItem({
  period,
  title,
  sub,
}: {
  period: string
  title: string
  sub: string
}) {
  const ref = useRef<HTMLLIElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 85%', 'center center'],
  })

  const textOpacity = useTransform(scrollYProgress, [0, 1], [0.4, 1])
  const dotScale = useTransform(scrollYProgress, [0, 1], [1, 1.35])
  const dotGlow = useTransform(
    scrollYProgress,
    [0, 1],
    ['0 0 0px 0px rgba(180,83,9,0)', '0 0 18px 2px rgba(180,83,9,0.45)']
  )
  const dotBg = useTransform(
    scrollYProgress,
    [0, 1],
    ['rgba(168,162,158,0.6)', 'rgba(180,83,9,1)']
  )

  return (
    <li ref={ref} className="relative pl-8 py-4">
      <motion.span
        aria-hidden="true"
        style={{
          scale: dotScale,
          boxShadow: dotGlow,
          backgroundColor: dotBg,
        }}
        className="absolute left-0 top-6 h-2 w-2 -translate-x-[3px] rounded-full will-change-transform"
      />

      <motion.div
        style={{ opacity: textOpacity }}
        className="will-change-[opacity]"
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-subtle">
          {period}
        </p>
        <h4 className="mt-2 font-display text-lg font-medium tracking-[-0.01em] text-foreground">
          {title}
        </h4>
        <p className="mt-1 text-sm text-muted">{sub}</p>
      </motion.div>
    </li>
  )
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Progress bar timeline tetap menggunakan parent ref agar garisnya turun seiring scroll section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  return (
    <section
      ref={containerRef}
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-clip bg-background text-foreground"
    >
      <div className="relative z-10 flex flex-col py-20 lg:py-24">
        <div className="container-page relative">
          <header className="mb-rule-gap-sm md:mb-rule-gap">
            <div className="mb-4 flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-7 bg-primary" />
              <p className="text-[10px] font-mono uppercase tracking-[0.26em] text-primary">
                About
              </p>
            </div>
            <h2
              id="about-heading"
              className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[0.95] tracking-[-0.025em]"
            >
              More Than
              <br />
              <em className="font-light italic text-muted">Credentials.</em>
            </h2>
            <div
              aria-hidden="true"
              className="mt-5 h-px bg-gradient-to-r from-primary via-border to-transparent"
            />
          </header>
        </div>

        <div className="container-page grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-16">
          {/* LEFT — storytelling */}
          <div className="lg:col-span-8">
            <div className="space-y-4 lg:space-y-6">
              {STORY_BLOCKS.map((b) => (
                <StoryBlock
                  key={b.number}
                  number={b.number}
                  heading={b.heading}
                  body={b.body}
                />
              ))}
            </div>
          </div>

          {/* RIGHT — timeline */}
          <aside className="lg:col-span-4 lg:self-start lg:sticky lg:top-32">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-subtle">
                Timeline
              </p>

              <div className="relative mt-8 pb-8">
                {/* base line */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-border to-transparent"
                />
                {/* progress glow */}
                <motion.span
                  aria-hidden="true"
                  style={{
                    scaleY: scrollYProgress,
                    transformOrigin: 'top',
                  }}
                  className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary via-primary/40 to-transparent"
                />

                <ul className="space-y-6">
                  {TIMELINE.map((t) => (
                    <TimelineItem
                      key={t.title}
                      period={t.period}
                      title={t.title}
                      sub={t.sub}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}