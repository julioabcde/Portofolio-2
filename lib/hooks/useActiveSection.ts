'use client'

import { useEffect, useRef, useState } from 'react'

interface UseActiveSectionOptions {
  sectionIds: string[]
  headerOffset?: number
}

export function useActiveSection({
  sectionIds,
  headerOffset = 80,
}: UseActiveSectionOptions): string {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '')
  const activeIdRef = useRef(activeId)
  const sectionIdsKey = sectionIds.join(',')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const ids = sectionIdsKey.split(',').filter(Boolean)

    let frame = 0

    const detect = () => {
      frame = 0

      const probe = window.scrollY + headerOffset + 1
      const doc = document.documentElement
      const atBottom =
        window.innerHeight + window.scrollY >= doc.scrollHeight - 2

      let next = ids[0] ?? ''

      if (atBottom) {
        const last = ids[ids.length - 1]
        if (last) next = last
      } else {
        for (const id of ids) {
          const el = document.getElementById(id)
          if (!el) continue
          if (el.offsetTop <= probe) next = id
        }
      }

      if (next !== activeIdRef.current) {
        activeIdRef.current = next
        setActiveId(next)
      }
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(detect)
    }

    detect()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [sectionIdsKey, headerOffset])

  return activeId
}
