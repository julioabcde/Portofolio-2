'use client'

import Image from 'next/image'
import { Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
}

/**
 * Reusable project card component.
 * Renders at a fixed aspect ratio for the image area
 * and consistent padding/spacing for content, ensuring
 * all cards in the grid look uniform.
 */
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="group flex flex-col rounded-2xl border border-border bg-surface/40
                 backdrop-blur-sm overflow-hidden transition-all duration-300
                 hover:border-primary hover:bg-surface/60
                 hover:shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.15)]"
    >
      {/* Image container with fixed 16:9 aspect ratio */}
      <figure className="relative aspect-video w-full overflow-hidden bg-background/50">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Featured badge */}
        {project.featured && (
          <span
            className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full
                       bg-primary/90 px-3 py-1 text-[11px] font-medium text-white
                       backdrop-blur-sm"
          >
            &#9733; Featured
          </span>
        )}

        {/* Hover overlay with action links */}
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center gap-3
                     bg-black/70 backdrop-blur-sm opacity-0
                     transition-opacity duration-300 group-hover:opacity-100"
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="rounded-lg border border-white/20 bg-primary px-4 py-2
                         text-xs font-medium text-white transition-colors
                         hover:bg-primary/80"
              aria-label={`View live demo of ${project.title}`}
            >
              Live Demo &#8599;
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              className="rounded-lg border border-white/30 bg-white/10 px-4 py-2
                         text-xs font-medium text-white transition-colors
                         hover:bg-white/20"
              aria-label={`View source code of ${project.title}`}
            >
              Source Code
            </a>
          )}
        </div>
      </figure>

      {/* Card body */}
      <div className="flex flex-1 flex-col p-5 border-t border-border transition-colors duration-300 group-hover:border-primary">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2 flex-1">
          {project.description}
        </p>

        {/* Tags / tech stack */}
        <ul className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-2.5 py-0.5
                         text-[11px] font-mono text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
