'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const arrow =
  'absolute top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-[rgba(245,242,237,0.85)] text-foreground shadow-card backdrop-blur hover:border-primary'

export default function MobileProjectCarousel({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0)
  const total = images.length
  if (total === 0) return null
  const go = (next: number) => setIndex((next + total) % total)
  return (
    <div>
      <div className="relative aspect-[1200/630] overflow-hidden rounded-lg border border-border bg-[var(--color-background-secondary)] shadow-card">
        <Image
          key={images[index]}
          src={images[index]}
          alt={`${title} — image ${index + 1} of ${total}`}
          fill
          priority={index === 0}
          sizes="(min-width: 768px) 720px, 100vw"
          className="object-contain"
        />
        {total > 1 && (
          <>
            <button type="button" onClick={() => go(index - 1)} aria-label="Previous image" className={arrow + ' left-2'}>
              <ChevronLeft aria-hidden="true" className="h-4 w-4" />
            </button>
            <button type="button" onClick={() => go(index + 1)} aria-label="Next image" className={arrow + ' right-2'}>
              <ChevronRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </>
        )}
      </div>
      {total > 1 && (
        <div className="mt-2 flex items-center justify-center">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to image ${i + 1}`}
              aria-current={i === index}
              className="p-1.5"
            >
              <span
                className={
                  'block h-1.5 rounded-full transition-all ' +
                  (i === index ? 'w-4 bg-primary' : 'w-1.5 bg-border')
                }
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
