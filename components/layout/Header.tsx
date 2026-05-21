'use client'

import { useState, useEffect, useCallback } from 'react'
import { clsx } from 'clsx'
import { ArrowUpRight } from 'lucide-react'
import { useActiveSection } from '@/lib/hooks/useActiveSection'
import { NAV_LINKS } from '@/lib/data/navigation'
import { smoothScrollToHash } from '@/lib/utils/smoothScrollToHash'
import { useLenis } from '@/components/providers/LenisProvider'
import NavLinks from './NavLinks'
import MobileMenuTrigger from './MobileMenuTrigger'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeMobileMenu()
        }

        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [mobileMenuOpen, closeMobileMenu])

    return (
        <>
            <header
                className={clsx(
                    'fixed top-0 left-0 right-0 z-50',
                    'bg-background/90 backdrop-blur-sm',
                    'border-b border-foreground/5'
                )}
            >
                <div className={clsx(
                    'relative z-50',
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
                        className="ml-auto"
                    />
                </div>
            </header>

            <MobilePanel
                isOpen={mobileMenuOpen}
                links={NAV_LINKS}
                activeId={activeId}
                onLinkClick={closeMobileMenu}
            />
        </>
    )
}

interface MobilePanelProps {
    isOpen: boolean
    links: typeof NAV_LINKS
    activeId: string
    onLinkClick: () => void
}

const MOBILE_SOCIALS = [
    { label: 'Instagram', href: 'https://instagram.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/julio68' },
    { label: 'GitHub', href: 'http://github.com/julioabcde' },
] as const

function MobilePanel({ isOpen, links, activeId, onLinkClick }: MobilePanelProps) {
    const lenis = useLenis()

    const handleClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
            e.preventDefault()
            if (smoothScrollToHash(href, lenis)) {
                onLinkClick()
            }
        },
        [lenis, onLinkClick]
    )

    useEffect(() => {
        if (!isOpen) return
        const original = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = original
        }
    }, [isOpen])

    return (
        <div
            id="mobile-menu-panel"
            role="region"
            aria-label="Mobile navigation"
            aria-hidden={!isOpen}
            className={clsx(
                'md:hidden fixed inset-0 z-40 bg-background',
                'transition-opacity duration-300 ease-in-out',
                isOpen
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
            )}
        >
            <div className="h-full overflow-y-auto flex flex-col px-header-x-sm pt-24 pb-10">
                <nav
                    aria-label="Mobile primary navigation"
                    className="flex-1"
                >
                    <ul className="flex flex-col">
                        {links.map((link, index) => {
                            const isActive = link.id === activeId
                            return (
                                <li
                                    key={link.id}
                                    className="border-b border-border/40"
                                >
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleClick(e, link.href)}
                                        aria-current={isActive ? 'page' : undefined}
                                        className={clsx(
                                            'flex items-baseline gap-5 py-5',
                                            'transition-colors duration-200',
                                            isActive
                                                ? 'text-primary'
                                                : 'text-foreground hover:text-primary'
                                        )}
                                    >
                                        <span className="font-mono text-[10px] tracking-widest text-muted">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <span className="font-display text-4xl font-semibold leading-none">
                                            {link.label}
                                        </span>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <div className="mt-12 space-y-7 pt-8 border-t border-border/40">
                    <div>
                        <p className="text-[10px] font-mono uppercase tracking-[0.26em] text-muted mb-2">
                            Get in touch
                        </p>
                        <a
                            href="mailto:media.julio68@gmail.com"
                            className="text-base font-medium text-foreground hover:text-primary transition-colors break-all"
                        >
                            media.julio68@gmail.com
                        </a>
                    </div>
                    <div>
                        <p className="text-[10px] font-mono uppercase tracking-[0.26em] text-muted mb-2">
                            Resume
                        </p>
                        <a
                            href="https://drive.google.com/file/d/1U6K3ozL6bgnphPxq88YSuw2T5OQShL6S/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                        >
                            View CV
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                    </div>
                    <div>
                        <p className="text-[10px] font-mono uppercase tracking-[0.26em] text-muted mb-3">
                            Socials
                        </p>
                        <ul className="flex flex-col gap-2">
                            {MOBILE_SOCIALS.map((social) => (
                                <li key={social.label}>
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-foreground hover:text-primary transition-colors"
                                    >
                                        {social.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}