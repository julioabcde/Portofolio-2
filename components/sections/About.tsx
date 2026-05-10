'use client'

import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
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
  {
    period: 'Future',
    title: 'Coming Soon',
    sub: 'Contact Me!',
  },
] as const

function StoryBlock({
  number,
  heading,
  body,
  progress,
  index,
  total,
}: {
  number: string
  heading: string
  body: string
  progress: MotionValue<number>
  index: number
  total: number
}) {
  const totalScrollRange = 0.85
  const blockStart = (index / total) * totalScrollRange
  const blockEnd = blockStart + (totalScrollRange / total)
  const duration = blockEnd - blockStart

  const step1 = blockStart
  const step2 = blockStart + duration * 0.33
  const step3 = blockStart + duration * 0.66
  const step4 = blockEnd

  const PRE = 0.18
  const POST = 1

  const numberOpacity = useTransform(progress, [step1, step2], [PRE, POST])
  const numberBlur = useTransform(progress, [step1, step2], ['blur(8px)', 'blur(0px)'])

  const headingOpacity = useTransform(progress, [step2, step3], [PRE, POST])
  const headingY = useTransform(progress, [step2, step3], [15, 0])
  const headingBlur = useTransform(progress, [step2, step3], ['blur(8px)', 'blur(0px)'])

  const paragraphOpacity = useTransform(progress, [step3, step4], [PRE, POST])
  const paragraphY = useTransform(progress, [step3, step4], [15, 0])
  const paragraphBlur = useTransform(progress, [step3, step4], ['blur(8px)', 'blur(0px)'])

  return (
    <article className="relative pb-8 sm:pb-12">
      <div className="grid grid-cols-[1fr_auto] items-start gap-x-8 sm:gap-x-12">
        <div className="text-right justify-self-end">
          <motion.h3
            style={{ opacity: headingOpacity, y: headingY, filter: headingBlur }}
            className="font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-foreground will-change-[opacity,transform,filter]"
          >
            {heading}
          </motion.h3>
          <motion.p
            style={{ opacity: paragraphOpacity, y: paragraphY, filter: paragraphBlur }}
            className="mt-5 ml-auto max-w-[60ch] text-justify text-[0.98rem] sm:text-[1.02rem] leading-[1.75] text-muted-foreground will-change-[opacity,transform,filter]"
          >
            {body}
          </motion.p>
        </div>

        <motion.span
          aria-hidden="true"
          style={{ opacity: numberOpacity, filter: numberBlur }}
          className="font-mono text-[2.75rem] sm:text-[3.5rem] leading-none tracking-tight text-foreground/25 select-none will-change-[opacity,filter]"
        >
          {number}
        </motion.span>
      </div>
    </article>
  )
}

function TimelineItem({
  period,
  title,
  sub,
  progress,
  index,
  total,
  isRight,
}: {
  period: string
  title: string
  sub: string
  progress: MotionValue<number>
  index: number
  total: number
  isRight: boolean
}) {
  const start = (index / total) * 0.8 + 0.05
  const end = start + 0.1

  const textOpacity = useTransform(progress, [start, end], [0.4, 1])
  const dotScale = useTransform(progress, [start, end], [1, 1.35])
  const dotGlow = useTransform(
    progress,
    [start, end],
    ['0 0 0px 0px rgba(180,83,9,0)', '0 0 18px 2px rgba(180,83,9,0.45)']
  )
  const dotBg = useTransform(
    progress,
    [start, end],
    ['rgba(168,162,158,0.6)', 'rgba(180,83,9,1)']
  )

  const textAlignment = isRight ? 'text-left' : 'text-right'
  const textColumn = isRight ? 'col-start-3' : 'col-start-1'

  return (
    <li className="relative grid grid-cols-[1fr_auto_1fr] items-start gap-x-6">
      <motion.span
        aria-hidden="true"
        style={{
          scale: dotScale,
          boxShadow: dotGlow,
          backgroundColor: dotBg,
          x: isRight ? -4 : -4,
        }}
        className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full will-change-transform"
      />

      <motion.div
        style={{ opacity: textOpacity }}
        className={`will-change-[opacity] ${textColumn} ${textAlignment}`}
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground/60">
          {period}
        </p>
        <h4 className="mt-2 font-display text-lg font-medium tracking-[-0.01em] text-foreground">
          {title}
        </h4>
        <p className="mt-1 text-sm text-muted-foreground">{sub}</p>
      </motion.div>
    </li>
  )
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null)

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
      <div className="relative z-10 flex flex-col py-section-y-sm md:py-section-y-md lg:py-section-y-md">
        {/* HEADER KE KANAN */}
        <div className="container-page relative">
          <header className="mb-12 flex flex-col items-end text-right">
            <div className="mb-4 flex items-center gap-4 flex-row-reverse">
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
              <em className="font-light italic text-muted-foreground">Credentials.</em>
            </h2>
            <div
              aria-hidden="true"
              className="mt-5 h-px w-full bg-gradient-to-l from-primary via-border to-transparent"
            />
          </header>
        </div>

        <div className="container-page">
          <figure className="mb-12 border-l border-border/60 pl-6 text-right">
            <blockquote className="font-display text-[clamp(1.1rem,2vw,1.6rem)] italic text-foreground/80">
              "Good interfaces are quiet. They carry intention, not noise."
            </blockquote>
            <figcaption className="mt-3 text-[10px] font-mono uppercase tracking-[0.28em] text-muted-foreground">
              Design note
            </figcaption>
          </figure>
        </div>

        <div className="container-page grid grid-cols-1 gap-y-16 lg:grid-cols-[3fr_2fr] lg:gap-x-24">
          {/* LEFT — STORYTELLING */}
          <div className="lg:col-span-1 lg:order-first">
            <div className="space-y-4 lg:space-y-6">
              {STORY_BLOCKS.map((b, index) => (
                <StoryBlock
                  key={b.number}
                  number={b.number}
                  heading={b.heading}
                  body={b.body}
                  progress={scrollYProgress}
                  index={index}
                  total={STORY_BLOCKS.length}
                />
              ))}
            </div>
          </div>

          {/* RIGHT — TIMELINE */}
          <aside className="lg:col-span-1 lg:order-last lg:self-start lg:sticky lg:top-32">
            <div>
              <h3 className="text-center font-display text-[clamp(1.6rem,2.6vw,2.4rem)] font-semibold tracking-[-0.01em] text-foreground">
                Timeline
              </h3>

              <div className="relative mt-8 pb-8">
                {/* base line */}
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent"
                />
                {/* progress glow */}
                <motion.span
                  aria-hidden="true"
                  style={{
                    scaleY: scrollYProgress,
                    transformOrigin: 'top',
                  }}
                  className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary via-primary/40 to-transparent"
                />

                <ul className="space-y-8">
                  {TIMELINE.map((t, index) => (
                    <TimelineItem
                      key={t.title}
                      period={t.period}
                      title={t.title}
                      sub={t.sub}
                      progress={scrollYProgress}
                      index={index}
                      total={TIMELINE.length}
                      isRight={index % 2 === 0}
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
