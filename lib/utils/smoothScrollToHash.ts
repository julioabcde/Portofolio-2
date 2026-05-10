import type Lenis from 'lenis'

const HEADER_OFFSET = 80

export function smoothScrollToHash(href: string, lenis: Lenis | null): boolean {
  if (!href.startsWith('#')) return false

  const id = href.slice(1)
  const target = document.getElementById(id)
  if (!target) return false

  if (lenis) {
    lenis.scrollTo(target, { offset: -HEADER_OFFSET })
  } else {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  history.pushState(null, '', href)
  return true
}
