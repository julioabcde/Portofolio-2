'use client'

import { PROJECTS } from '@/lib/data/project'
import ProjectCard from '@/components/cards/ProjectCard'

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-section-y-sm md:py-section-y-md lg:py-section-y-lg overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container-page relative">

        <header className="mb-rule-gap-sm md:mb-rule-gap max-w-2xl">
          <p className="text-sm font-mono text-primary uppercase tracking-widest mb-3">
            (Projects)
          </p>
          <h2
            id="projects-heading"
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Selected
            <span className="text-muted font-light"> Works</span>
          </h2>
          <p className="mt-4 text-muted text-lg max-w-lg">
            A curated collection of projects I&rsquo;ve built. Each one taught me something new.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
