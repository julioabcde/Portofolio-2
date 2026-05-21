import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ImageOff } from 'lucide-react'
import { PROJECTS } from '@/lib/data/project'
import type { Project } from '@/types/project'

export const metadata: Metadata = {
  title: 'Projects · Archive',
  description:
    'A complete gallery of selected works, case studies, and experiments.',
}

export default function ProjectsArchivePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-container px-header-x-sm md:px-header-x-md lg:px-header-x-lg pt-12 pb-24">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.22em] text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to home
          </Link>
        </div>

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
            engagements.
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
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </section>
      </div>
    </main>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cover = project.images?.[0]
  return (
    <Link href={`/projects/${project.id}`} className="block h-full">
      <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-surface/60 shadow-card backdrop-blur-sm transition-colors hover:border-primary/60">
      <div className="relative aspect-[4/3] overflow-hidden bg-background/60">
        {cover ? (
          <Image
            src={cover}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <ImageOff className="h-10 w-10 text-muted/40" aria-hidden="true" />
          </div>
        )}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>
      <div className="flex flex-col gap-3 p-6">
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.22em] text-muted">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <span>Archive</span>
        </div>
        <h2 className="text-xl font-semibold leading-tight tracking-tight">
          {project.title}
        </h2>
        <p className="text-sm text-muted leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <ul
          className="mt-2 flex flex-wrap gap-2"
          role="list"
          aria-label="Technologies"
        >
          {project.tags.map((tag, i) => (
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
    </Link>
  )
}
