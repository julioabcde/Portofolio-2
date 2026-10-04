import { ArrowUpRight, BookOpen } from 'lucide-react'
import { PUBLICATIONS } from '@/lib/data/research'

export default function MobileResearch() {
  return (
    <section
      id="research"
      aria-labelledby="research-heading"
      className="border-b border-border"
    >
      <header className="panel-header">
        <h2 id="research-heading" className="panel-title">
          Publications
        </h2>
      </header>
      <ul>
        {PUBLICATIONS.map((paper) => (
          <li key={paper.doi} className="border-b border-border last:border-b-0">
            <a
              href={paper.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center pr-3 transition-colors hover:bg-[rgba(10,9,8,0.03)]"
            >
              <span className="flex w-[60px] shrink-0 justify-center">
                <span className="icon-box">
                  <BookOpen aria-hidden="true" className="h-3.5 w-3.5" />
                </span>
              </span>
              <span className="min-w-0 flex-1 border-l border-dashed border-border p-4 pr-2">
                <span className="mb-1 block text-balance font-medium leading-snug group-hover:text-primary">
                  {paper.title}
                </span>
                <span className="flex items-center gap-2 text-sm text-muted">
                  {paper.venue}
                  <span aria-hidden="true" className="h-4 w-px bg-border" />
                  <span className="font-mono text-xs">{paper.year}</span>
                </span>
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
