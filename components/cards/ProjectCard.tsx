'use client'

import Image from 'next/image'
import { ImageOff } from 'lucide-react'
import { Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const cover = project.images?.[0]
  return (
    <article
      className="group flex flex-col rounded-md border border-border bg-surface/40
                 backdrop-blur-sm overflow-hidden transition-all duration-300
                 hover:border-primary hover:bg-surface/60"
    >
      <figure className="relative aspect-video w-full overflow-hidden bg-background/50">
        {cover ? (
          <Image
            src={cover}
            alt={`Screenshot of ${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center bg-surface/60 text-muted"
          >
            <ImageOff className="h-10 w-10 opacity-40" />
          </div>
        )}

        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center gap-3
                     bg-black/70 backdrop-blur-sm opacity-0
                     transition-opacity duration-300 group-hover:opacity-100"
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="rounded-md border border-white/20 bg-primary px-4 py-2
                         text-xs font-medium text-white transition-colors
                         hover:bg-secondary"
              aria-label={`View live demo of ${project.title}`}
            >
              Live Demo &#8599;
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              className="rounded-md border border-white/30 bg-white/10 px-4 py-2
                         text-xs font-medium text-white transition-colors
                         hover:bg-white/20"
              aria-label={`View source code of ${project.title}`}
            >
              Source Code
            </a>
          )}
        </div>
      </figure>

      <div className="flex flex-1 flex-col p-5 border-t border-border transition-colors duration-300 group-hover:border-primary">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-secondary transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2 flex-1">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
          {project.tags.map((tag, i) => (
            <li
              key={`${tag}-${i}`}
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
