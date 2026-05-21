'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ImageOff } from 'lucide-react'

interface ProjectCarouselProps {
  images: string[]
  title: string
}

export default function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const [index, setIndex] = useState(0)
  const hasImages = images.length > 0
  const total = images.length

  const goTo = (next: number) => {
    if (total === 0) return
    setIndex(((next % total) + total) % total)
  }

  const pad = (n: number) => String(n).padStart(2, '0')
  const displayTotal = Math.max(total, 1)

  return (
    <div className="relative">
      <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl border border-border bg-surface/60 shadow-card backdrop-blur-sm">
        {hasImages ? (
          <Image
            key={images[index]}
            src={images[index]}
            alt={`${title} — image ${index + 1} of ${total}`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <ImageOff className="h-12 w-12 text-muted/40" aria-hidden="true" />
          </div>
        )}

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/70 p-2 backdrop-blur-sm transition-colors hover:border-foreground hover:bg-background"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next image"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/70 p-2 backdrop-blur-sm transition-colors hover:border-foreground hover:bg-background"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}

        <div
          className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-foreground backdrop-blur-sm"
          aria-live="polite"
        >
          <span>{pad(hasImages ? index + 1 : 1)}</span>
          <span aria-hidden="true" className="h-px w-3 bg-border" />
          <span className="text-muted">{pad(displayTotal)}</span>
        </div>
      </div>

      {total > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to image ${i + 1}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-6 bg-foreground' : 'w-1.5 bg-border hover:bg-muted'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
