'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { clsx } from 'clsx'
import { useActiveSection } from '@/lib/hooks/useActiveSection'
import { NAV_LINKS } from '@/lib/data/navigation'
import NavLinks from './NavLinks'
import MobileMenuTrigger from './MobileMenuTrigger'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const headerRef = useRef<HTMLElement>(null)

    const activeId = useActiveSection({
        sectionIds: NAV_LINKS.map((link) => link.id),
        headerOffset: 80,
    })

    const toggleMobileMenu = useCallback(() => {
        setMobileMenuOpen((prev) => !prev)
    }, [])

    const closeMobileMenu = useCallback(() => {
        setMobileMenuOpen(false)
    }, [])

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)')

        const handleChange = (e: MediaQueryListEvent) => {
            if (e.matches) closeMobileMenu()
        }

        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', handleChange)
            return () => mediaQuery.removeEventListener('change', handleChange)
        }
    }, [closeMobileMenu])

    useEffect(() => {
        if (!mobileMenuOpen) return

        const handleClickOutside = (e: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
                closeMobileMenu()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [mobileMenuOpen, closeMobileMenu])

    useEffect(() => {
        if (!mobileMenuOpen) return

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeMobileMenu()
        }

        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [mobileMenuOpen, closeMobileMenu])

    return (
        <header
            ref={headerRef}
            className={clsx(
                'fixed top-0 left-0 right-0 z-50',
                'bg-background/90 backdrop-blur-sm',
                'border-b border-foreground/5'
            )}
        >
            <div className={clsx(
                'mx-auto w-full max-w-container',
                'px-header-x-sm md:px-header-x-md lg:px-header-x-lg',
                'flex items-center justify-between',
                'h-20'
            )}>
                <a
                    href="#home"
                    aria-label="Go to top"
                    className="text-xl font-black tracking-tighter text-foreground hover:text-secondary transition-colors"
                >
                    PORTFOLIO.
                </a>

                <NavLinks
                    links={NAV_LINKS}
                    activeId={activeId}
                    className="hidden md:flex"
                />

                <MobileMenuTrigger
                    isOpen={mobileMenuOpen}
                    onToggle={toggleMobileMenu}
                />
            </div>

            <MobilePanel
                isOpen={mobileMenuOpen}
                links={NAV_LINKS}
                activeId={activeId}
                onLinkClick={closeMobileMenu}
            />
        </header>
    )
}

interface MobilePanelProps {
    isOpen: boolean
    links: typeof NAV_LINKS
    activeId: string
    onLinkClick: () => void
}

function MobilePanel({ isOpen, links, activeId, onLinkClick }: MobilePanelProps) {
    const handleClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
            e.preventDefault()
            const target = document.getElementById(href.slice(1))
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                history.pushState(null, '', href)
                onLinkClick()
            }
        },
        [onLinkClick]
    )

    return (
        <div
            id="mobile-menu-panel"
            role="region"
            aria-label="Mobile navigation"
            className={clsx(
                'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
                'border-b border-foreground/5 bg-background/95 backdrop-blur-sm'
            )}
        >
            <nav
                aria-label="Mobile primary navigation"
                className="mx-auto w-full max-w-container px-header-x-sm md:px-header-x-md lg:px-header-x-lg py-4"
            >
                <ul className="flex flex-col gap-1">
                    {links.map((link) => {
                        const isActive = link.id === activeId
                        return (
                            <li key={link.id}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleClick(e, link.href)}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={clsx(
                                        'block py-3 text-sm font-bold tracking-[0.1em] uppercase',
                                        'transition-colors duration-200',
                                        isActive
                                            ? 'text-secondary'
                                            : 'text-foreground/60 hover:text-secondary'
                                    )}
                                >
                                    {link.label}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div >
    )
}