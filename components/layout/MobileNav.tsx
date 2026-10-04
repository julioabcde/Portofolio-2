'use client'
import { useEffect, useId, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import type { NavLink } from './NavLinks'
import { PROFILE } from '@/lib/data/profile'
import { smoothScrollToHash } from '@/lib/utils/smoothScrollToHash'
import { useLenis } from '@/components/providers/LenisProvider'
export default function MobileNav({
  links,
  activeId,
}: {
  links: NavLink[]
  activeId: string
}) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const trigger = useRef<HTMLButtonElement>(null)
  const container = useRef<HTMLDivElement>(null)
  const lenis = useLenis()
  useEffect(() => {
    if (!open) return
    function outside(event: PointerEvent) {
      if (!container.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', outside)
    return () => document.removeEventListener('pointerdown', outside)
  }, [open])
  return (
    <div
      ref={container}
      className="lg:hidden"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null))
          setOpen(false)
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          setOpen(false)
          trigger.current?.focus()
        }
      }}
    >
      <div className="flex items-center gap-3">
        <a
          href={PROFILE.cvUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center font-mono text-[11px] text-primary"
        >
          View CV
        </a>
        <button
          ref={trigger}
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center"
        >
          {open ? (
            <X aria-hidden="true" size={22} />
          ) : (
            <Menu aria-hidden="true" size={22} />
          )}
        </button>
      </div>
      {open && (
        <nav
          id={panelId}
          aria-label="Mobile primary navigation"
          className="absolute inset-x-0 top-full max-h-[calc(100svh-64px)] overflow-y-auto border-b border-border bg-background px-6 py-3 shadow-lg"
        >
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  aria-current={activeId === link.id ? 'page' : undefined}
                  className={
                    'flex min-h-11 items-center border-b border-border py-3 text-sm ' +
                    (activeId === link.id ? 'text-primary' : 'text-foreground')
                  }
                  onClick={(event) => {
                    if (link.href.startsWith('#')) {
                      event.preventDefault()
                      smoothScrollToHash(link.href, lenis)
                    }
                    setOpen(false)
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  )
}
