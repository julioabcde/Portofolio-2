import type { ReactNode } from 'react'
import {
  ChevronsUpDown,
  CodeXml,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react'
import { EXPERIENCE, TIMELINE } from '@/lib/data/about'

export default function Experience() {
  const education = TIMELINE[0]
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-b border-border"
    >
      <header className="panel-header">
        <h2 id="experience-heading" className="panel-title">
          Experience
        </h2>
      </header>
      {EXPERIENCE.map((item) => (
        <Group key={item.company} name={item.company}>
          <Position
            icon={CodeXml}
            title={item.title}
            meta={['Internship', item.period]}
            tags={item.skills}
          >
            {item.description}
          </Position>
        </Group>
      ))}
      <Group node name="Education">
        <Position
          icon={GraduationCap}
          title={education.title}
          meta={[education.sub, education.period]}
          tags={['Software Engineering']}
        >
          {education.info}
        </Position>
      </Group>
    </section>
  )
}

function Group({
  node = false,
  name,
  children,
}: {
  node?: boolean
  name: string
  children: ReactNode
}) {
  return (
    <div className="space-y-4 border-b border-border p-4 last:border-b-0">
      <h3 className="flex items-center gap-3 text-lg font-semibold leading-snug">
        {node && (
          <span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-[rgba(10,9,8,0.3)]" />
          </span>
        )}
        {name}
      </h3>
      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        {children}
      </div>
    </div>
  )
}

function Position({
  icon: Icon,
  title,
  meta,
  tags,
  children,
}: {
  icon: LucideIcon
  title: string
  meta: readonly string[]
  tags: readonly string[]
  children: ReactNode
}) {
  return (
    <div className="relative">
      <details className="group">
        <summary className="flex cursor-pointer list-none items-start gap-3 rounded-lg [&::-webkit-details-marker]:hidden">
          <span className="icon-box mt-0.5">
            <Icon aria-hidden="true" className="h-3.5 w-3.5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-medium leading-6">{title}</span>
            <span className="mt-0.5 flex flex-wrap items-center gap-x-2 text-sm text-muted">
              {meta.map((part, i) => (
                <span key={part} className="inline-flex items-center gap-2">
                  {i > 0 && (
                    <span aria-hidden="true" className="h-4 w-px bg-border" />
                  )}
                  <span className={i > 0 ? 'font-mono text-xs' : undefined}>
                    {part}
                  </span>
                </span>
              ))}
            </span>
          </span>
          <ChevronsUpDown
            aria-hidden="true"
            className="mt-1 h-4 w-4 shrink-0 text-muted group-open:text-primary"
          />
        </summary>
        <p className="pl-9 pt-2 text-sm leading-6 text-muted">{children}</p>
      </details>
      <ul aria-label="Skills" className="flex flex-wrap gap-1.5 pl-9 pt-3">
        {tags.map((tag) => (
          <li key={tag} className="chip">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}
