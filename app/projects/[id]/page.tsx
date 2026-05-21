import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { PROJECTS, getProjectById, CATEGORIES } from '@/lib/data/project'
import ProjectCarousel from './ProjectCarousel'

interface PageProps {
  params: Promise<{ id: string }>
}

export function generateStaticParams() {
  return PROJECTS.map(p => ({ id: p.id }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const project = getProjectById(id)
  if (!project) return { title: 'Project not found' }
  return {
    title: `${project.title} · Project`,
    description: project.summary ?? project.description,
  }
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params
  const project = getProjectById(id)
  if (!project) notFound()

  const category = CATEGORIES[project.id] ?? project.type ?? 'Web Project'
  const hasLiveUrl = project.liveUrl && project.liveUrl !== '#'
  const hasRepoUrl = project.repoUrl && project.repoUrl !== '#'
  const carouselImages = project.images ?? []

  const currentIdx = PROJECTS.findIndex(p => p.id === project.id)
  const nextProject = PROJECTS[(currentIdx + 1) % PROJECTS.length]
  const nextCategory =
    CATEGORIES[nextProject.id] ?? nextProject.type ?? 'Web Project'

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto w-full max-w-container px-margin-x-sm md:px-margin-x-md lg:px-margin-x-lg pt-12 pb-24">
        <div className="flex items-center justify-between border-b border-border pb-4">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.22em] text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to archive
          </Link>
        </div>

        <section className="mt-10">
          <ProjectCarousel images={carouselImages} title={project.title} />
        </section>

        <section className="mt-20 grid grid-cols-1 gap-x-16 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-[10px] font-mono uppercase tracking-[0.26em] text-primary">
                Details
              </p>
              <dl className="mt-5 list-none border-t border-border p-0">
                <SidebarField label="Year" value={project.year} />
                <SidebarField label="Engagement" value={project.engagement} />
                <SidebarField label="Role" value={project.role} />
                <SidebarField label="Status" value={project.status}/>
              </dl>

              <div className="mt-10">
                <p className="text-[10px] font-mono uppercase tracking-[0.26em] text-primary">
                  Stack
                </p>
                <ul
                  className="mt-4 flex list-none flex-wrap gap-1.5 p-0"
                  role="list"
                  aria-label="Technologies used"
                >
                  {project.tags.map((t, i) => (
                    <li
                      key={`${t}-${i}`}
                      className="inline-flex items-center rounded-full border border-border bg-surface/40 px-3 py-1 text-[11px] font-mono text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {(hasLiveUrl || hasRepoUrl) && (
                <div className="mt-10">
                  <p className="text-[10px] font-mono uppercase tracking-[0.26em] text-primary">
                    Links
                  </p>
                  <div className="mt-4 flex flex-col items-start gap-3.5">
                    {hasLiveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-5 py-3 text-[11px] font-mono uppercase tracking-[0.22em] text-white transition-colors hover:bg-secondary-hover"
                      >
                        Visit site
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    )}
                    {hasRepoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2.5 border-b border-foreground/40 pb-1 text-[11px] font-mono uppercase tracking-[0.22em] text-foreground transition-colors hover:border-foreground"
                      >
                        Source code
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* article column */}
          <article className="w-full">
            {project.type && (
              <Chapter label="Type" anchor="type">
                <p className="text-[17px] leading-[1.7] text-muted">
                  {project.type}
                </p>
              </Chapter>
            )}

            <Chapter label="Summary" anchor="summary">
              {project.summary && (
                <p className="text-[17px] leading-[1.7] text-muted">
                  {project.summary}
                </p>
              )}
            </Chapter>

            <Chapter label="Impact" anchor="impact">
              {project.impact && (
                <p className="text-[17px] leading-[1.7] text-muted">
                  {project.impact}
                </p>
              )}
            </Chapter>

            <Chapter label="What I learned" anchor="learned" last>
              {project.learnings && (
                <p className="text-[17px] leading-[1.7] text-muted">
                  {project.learnings}
                </p>
              )}
              {project.learningPoints && project.learningPoints.length > 0 && (
                <ul className="mt-8 flex list-none flex-col gap-0 p-0">
                  {project.learningPoints.map((t, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[32px_1fr] gap-3 border-t border-border py-3.5"
                    >
                      <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-primary">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[17px] leading-[1.6] text-foreground text-pretty">
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </Chapter>

            <div className="mt-12 space-y-8 lg:hidden">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.26em] text-primary">
                  Stack
                </p>
                <ul className="mt-4 flex list-none flex-wrap gap-1.5 p-0">
                  {project.tags.map((t, i) => (
                    <li
                      key={`${t}-m-${i}`}
                      className="inline-flex items-center rounded-full border border-border bg-surface/40 px-3 py-1 text-[11px] font-mono text-muted"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              {(hasLiveUrl || hasRepoUrl) && (
                <div className="flex flex-wrap items-center gap-5">
                  {hasLiveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-5 py-3 text-[11px] font-mono uppercase tracking-[0.22em] text-white transition-colors hover:bg-secondary-hover"
                    >
                      Visit site
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  )}
                  {hasRepoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 border-b border-foreground/40 pb-1 text-[11px] font-mono uppercase tracking-[0.22em] text-foreground"
                    >
                      Source
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* next case */}
            <div className="mt-20 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-6">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-[0.26em] text-primary">
                  Next case
                </p>
                <p className="mt-2 font-display text-[2rem] font-bold leading-tight">
                  {nextProject.title}{' '}
                  <em className="font-display text-[1.5rem] font-light italic text-subtle">
                    — {nextCategory.split('·')[0].trim().toLowerCase()}.
                  </em>
                </p>
              </div>
              <Link
                href={`/projects/${nextProject.id}`}
                className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-5 py-3 text-[11px] font-mono uppercase tracking-[0.22em] text-white transition-colors hover:bg-secondary-hover"
              >
                Read next
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </article>
        </section>
      </div>
    </main>
  )
}

function SidebarField({
  label,
  value,
}: {
  label: string
  value?: string
}) {
  if (!value) return null
  return (
    <div className="grid grid-cols-[80px_1fr] items-baseline gap-3 border-b border-border py-3">
      <dt className="text-[10px] font-mono uppercase tracking-[0.26em] text-subtle">
        {label}
      </dt>
      <dd className="flex items-center gap-2 text-[13px] text-foreground text-pretty">
        <span>{value}</span>
      </dd>
    </div>
  )
}

function Chapter({
  label,
  anchor,
  children,
  last,
}: {
  label: string
  anchor: string
  children: React.ReactNode
  last?: boolean
}) {
  return (
    <section
      id={anchor}
      className={`scroll-mt-24 ${last ? '' : 'mb-16'}`}
    >
      <header className="mb-7 flex items-baseline gap-4">
        <span className="text-[10px] font-mono uppercase tracking-[0.26em] text-primary">
          {label}
        </span>
        <span aria-hidden="true" className="h-px flex-1 bg-border" />
      </header>
      {children}
    </section>
  )
}
