import Link from 'next/link'
import ShellLink from '@/components/layout/ShellLink'
import { ArrowUpRight, Globe, Monitor, Smartphone } from 'lucide-react'
import { FEATURED_PROJECTS, PROJECTS } from '@/lib/data/project'

const PLATFORM_ICONS = { web: Globe, mobile: Smartphone, desktop: Monitor }

export default function MobileSelectedWorks() {
  return (
    <section
      id="projects"
      aria-labelledby="selected-projects-heading"
      className="border-b border-border"
    >
      <header className="panel-header flex items-center justify-between gap-3">
        <h2 id="selected-projects-heading" className="panel-title">
          Projects
          <sup className="panel-count">({PROJECTS.length})</sup>
        </h2>
        <ShellLink
          href="/projects"
          className="inline-flex min-h-11 items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-primary"
        >
          View all
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </ShellLink>
      </header>
      <ul>
        {FEATURED_PROJECTS.map((project) => {
          const Icon = PLATFORM_ICONS[project.platform ?? 'web']
          return (
            <li key={project.id} className="border-b border-border last:border-b-0">
              <Link
                href={'/projects#project-' + project.id}
                aria-label={'View ' + project.title + ' project'}
                className="group flex items-center pr-3 transition-colors hover:bg-background-secondary"
              >
                <span className="flex w-[60px] shrink-0 justify-center">
                  <span className="icon-box">
                    <Icon aria-hidden="true" className="h-3.5 w-3.5" />
                  </span>
                </span>
                <span className="min-w-0 flex-1 border-l border-dashed border-border p-4 pr-2">
                  <span className="mb-1 block font-medium leading-snug group-hover:text-primary">
                    {project.title}
                  </span>
                  <span className="block text-sm text-muted">
                    <span className="font-mono text-xs">{project.year}</span>
                    <span aria-hidden="true"> · </span>
                    {project.tags.slice(0, 3).join(', ')}
                  </span>
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                />
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
