// export default function Skills() {
//   return (
//     /**
//      * <section>
//      * - Represents skills and competencies
//      */
//     <section
//       id="skills"
//       className="scroll-mt-24 bg-background-secondary"
//     >
//       <div className="mx-auto max-w-6xl px-6 py-24">
//         {/**
//          * <header>
//          * - Section introduction
//          */}
//         <header className="mb-12 max-w-2xl space-y-4">
//           <h2 className="text-3xl font-semibold text-foreground">
//             Skills
//           </h2>
//           <p className="text-muted">
//             Technologies and tools I use to build scalable, accessible, and
//             maintainable web applications.
//           </p>
//         </header>

//         {/**
//          * <dl>
//          * - Definition list: skill category → description
//          */}
//         <dl className="grid gap-8 sm:grid-cols-2">
//           {/**
//            * Skill group
//            */}
//           <div>
//             <dt className="mb-2 text-sm font-semibold text-foreground">
//               Frontend Development
//             </dt>
//             <dd className="text-muted">
//               HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS,
//               accessibility-focused UI development.
//             </dd>
//           </div>

//           <div>
//             <dt className="mb-2 text-sm font-semibold text-foreground">
//               Backend & APIs
//             </dt>
//             <dd className="text-muted">
//               RESTful APIs, basic backend architecture, authentication flows,
//               and integration with frontend systems.
//             </dd>
//           </div>

//           <div>
//             <dt className="mb-2 text-sm font-semibold text-foreground">
//               Tooling & Workflow
//             </dt>
//             <dd className="text-muted">
//               Git, GitHub, code reviews, linting, formatting, and collaborative
//               development workflows.
//             </dd>
//           </div>

//           <div>
//             <dt className="mb-2 text-sm font-semibold text-foreground">
//               Performance & Quality
//             </dt>
//             <dd className="text-muted">
//               Performance optimization, semantic HTML, accessibility best
//               practices, and maintainable component architecture.
//             </dd>
//           </div>
//         </dl>
//       </div>
//     </section>
//   )
// }

'use client'

/**
 * Skills organized by category with a clean table-style layout.
 */
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
      className="relative py-24"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto w-full max-w-6xl px-6">

        {/**
         * Section header — Swiss style.
         * Small uppercase label on the left, heading below,
         * separated by a full-width ruled line.
         */}
        <header className="mb-20">
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

        {/**
         * Skills table layout.
         *
         * Each category renders as a ruled row:
         * ┌─────────────────────────────────────────────┐
         * │ Category Label          Skill  Skill  Skill │
         * ├─────────────────────────────────────────────┤
         * │ Category Label          Skill  Skill  Skill │
         * ├─────────────────────────────────────────────┤
         * │ Category Label          Skill  Skill  Skill │
         * └─────────────────────────────────────────────┘
         *
         * Uses a definition list (<dl>) — category as <dt>, skills as <dd>.
         * This is semantically appropriate for term/description pairs.
         */}
        <dl className="divide-y divide-border border-y border-border">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="group grid grid-cols-1 md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr]
                         gap-4 md:gap-8 py-8 md:py-10
                         transition-colors duration-300 hover:bg-surface/30"
            >
              {/**
               * <dt> — The category term/label.
               * Sticky on large screens so it stays visible
               * when scrolling through many skills.
               */}
              <dt className="text-xs font-mono text-muted uppercase tracking-[0.15em] md:pt-1.5">
                {group.category}
              </dt>

              {/**
               * <dd> — The skills belonging to this category.
               * Rendered as a flex-wrap list of pill tags.
               */}
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
