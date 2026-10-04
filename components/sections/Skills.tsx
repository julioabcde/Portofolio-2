'use client'

import { useEffect, useState } from 'react'
import { useDesktop } from '@/lib/hooks/useDesktop'
import { ROWS, type RowDef, type SkillItem } from '@/lib/data/skills'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function Skills() {
  const desktop = useDesktop()
  if (!desktop)
    return (
      <section
        id="skills"
        aria-labelledby="skills-heading"
        className="border-b border-border"
      >
        <header className="panel-header">
          <h2 id="skills-heading" className="panel-title">
            Stack
          </h2>
        </header>
        {ROWS.map((row, index) => (
          <div
            key={row.label}
            className="space-y-2 border-b border-border py-4 last:border-b-0"
          >
            <h3 className="px-4 text-sm leading-6 text-muted">
              <span className="mr-1.5 font-mono text-primary">
                {String(index + 1).padStart(2, '0')}
              </span>
              {row.label}
            </h3>
            <ul aria-label={row.label} className="flex flex-wrap gap-1.5 px-4">
              {row.items.map((item) => (
                <li key={item.name} className="chip">
                  {item.icon && (
                    <span
                      aria-hidden="true"
                      className="inline-block h-3.5 w-3.5 shrink-0 bg-[rgba(10,9,8,0.7)]"
                      style={{
                        maskImage: `url("https://cdn.simpleicons.org/${item.icon}")`,
                        WebkitMaskImage: `url("https://cdn.simpleicons.org/${item.icon}")`,
                        maskRepeat: 'no-repeat',
                        WebkitMaskRepeat: 'no-repeat',
                        maskSize: 'contain',
                        WebkitMaskSize: 'contain',
                      }}
                    />
                  )}
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    )

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative overflow-hidden bg-background text-foreground"
    >
      {/* Atmospheric Layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply"
        style={{
          backgroundImage:
            'radial-gradient(circle at top, rgba(0,0,0,0.08), transparent 60%)',
        }}
      />

      <div className="relative z-10 flex flex-col py-section-y-sm md:py-section-y-md lg:py-section-y-md">
        <div className="container-page">
          {/* Header */}
          {/* Header */}
          <header className="mb-12">
            <div className="mb-4 flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-7 bg-primary" />
              <p className="text-[10px] font-mono uppercase tracking-[0.26em] text-primary">
                Skills
              </p>
            </div>
            <h2
              id="skills-heading"
              className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[0.95] tracking-[-0.025em]"
            >
              A stack that
              <br />
              <em className="font-display font-light italic text-muted-foreground">
                keeps moving.
              </em>
            </h2>
            <div
              aria-hidden="true"
              className="mt-5 h-px w-full bg-gradient-to-r from-primary via-border to-transparent"
            />
          </header>

          {/* Rows */}
          <div className="space-y-12 md:space-y-14">
            {ROWS.map((row) => (
              <MarqueeRow key={row.roman} {...row} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function MarqueeRow({ roman, label, items, duration, direction }: RowDef) {
  const animationName = direction === 'left' ? 'marquee' : 'marquee-reverse'

  const [order, setOrder] = useState<SkillItem[]>(items)
  useEffect(() => {
    setOrder(shuffle(items))
  }, [items])

  return (
    <div className="group relative">
      {/* Labels */}
      <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.26em]">
        <p className="text-primary/80">
          <span>{roman}</span>
          <span> · </span>
          <span>{label}</span>
        </p>

        <p className="text-foreground/30">
          {String(items.length).padStart(2, '0')} · {duration}s loop
        </p>
      </div>

      {/* Divider */}
      <div aria-hidden="true" className="mt-3 h-px w-full bg-black/[0.06]" />

      {/* Track */}
      <div
        className="relative mt-7 overflow-hidden md:mt-8"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <ul
          role="list"
          aria-label={`${label} skills`}
          className="
            flex w-max items-center gap-4 md:gap-5
            group-hover:[animation-play-state:paused]
            motion-reduce:animate-none
          "
          style={{
            animationName,
            animationDuration: `${duration}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite',
          }}
        >
          {Array.from({ length: 4 }).flatMap((_, copyIdx) =>
            order.map((item, i) => (
              <li
                key={`${item.name}-${copyIdx}-${i}`}
                aria-hidden={copyIdx > 0}
                className="
                  group/pill
                  flex shrink-0 items-center gap-2
                  whitespace-nowrap rounded-full
                  border border-black/[0.08]
                  bg-white/[0.28]
                  px-3.5 py-1.5 md:px-4
                  font-display
                  text-[clamp(0.82rem,1vw,0.98rem)]
                  tracking-[-0.02em]
                  text-foreground/75
                  transition-all duration-300 ease-out
                  hover:border-primary/25
                  hover:bg-primary/[0.05]
                  hover:text-foreground
                "
              >
                {item.icon && (
                  <span
                    aria-hidden="true"
                    className="
                      inline-block h-[1em] w-[1em] shrink-0
                      bg-foreground opacity-60
                      transition-all duration-300
                      group-hover/pill:bg-primary group-hover/pill:opacity-100
                    "
                    style={{
                      maskImage: `url("https://cdn.simpleicons.org/${item.icon}")`,
                      WebkitMaskImage: `url("https://cdn.simpleicons.org/${item.icon}")`,
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      maskSize: 'contain',
                      WebkitMaskSize: 'contain',
                      maskPosition: 'center',
                      WebkitMaskPosition: 'center',
                    }}
                  />
                )}

                <span>{item.name}</span>
              </li>
            )),
          )}
        </ul>
      </div>
    </div>
  )
}
