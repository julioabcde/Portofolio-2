import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ImageOff } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects · Archive',
  description:
    'A complete gallery of selected works, case studies, and experiments.',
}

const PLACEHOLDER_COUNT = 9

export default function ProjectsArchivePage() {
  const placeholders = Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => i)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-container px-header-x-sm md:px-header-x-md lg:px-header-x-lg pt-32 pb-24">
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
          Back
        </Link>

        <header className="mt-10 max-w-3xl">
          <div className="mb-4 flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-7 bg-primary" />
            <p className="text-[10px] font-mono uppercase tracking-[0.26em] text-primary">
              Archive
            </p>
          </div>
          <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.95] tracking-[-0.025em]">
            All
            <br />
            <em className="font-light italic text-muted">Projects.</em>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted leading-relaxed">
            A complete index of selected works, experiments, and client
            engagements. Cards below are placeholders — real entries will land
            here as the archive is migrated.
          </p>
          <div
            aria-hidden="true"
            className="mt-8 h-px bg-gradient-to-r from-primary via-border to-transparent"
          />
        </header>

        <section
          aria-label="Project gallery"
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {placeholders.map(i => (
            <PlaceholderCard key={i} index={i} />
          ))}
        </section>
      </div>
    </main>
  )
}

function PlaceholderCard({ index }: { index: number }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60 shadow-card backdrop-blur-sm transition-colors hover:border-primary/60">
      <div className="relative aspect-[4/3] overflow-hidden bg-background/60">
        <div className="absolute inset-0 flex items-center justify-center">
          <ImageOff className="h-10 w-10 text-muted/40" aria-hidden="true" />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>
      <div className="flex flex-col gap-3 p-6">
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.22em] text-muted">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <span>Placeholder</span>
        </div>
        <h2 className="text-xl font-semibold leading-tight tracking-tight">
          Project Title
        </h2>
        <p className="text-sm text-muted leading-relaxed line-clamp-2">
          A short description of the project will live here once the archive is
          populated.
        </p>
        <ul
          className="mt-2 flex flex-wrap gap-2"
          role="list"
          aria-label="Technologies"
        >
          {['Tag', 'Tag', 'Tag'].map((tag, i) => (
            <li
              key={i}
              className="rounded-full border border-border bg-background/40 px-3 py-1 text-[10px] font-mono text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
