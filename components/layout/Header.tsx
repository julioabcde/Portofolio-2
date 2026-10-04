'use client'
import { usePathname } from 'next/navigation'
import { useActiveSection } from '@/lib/hooks/useActiveSection'
import { NAV_LINKS } from '@/lib/data/navigation'
import DesktopNav from './DesktopNav'
// Desktop only: below lg the compact layout uses MobileTabNav instead.
export default function Header() {
  const isHome = usePathname() === '/'
  const links = NAV_LINKS.map((link) => ({
    ...link,
    href: isHome
      ? link.href
      : link.id === 'projects'
        ? '/projects'
        : '/' + link.href,
  }))
  const activeId = useActiveSection({
    sectionIds: NAV_LINKS.map((link) => link.id),
    headerOffset: 80,
  })
  return (
    <header className="fixed inset-x-0 top-0 z-50 hidden border-b border-border bg-background lg:block lg:border-foreground/5 lg:bg-background/90 lg:backdrop-blur-sm">
      <div className="relative mx-auto flex h-16 w-full max-w-container items-center justify-between px-header-x-sm md:px-header-x-md lg:h-20 lg:px-header-x-lg">
        <a
          href={isHome ? '#home' : '/#home'}
          aria-label="Go to home"
          className="text-xl font-black tracking-tighter text-foreground transition-colors hover:text-secondary"
        >
          PORTFOLIO.
        </a>
        <DesktopNav links={links} activeId={isHome ? activeId : 'projects'} />
      </div>
    </header>
  )
}
