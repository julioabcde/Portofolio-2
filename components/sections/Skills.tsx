'use client'

const SKILL_GROUPS = [
  {
    category: 'Frontend Development',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML / CSS'],
  },
  {
    category: 'Design & UX',
    items: ['Figma', 'Responsive Design', 'Design Systems', 'Prototyping', 'User Research'],
  },
  {
    category: 'Backend & Tools',
    items: ['Node.js', 'Prisma', 'REST APIs', 'Git / GitHub', 'PostgreSQL', 'CI / CD'],
  },
] as const

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-section-y-sm md:py-section-y-md lg:py-section-y-lg"
      aria-labelledby="skills-heading"
    >
      <div className="container-page">

        <header className="mb-rule-gap">
          <div className="flex items-center gap-4 mb-6">
            <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] shrink-0">
              Skills &amp; Expertise
            </p>
            <div aria-hidden="true" className="flex-1 h-px bg-border" />
          </div>
          <h2
            id="skills-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Technologies I use to
            <br />
            <span className="text-muted">build great products.</span>
          </h2>
        </header>

        <dl className="divide-y divide-border border-y border-border">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="group grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr]
                         gap-4 md:gap-8 py-8 md:py-10
                         transition-colors duration-300 hover:bg-surface/30"
            >
              <dt className="text-xs font-mono text-muted uppercase tracking-[0.15em] md:pt-1.5">
                {group.category}
              </dt>

              <dd>
                <ul className="flex flex-wrap gap-2.5" role="list">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border px-4 py-2 text-sm
                                 text-foreground font-medium
                                 transition-all duration-300
                                 hover:border-primary hover:text-primary hover:bg-primary/5
                                 cursor-default"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
