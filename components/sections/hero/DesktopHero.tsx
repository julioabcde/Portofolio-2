import { PROFILE } from '@/lib/data/profile'
import SocialLinks from '@/components/ui/SocialLinks'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { SlideEffect } from '@/components/ui/SlideEffect'
import { ScrollLink } from '@/components/ui/ScrollLink'

export default function DesktopHero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-24 pb-16 md:pt-28 lg:pt-32"
    >
      <div className="container-page grid items-center gap-y-8 lg:grid-cols-[1.35fr_1fr] lg:gap-x-14 lg:gap-y-12 xl:gap-x-16">
        {/* ── Copy ─────────────────────────────────────────── */}
        <div className="hidden lg:block relative z-[1] order-1 text-center lg:self-start lg:text-left lg:order-none lg:col-start-1 lg:row-start-1">
          <p className="mb-8 flex items-center justify-center gap-4 font-mono text-[11px] font-bold uppercase tracking-[0.35em] text-primary md:text-xs lg:justify-start">
            {PROFILE.greeting}
            <span aria-hidden="true" className="h-px w-14 bg-primary/40" />
          </p>

          <h1
            className="font-display font-extrabold leading-[0.85] tracking-[-0.045em] text-foreground"
            style={{ fontSize: 'clamp(4.75rem, 13.3vw, 12.35rem)' }}
          >
            {PROFILE.name}
            <span aria-hidden="true" className="text-primary">
              .
            </span>
          </h1>

          <p
            className="hidden lg:block mt-6 font-display font-semibold leading-tight tracking-[-0.02em] text-foreground"
            style={{ fontSize: 'clamp(1.75rem, 2.85vw, 3.25rem)' }}
          >
            {PROFILE.role}
          </p>

          <p className="hidden lg:block mt-9 max-w-[35rem] font-display text-lg leading-relaxed text-muted md:text-xl lg:text-[1.55rem] lg:leading-[1.45]">
            {PROFILE.introduction}
          </p>
        </div>

        <div className="order-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start lg:order-none lg:col-start-1 lg:row-start-2">
          <ScrollLink
            href="#projects"
            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-md bg-primary px-4 sm:px-9 text-white"
          >
            <SlideEffect
              fillColor="bg-foreground"
              fillTextColor="text-background"
              duration={300}
            >
              <span className="flex items-center gap-3 font-sans text-sm font-medium uppercase tracking-[0.16em]">
                View Work
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </SlideEffect>
          </ScrollLink>

          <a
            href={PROFILE.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-md border border-foreground px-4 sm:px-9 text-foreground"
          >
            <SlideEffect
              fillColor="bg-foreground"
              fillTextColor="text-background"
              duration={300}
            >
              <span className="flex items-center gap-3 font-sans text-sm font-medium uppercase tracking-[0.16em]">
                View CV
                <ArrowUpRight className="h-5 w-5" />
              </span>
            </SlideEffect>
          </a>
        </div>

        {/* ── Portrait ─────────────────────────────────────── */}
        <div className="order-2 flex justify-center lg:order-none lg:col-start-2 lg:row-start-1">
          <div className="relative aspect-square w-[78vw] max-w-[380px] sm:max-w-[440px] lg:w-full lg:max-w-[480px] xl:max-w-[520px]">
            {/* Thin accent arc — slightly larger than the disc, nudged right, open on the upper-left */}
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              className="absolute inset-[-3%] translate-x-[1.5%] -rotate-[74deg] overflow-visible"
            >
              <circle
                cx="50"
                cy="50"
                r="49.5"
                pathLength={360}
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="0.18"
                strokeLinecap="round"
                strokeDasharray="240 120"
              />
            </svg>
            {/* Accent dot sitting on the arc (~1:30 o'clock) */}
            <span
              aria-hidden="true"
              className="absolute left-[91%] top-[16%] z-[3] h-[6%] w-[6%] rounded-full bg-primary"
            />

            {/* Warm disc + portrait (pre-cropped square export) */}
            <div className="absolute inset-0 z-[2] overflow-hidden rounded-full bg-[#DCEBFA]">
              <Image
                src={PROFILE.portrait}
                alt="Julio, Frontend Engineer"
                fill
                priority
                sizes="(min-width: 1440px) 520px, (min-width: 1024px) 40vw, (min-width: 640px) 440px, 78vw"
                className="origin-top scale-[1.13] select-none object-cover"
              />
            </div>
          </div>
        </div>
        {/* A shared desktop row aligns the social icons with the CTA buttons. */}
        <SocialLinks className="order-3 flex h-14 items-center justify-center gap-5 lg:order-none lg:col-start-2 lg:row-start-2" />
      </div>
    </section>
  )
}
