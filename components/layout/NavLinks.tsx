'use client'

import { useCallback } from 'react'
import { clsx } from 'clsx'
import { smoothScrollToHash } from '@/lib/utils/smoothScrollToHash'
import { useLenis } from '@/components/providers/LenisProvider'

export interface NavLink {
    id: string
    label: string
    href: string
}

interface NavLinksProps {
    links: NavLink[]
    activeId: string
    className?: string
}

export default function NavLinks({ links, activeId, className }: NavLinksProps) {
    const lenis = useLenis()

    const handleClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
            if (!href.startsWith('#')) return

            e.preventDefault()

            const ok = smoothScrollToHash(href, lenis)
            if (!ok && process.env.NODE_ENV === 'development') {
                console.warn(`[NavLinks] Target ${href} not found in DOM`)
            }
        },
        [lenis]
    )

    return (
        <nav aria-label="Primary navigation" className={clsx('flex gap-12', className)}>
            {links.map((link) => {
                const isActive = link.id === activeId

                return (
                    <a
                        key={link.id}
                        href={link.href}
                        onClick={(e) => handleClick(e, link.href)}
                        aria-current={isActive ? 'page' : undefined}
                        className={clsx(
                            'relative text-[12px] font-bold tracking-[0.1em] uppercase',
                            'transition-colors duration-200',
                            isActive
                                ? 'text-secondary'           
                                : 'text-foreground/50 hover:text-secondary',
                            isActive && [
                                "after:content-['']",
                                'after:absolute after:left-1/2 after:-translate-x-1/2',
                                'after:-bottom-1.5',
                                'after:w-1 after:h-1',
                                'after:bg-secondary after:rounded-full',
                            ]
                        )}
                    >
                        {link.label}
                    </a>
                )
            })}
        </nav>
    )
}