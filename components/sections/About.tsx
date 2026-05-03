'use client'

import { MapPin, GraduationCap, Code2, Languages } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

interface InfoTile {
  label: string
  value: string
  Icon: IconComponent
}

const INFO_TILES: readonly InfoTile[] = [
  { label: 'Location', value: 'Jakarta, Indonesia', Icon: MapPin },
  { label: 'University', value: 'BINUS University', Icon: GraduationCap },
  { label: 'Focus', value: 'Frontend Development', Icon: Code2 },
  { label: 'Languages', value: 'Indonesian, English', Icon: Languages },
]

const EXPERIENCES = [
  {
    period: '2024 — Present',
    role: 'Frontend Developer',
    company: 'Periksa.id',
    type: 'Enrichment Program',
  },
  {
    period: '2021 — Present',
    role: 'Computer Science',
    company: 'BINUS University',
    type: 'Undergraduate',
  },
] as const

export default function About() {
  return (
    <section
      id="about"
      className="relative py-section-y-sm md:py-section-y-md lg:py-section-y-lg overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="container-page relative">

        {/* Section header with large number */}
        <header className="mb-rule-gap-sm md:mb-rule-gap flex items-end gap-6">
          <span
            aria-hidden="true"
            className="text-[8rem] md:text-[10rem] font-bold leading-none text-border/50 select-none -mb-4"
          >
            03
          </span>
          <div className="pb-4">
            <p className="text-sm font-mono text-primary uppercase tracking-widest mb-2">
              About Me
            </p>
            <h2
              id="about-heading"
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Who I Am
            </h2>
          </div>
        </header>

        {/**
         * Bento grid layout — asymmetric tiles.
         */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 auto-rows-[100px]">

          {/* Bio card — large tile with photo */}
          <article
            className="col-span-2 md:col-span-2 lg:col-span-3 row-span-3
                       rounded-md border border-border bg-surface/40 backdrop-blur-sm
                       p-6 md:p-8 flex flex-col"
          >
            <div className="flex items-start gap-5 mb-6">
              <div
                aria-hidden="true"
                className="shrink-0 flex h-20 w-20 items-center justify-center
                           rounded-md border border-border bg-primary text-white
                           text-3xl font-bold tracking-tight"
              >
                J
              </div>
              <div>
                <h3 className="text-xl font-bold">Julio</h3>
                <p className="text-sm text-primary font-mono">Frontend Developer</p>
                <p className="flex items-center gap-1.5 text-xs text-muted mt-1">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-secondary" />
                  </span>
                  Available for opportunities
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed text-[15px] mb-4">
              A Computer Science student at BINUS University with a passion for building
              clean, accessible, and performant user interfaces. I care about the details
              that make software feel polished.
            </p>
            <p className="text-muted leading-relaxed text-[15px]">
              Currently working as a Frontend Developer at Periksa.id, building
              healthcare technology for hospitals across Indonesia.
            </p>

            <figure className="mt-auto pt-6 border-t border-border/50">
              <blockquote className="text-sm italic text-muted/70">
                &ldquo;Every pixel matters, every interaction should feel intentional.&rdquo;
              </blockquote>
            </figure>
          </article>

          {/* Info tiles — small bento squares */}
          {INFO_TILES.map(({ label, value, Icon }) => (
            <div
              key={label}
              className="col-span-1 row-span-1 rounded-md border border-border bg-surface/30
                         backdrop-blur-sm p-4 flex flex-col justify-between
                         transition-all duration-300 hover:border-primary/30 hover:bg-surface/50"
            >
              <Icon
                aria-hidden="true"
                className="h-5 w-5 text-primary/60"
              />
              <div>
                <p className="text-[10px] font-mono text-muted/70 uppercase tracking-wider">
                  {label}
                </p>
                <p className="text-sm font-medium text-foreground mt-0.5 leading-snug">
                  {value}
                </p>
              </div>
            </div>
          ))}

          {/* Stats tile — wide */}
          <div
            className="col-span-2 lg:col-span-2 row-span-1 rounded-md border border-border bg-surface/30
                       backdrop-blur-sm p-4 flex items-center justify-around gap-4"
          >
            {[
              { label: 'Projects', value: '10+' },
              { label: 'Stack', value: '15+' },
              { label: 'Coffee', value: '999+' },
            ].map((stat) => (
              <dl key={stat.label} className="text-center">
                <dd className="text-2xl font-bold text-primary leading-none">{stat.value}</dd>
                <dt className="text-[10px] font-mono text-muted/70 uppercase tracking-wider mt-1">
                  {stat.label}
                </dt>
              </dl>
            ))}
          </div>

          {/* Experience strip */}
          {EXPERIENCES.map((exp, i) => (
            <article
              key={i}
              className="col-span-2 md:col-span-2 lg:col-span-3 row-span-1
                         rounded-md border border-border bg-surface/30 backdrop-blur-sm
                         p-4 flex items-center gap-4"
            >
              <div className="shrink-0 flex flex-col items-center gap-1">
                <div className="h-2.5 w-2.5 rounded-full border-2 border-primary bg-background" />
                {i < EXPERIENCES.length - 1 && (
                  <div className="w-px h-4 bg-border" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold truncate">{exp.role}</h4>
                  <span className="rounded-full border border-border px-2 py-0.5
                                   text-[10px] font-mono text-muted shrink-0">
                    {exp.type}
                  </span>
                </div>
                <p className="text-xs text-muted mt-0.5">{exp.company}</p>
              </div>

              <time className="text-[10px] font-mono text-muted/70 uppercase tracking-wider shrink-0">
                {exp.period}
              </time>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
