import { ArrowUpRight } from 'lucide-react'
import { PUBLICATIONS } from '@/lib/data/research'
export default function Research() {
  return (
    <section
      id="research"
      aria-labelledby="research-heading"
      className="compact-section container-page py-0 lg:py-20"
    >
      <h2
        id="research-heading"
        className="mb-0 font-display text-2xl font-semibold lg:mb-6 lg:text-5xl"
      >
        Research & Publication
      </h2>
      {PUBLICATIONS.map((paper) => (
        <article
          key={paper.doi}
          className="max-w-3xl py-5 lg:border-t lg:border-border"
        >
          <p className="font-mono text-[11px] text-primary">
            {paper.venue} · {paper.year}
          </p>
          <h3 className="mt-3 font-display text-lg font-semibold leading-snug lg:text-2xl">
            {paper.title}
          </h3>
          <a
            href={paper.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-11 items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-primary hover:underline"
          >
            View Publication
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </article>
      ))}
    </section>
  )
}
