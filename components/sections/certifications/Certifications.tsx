import { ArrowUpRight, Award } from 'lucide-react'
import { CERTIFICATIONS } from '@/lib/data/certifications'

export default function Certifications() {
  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="border-b border-border"
    >
      <header className="panel-header">
        <h2 id="certifications-heading" className="panel-title">
          Certifications
          <sup className="panel-count">({CERTIFICATIONS.length})</sup>
        </h2>
      </header>
      <ul>
        {CERTIFICATIONS.map((cert) => {
          const body = (
            <>
              <span className="flex w-[60px] shrink-0 justify-center">
                <span className="icon-box">
                  <Award aria-hidden="true" className="h-3.5 w-3.5" />
                </span>
              </span>
              <span className="min-w-0 flex-1 border-l border-dashed border-border p-4 pr-2">
                <span className="mb-1 block text-balance font-medium leading-snug group-hover:text-primary">
                  {cert.title}
                </span>
                <span className="flex items-center gap-2 text-sm text-muted">
                  {cert.issuer}
                  <span aria-hidden="true" className="h-4 w-px bg-border" />
                  <span className="font-mono text-xs">{cert.date}</span>
                </span>
              </span>
            </>
          )
          return (
            <li key={cert.title} className="border-b border-border last:border-b-0">
              {cert.href ? (
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center pr-3 transition-colors hover:bg-[rgba(10,9,8,0.03)]"
                >
                  {body}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-muted group-hover:text-primary"
                  />
                </a>
              ) : (
                <div className="flex items-center pr-3">{body}</div>
              )}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
