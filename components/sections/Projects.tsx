'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  useMotionValueEvent,
  type MotionValue,
} from 'framer-motion'
import { ArrowUpRight, ImageOff } from 'lucide-react'
import { PROJECTS } from '@/lib/data/project'
import type { Project } from '@/types/project'

const CATEGORIES: Record<string, string> = {
  velocart: 'Point of Sales · Web App',
  portfolio: 'Personal Branding · Web',
  periksa: 'Healthcare · Dashboard',
  'project-4': 'Web Application',
}

const CARD_VW = 70
const SIDE_PAD_VW = (100 - CARD_VW) / 2
const GAP_VW = 4

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const total = PROJECTS.length
  const segments = Math.max(total - 1, 1)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.35,
    restDelta: 0.0005,
  })
  const driver = reduceMotion ? scrollYProgress : smoothProgress

  const stepVw = CARD_VW + GAP_VW
  const x = useTransform(driver, p => `${-p * segments * stepVw}vw`)
  const progressBarWidth = useTransform(driver, p => `${p * 100}%`)

  return (
    <section
      ref={sectionRef}
      id="projects"
      aria-labelledby="projects-heading"
      className="relative bg-background text-foreground"
      style={{ height: `${total * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        {/* Header — bold variant */}
        <header className="container-page relative z-10 pt-12 md:pt-16">
          <div className="mb-4 flex items-center gap-4">
            <span
              aria-hidden="true"
              className="h-px w-7 bg-primary"
            />
            <p className="text-[10px] font-mono uppercase tracking-[0.26em] text-primary">
              Projects
            </p>
          </div>
          <h2
            id="projects-heading"
            className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[0.95] tracking-[-0.025em]"
          >
            Selected
            <br />
            <em className="font-light italic text-muted">Works.</em>
          </h2>
          <div
            aria-hidden="true"
            className="mt-5 h-px bg-gradient-to-r from-primary via-border to-transparent"
          />
        </header>

        {/* Horizontal showcase */}
        <div className="relative z-10 flex flex-1 items-center">
          <motion.div
            className="flex h-full items-center will-change-transform"
            style={{ x }}
          >
            {PROJECTS.map((project, i) => (
              <ProjectShowcase
                key={project.id}
                project={project}
                index={i}
                count={total}
                progress={driver}
              />
            ))}
          </motion.div>
        </div>

        {/* Scroll progress indicator */}
        <ScrollIndicator
          progress={driver}
          progressBarWidth={progressBarWidth}
          total={total}
        />
      </div>
    </section>
  )
}

interface ShowcaseProps {
  project: Project
  index: number
  count: number
  progress: MotionValue<number>
}

function ProjectShowcase({ project, index, count, progress }: ShowcaseProps) {
  const segments = Math.max(count - 1, 1)
  const center = index / segments

  const activeness = useTransform(progress, p => {
    const distance = Math.abs(p - center) * segments
    return Math.max(0, 1 - Math.min(distance, 1))
  })

  const scale = useTransform(activeness, [0, 1], [0.86, 1])
  const opacity = useTransform(activeness, [0, 1], [0.28, 1])
  const blurPx = useTransform(activeness, [0, 1], [8, 0])
  const filter = useTransform(blurPx, b => `blur(${b}px)`)
  const yShift = useTransform(activeness, [0, 1], [18, 0])
  const titleX = useTransform(activeness, [0, 1], [32, 0])

  const isFirst = index === 0
  const isLast = index === count - 1
  const hasLiveUrl = project.liveUrl && project.liveUrl !== '#'
  const hasRepoUrl = project.repoUrl && project.repoUrl !== '#'

  return (
    <motion.article
      className="relative shrink-0"
      style={{
        width: `${CARD_VW}vw`,
        marginLeft: isFirst ? `${SIDE_PAD_VW}vw` : `${GAP_VW / 2}vw`,
        marginRight: isLast ? `${SIDE_PAD_VW}vw` : `${GAP_VW / 2}vw`,
        scale,
        opacity,
        filter,
        y: yShift,
      }}
    >
      <div className="grid h-[60vh] grid-cols-1 overflow-hidden rounded-2xl border border-border bg-surface/60 shadow-card backdrop-blur-sm lg:grid-cols-[1.15fr_1fr]">
        {/* Image */}
        <div className="relative h-44 overflow-hidden bg-background/60 lg:h-full">
          {project.image ? (
            <Image
              src={project.image}
              alt={`Preview of ${project.title}`}
              fill
              sizes="(max-width: 1024px) 70vw, 40vw"
              className="object-cover"
              priority={index === 0}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <ImageOff
                className="h-12 w-12 text-muted/40"
                aria-hidden="true"
              />
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col justify-between gap-6 p-6 md:p-8 lg:p-10">
          <div className="flex items-start justify-between text-[11px] font-mono uppercase tracking-[0.22em] text-muted">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <span className="text-right">
              {CATEGORIES[project.id] ?? 'Web Project'}
            </span>
          </div>

          <motion.div style={{ x: titleX }}>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.05] tracking-tight">
              {project.title}
            </h3>
            <p className="mt-4 max-w-md text-sm md:text-base text-muted leading-relaxed line-clamp-3">
              {project.description}
            </p>

            <ul
              className="mt-5 flex flex-wrap gap-2"
              role="list"
              aria-label="Technologies used"
            >
              {project.tags.map(tag => (
                <li
                  key={tag}
                  className="rounded-full border border-border bg-background/40 px-3 py-1 text-[11px] font-mono text-muted"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="flex items-center gap-6">
            {hasLiveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 border-b border-foreground/40 pb-1 text-xs font-mono uppercase tracking-[0.22em] text-foreground transition-colors hover:border-foreground"
              >
                Visit site
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ) : (
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-muted">
                Coming soon
              </span>
            )}
            {hasRepoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono uppercase tracking-[0.22em] text-muted transition-colors hover:text-foreground"
              >
                Source
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

interface IndicatorProps {
  progress: MotionValue<number>
  progressBarWidth: MotionValue<string>
  total: number
}

function ScrollIndicator({
  progress,
  progressBarWidth,
  total,
}: IndicatorProps) {
  const segments = Math.max(total - 1, 1)
  const [current, setCurrent] = useState(1)

  useMotionValueEvent(progress, 'change', p => {
    const idx = Math.min(
      Math.max(Math.round(p * segments) + 1, 1),
      total,
    )
    setCurrent(prev => (prev === idx ? prev : idx))
  })

  return (
    <div className="container-page relative z-10 pb-8 md:pb-10">
      <div className="flex items-center gap-6">
        <span className="font-mono text-xs uppercase tracking-[0.28em] text-muted tabular-nums">
          {String(current).padStart(2, '0')}
        </span>

        {/* Progress line */}
        <div className="relative h-px flex-1 overflow-hidden bg-border">
          <motion.div
            className="absolute inset-y-0 left-0 bg-foreground"
            style={{ width: progressBarWidth }}
          />
          {/* Step ticks */}
          <div className="pointer-events-none absolute inset-0 flex justify-between">
            {Array.from({ length: total }).map((_, i) => (
              <span
                key={i}
                aria-hidden="true"
                className={`h-2 w-px -translate-y-1/2 self-center ${
                  i + 1 <= current ? 'bg-foreground' : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>

        <span className="font-mono text-xs uppercase tracking-[0.28em] text-muted tabular-nums">
          {String(total).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}
