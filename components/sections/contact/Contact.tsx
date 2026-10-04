'use client'
import { ArrowUpRight } from 'lucide-react'
import { useDesktop } from '@/lib/hooks/useDesktop'
import { PROFILE } from '@/lib/data/profile'
import DesktopContact from './DesktopContact'

export default function Contact() {
  const desktop = useDesktop()
  if (desktop) return <DesktopContact />
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-b border-border"
    >
      <div className="relative overflow-hidden bg-foreground px-5 py-9 text-background sm:px-8">
        <div className="relative">
          <h2
            id="contact-heading"
            className="font-display text-2xl font-bold leading-snug tracking-tight sm:text-3xl"
          >
            Let’s connect<span className="text-primary">.</span>
          </h2>
          <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-[rgba(245,242,237,0.75)]">
            {PROFILE.email}
          </p>
          <a
            href={'mailto:' + PROFILE.email}
            className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-lg bg-primary px-4 font-mono text-[10px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-background hover:text-foreground"
          >
            Get in touch
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
