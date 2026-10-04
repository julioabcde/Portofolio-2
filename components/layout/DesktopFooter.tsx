import { ScrollLink } from '../ui/ScrollLink'

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-[var(--color-background-secondary)]">
      <div className="relative z-10 mx-auto w-full max-w-container px-header-x-sm md:px-header-x-md lg:px-header-x-lg pt-10 pb-8 md:pt-16 md:pb-12">
        <div className="flex items-start justify-between gap-6 sm:gap-8">
          <div className="max-w-sm">
            <p className="font-display text-xl font-bold leading-snug tracking-tight text-foreground sm:text-2xl">
              WHAT IS EARNED, NEVER GIVEN.
            </p>
          </div>
        </div>

        <span
          aria-hidden="true"
          className="block mt-6 select-none whitespace-nowrap font-bold leading-[0.85] tracking-[-0.03em] text-[rgba(10,9,8,0.07)] text-[clamp(3rem,17vw,15rem)] md:mt-14"
        >
          ASCENSION
        </span>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3 md:mt-12">
          <span className="flex items-baseline gap-1.5 font-mono text-xs text-muted sm:text-sm">
            <span className="font-sans text-base leading-none">©</span>
            {new Date().getFullYear()} Julio. All rights reserved.
          </span>

          <ScrollLink
            href="#home"
            className={`self-start font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground ${focusRing}`}
          >
            Back to Start
          </ScrollLink>
        </div>
      </div>
    </footer>
  )
}
