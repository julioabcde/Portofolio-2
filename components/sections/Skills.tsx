export default function Skills() {
  return (
    /**
     * <section>
     * - Represents skills and competencies
     */
    <section
      id="skills"
      className="scroll-mt-24 bg-background-secondary"
    >
      <div className="mx-auto max-w-6xl px-6 py-24">
        {/**
         * <header>
         * - Section introduction
         */}
        <header className="mb-12 max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold text-foreground">
            Skills
          </h2>
          <p className="text-muted">
            Technologies and tools I use to build scalable, accessible, and
            maintainable web applications.
          </p>
        </header>

        {/**
         * <dl>
         * - Definition list: skill category → description
         */}
        <dl className="grid gap-8 sm:grid-cols-2">
          {/**
           * Skill group
           */}
          <div>
            <dt className="mb-2 text-sm font-semibold text-foreground">
              Frontend Development
            </dt>
            <dd className="text-muted">
              HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS,
              accessibility-focused UI development.
            </dd>
          </div>

          <div>
            <dt className="mb-2 text-sm font-semibold text-foreground">
              Backend & APIs
            </dt>
            <dd className="text-muted">
              RESTful APIs, basic backend architecture, authentication flows,
              and integration with frontend systems.
            </dd>
          </div>

          <div>
            <dt className="mb-2 text-sm font-semibold text-foreground">
              Tooling & Workflow
            </dt>
            <dd className="text-muted">
              Git, GitHub, code reviews, linting, formatting, and collaborative
              development workflows.
            </dd>
          </div>

          <div>
            <dt className="mb-2 text-sm font-semibold text-foreground">
              Performance & Quality
            </dt>
            <dd className="text-muted">
              Performance optimization, semantic HTML, accessibility best
              practices, and maintainable component architecture.
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
