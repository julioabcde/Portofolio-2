'use client'
import dynamic from 'next/dynamic'
import { useDesktop } from '@/lib/hooks/useDesktop'
import { STORY_BLOCKS, TIMELINE } from '@/lib/data/about'
const DesktopAbout = dynamic(() => import('./about/DesktopAbout'))
export default function About() {
  if (useDesktop()) return <DesktopAbout />
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="container-page py-10"
    >
      <h2 id="about-heading" className="font-display text-3xl font-semibold">
        About
      </h2>
      <p className="mt-2 text-sm text-muted">
        {TIMELINE[0].title} · {TIMELINE[0].sub}
      </p>
      <div className="mt-5 max-w-2xl space-y-5">
        {STORY_BLOCKS.slice(0, 2).map((block) => (
          <div key={block.number}>
            <h3 className="font-display text-xl font-semibold">
              {block.heading}
            </h3>
            <p className="mt-2 text-sm leading-7 text-muted">{block.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
