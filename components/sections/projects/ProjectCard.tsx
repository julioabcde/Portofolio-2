import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ImageOff } from 'lucide-react'
import type { Project } from '@/types/project'
export default function ProjectCard({
  project,
  headingLevel = 3,
}: {
  project: Project
  headingLevel?: 2 | 3
}) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  const cover = project.images?.[0]
  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-border bg-[#ffffff]">
      <div className="relative overflow-hidden bg-[#e6f1fc]">
        {cover && project.platform === 'mobile' ? (
          // full width, 3:4 frame showing the top of the screen; bottom is trimmed
          <div className="relative aspect-[3/4]">
            <Image
              src={cover}
              alt={'Preview of ' + project.title}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              className="object-cover object-top"
            />
          </div>
        ) : cover ? (
          // width/height 0 + h-auto: image keeps its natural ratio, never cropped
          <Image
            src={cover}
            alt={'Preview of ' + project.title}
            width={0}
            height={0}
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
            className="h-auto w-full"
          />
        ) : (
          <div className="flex aspect-video items-center justify-center text-muted">
            <ImageOff aria-hidden="true" className="h-8 w-8" />
            <span className="sr-only">Preview not available</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <Heading className="font-display text-2xl font-semibold">
          {project.title}
        </Heading>
        <ul aria-label="Tools used" className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="max-w-full rounded-full border border-border px-2.5 py-1 text-[11px] text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
        <Link
          href={'/projects/' + project.id}
          aria-label={'View ' + project.title + ' project'}
          className="mt-auto inline-flex min-h-11 pt-4 items-center gap-2 self-start font-mono text-[10px] uppercase tracking-[0.12em] text-primary hover:underline"
        >
          View Project
          <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}
