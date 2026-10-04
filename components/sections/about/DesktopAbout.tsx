'use client'

import { useId, useRef, useState } from 'react'
import { Info } from 'lucide-react'
import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  useReducedMotion,
} from 'framer-motion'

import { STORY_BLOCKS, TIMELINE } from '@/lib/data/about'

function StoryBlock({
  number,
  heading,
  body,
}: {
  number: string
  heading: string
  body: string
}) {
  const reduceMotion = useReducedMotion()
  const ref = useRef<HTMLElement>(null)

  // Each block animates relative to its OWN scroll position, so it works
  // regardless of how tall the section is (stacked layout on mobile).
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.35'],
  })

  const PRE = 0.18
  const POST = 1

  const numberOpacity = useTransform(scrollYProgress, [0, 0.4], [PRE, POST])
  const numberBlur = useTransform(
    scrollYProgress,
    [0, 0.4],
    ['blur(8px)', 'blur(0px)'],
  )

  const headingOpacity = useTransform(scrollYProgress, [0.2, 0.6], [PRE, POST])
  const headingY = useTransform(scrollYProgress, [0.2, 0.6], [15, 0])
  const headingBlur = useTransform(
    scrollYProgress,
    [0.2, 0.6],
    ['blur(8px)', 'blur(0px)'],
  )

  const paragraphOpacity = useTransform(
    scrollYProgress,
    [0.4, 0.9],
    [PRE, POST],
  )
  const paragraphY = useTransform(scrollYProgress, [0.4, 0.9], [15, 0])
  const paragraphBlur = useTransform(
    scrollYProgress,
    [0.4, 0.9],
    ['blur(8px)', 'blur(0px)'],
  )

  return (
    <article ref={ref} className="relative pb-8 sm:pb-12">
      <div className="grid grid-cols-[1fr_auto] items-start gap-x-8 sm:gap-x-12">
        <div className="text-right justify-self-end">
          <motion.h3
            style={
              reduceMotion
                ? undefined
                : { opacity: headingOpacity, y: headingY, filter: headingBlur }
            }
            className="font-display text-[clamp(1.75rem,3.4vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-foreground will-change-[opacity,transform,filter]"
          >
            {heading}
          </motion.h3>
          <motion.p
            style={
              reduceMotion
                ? undefined
                : {
                    opacity: paragraphOpacity,
                    y: paragraphY,
                    filter: paragraphBlur,
                  }
            }
            className="mt-5 ml-auto max-w-[60ch] text-justify text-[0.98rem] sm:text-[1.02rem] leading-[1.75] text-muted-foreground will-change-[opacity,transform,filter]"
          >
            {body}
          </motion.p>
        </div>

        <motion.span
          aria-hidden="true"
          style={
            reduceMotion
              ? undefined
              : { opacity: numberOpacity, filter: numberBlur }
          }
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
  info,
  progress,
  index,
  total,
  isRight,
}: {
  period: string
  title: string
  sub: string
  info: string
  progress: MotionValue<number>
  index: number
  total: number
  isRight: boolean
}) {
  const start = (index / total) * 0.8 + 0.05
  const end = start + 0.1

  const textOpacity = useTransform(progress, [start, end], [0.4, 1])
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const tooltipId = useId()

  const textAlignment = isRight ? 'text-left' : 'text-right'
  const textColumn = isRight ? 'col-start-3' : 'col-start-1'

  return (
    <li
      className={`relative grid grid-cols-[1fr_auto_1fr] items-start gap-x-6 ${isInfoOpen ? 'z-20' : ''}`}
    >
      <div
        className="absolute left-1/2 -top-3 z-10 -translate-x-1/2"
        onMouseEnter={() => setIsInfoOpen(true)}
        onMouseLeave={() => setIsInfoOpen(false)}
        onKeyDown={(event) => {
          if (event.key === 'Escape') setIsInfoOpen(false)
        }}
      >
        <button
          type="button"
          aria-label={`More information about ${title}`}
          aria-describedby={isInfoOpen ? tooltipId : undefined}
          onFocus={() => setIsInfoOpen(true)}
          onBlur={() => setIsInfoOpen(false)}
          onClick={() => setIsInfoOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
        >
          <Info
            aria-hidden="true"
            className="h-5 w-5 rounded-full bg-background"
            strokeWidth={1.75}
          />
        </button>
        {isInfoOpen && (
          <div className="absolute left-1/2 top-full w-[min(18rem,calc(100vw-4rem))] -translate-x-1/2 pt-1">
            <div
              id={tooltipId}
              role="tooltip"
              className="rounded-lg border border-border bg-surface px-4 py-3 text-left font-sans text-sm leading-relaxed text-foreground shadow-lg"
            >
              {info}
            </div>
          </div>
        )}
      </div>
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

export default function DesktopAbout() {
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
              <em className="font-light italic text-muted-foreground">
                Credentials.
              </em>
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
              &quot;Good interfaces are quiet. They carry intention, not
              noise.&quot;
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
                      info={t.info}
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
