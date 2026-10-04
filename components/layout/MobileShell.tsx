import type { ReactNode } from 'react'
import MobileHero from '@/components/sections/hero/MobileHero'
import MobileTabNav from './MobileTabNav'

/** Compact profile + tab bar frame shared by Home, Projects, project detail and Blog. */
export default function MobileShell({
  children,
  nameAsHeading = true,
}: {
  children: ReactNode
  nameAsHeading?: boolean
}) {
  return (
    <div className="mx-auto md:max-w-[720px] md:border-x md:border-border">
      <MobileHero nameAsHeading={nameAsHeading} />
      <MobileTabNav />
      {/* Min height lets the tab bar stay pinned when a short page opens (see ShellLink). */}
      <div className="min-h-[calc(100svh-3.5rem)]">
        <div aria-hidden="true" className="hatch h-8 border-b border-border" />
        {children}
      </div>
    </div>
  )
}
