import Image from 'next/image'
import ShellLink from '@/components/layout/ShellLink'
import { ArrowUpRight, ImageOff } from 'lucide-react'
import { PROJECTS } from '@/lib/data/project'

/** All projects for the compact /projects view. Cards carry #project-<id> anchors for Home links. */
export default function MobileProjectGrid() {
  return (
    <section aria-labelledby="all-projects-heading" className="border-b border-border">
      <h2 id="all-projects-heading" className="sr-only">
        All projects
      </h2>
      <ul className="divide-y divide-border">
        {PROJECTS.map((project) => {
          const cover = project.images?.[0]
          return (
            <li
              key={project.id}
              id={'project-' + project.id}
              className="scroll-mt-14 bg-background p-3 transition-colors hover:bg-background-secondary"
            >
              <ShellLink
                href={'/projects/' + project.id}
                aria-label={'View ' + project.title + ' project'}
                className="group flex items-stretch gap-3 rounded-lg"
              >
                <span className="relative flex aspect-[4/3] w-28 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-background-secondary sm:w-40">
                  {cover ? (
                    <Image
                      src={cover}
                      alt={'Preview of ' + project.title}
                      fill
                      sizes="(min-width: 640px) 160px, 112px"
                      className={
                        project.platform === 'mobile'
                          ? 'object-contain p-1.5'
                          : 'object-cover object-top'
                      }
                    />
                  ) : (
                    <ImageOff aria-hidden="true" className="h-6 w-6 text-muted" />
                  )}
                </span>
                <span className="flex min-w-0 flex-1 flex-col justify-between gap-1.5 py-0.5">
                  <span className="flex items-start justify-between gap-2">
                    <span className="font-display text-lg font-semibold leading-snug group-hover:text-primary">
                      {project.title}
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="mt-1 h-4 w-4 shrink-0 text-muted group-hover:text-primary"
                    />
                  </span>
                  <span className="line-clamp-2 text-sm leading-5 text-muted">
                    {project.description}
                  </span>
                  <span className="flex flex-wrap gap-1.5">
                    {[project.year, ...project.tags.slice(0, 2)].map((tag) => (
                      <span key={tag} className="chip text-muted">
                        {tag}
                      </span>
                    ))}
                  </span>
                </span>
              </ShellLink>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
