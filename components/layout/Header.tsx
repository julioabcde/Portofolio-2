'use client'

import { useEffect, useState } from "react"

export default function Header() {
    const [activeSection, setActiveSection] = useState<string>('')
    useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>("section[id]")
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                rootMargin: '-40% 0px -40% 0px',
            }
        )
        sections.forEach(section => observer.observe(section))

        return () => observer.disconnect()
    }, [])

    const isActive = (id: string) => activeSection === id

    return (
        /**
         * <header>
         * - Global landmark element
         * - Represents the site-wide header
         * - Should appear once per page
         */
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F1A]">
            {/**
             * <nav>
             * - Primary navigation landmark
             * - aria-label helps screen readers identify this nav
             */}
            <nav
                aria-label="Primary navigation"
                className="flex justify-between items-center mx-auto max-w-6xl px-6 py-4">
                {/**
                 * Brand / Identity
                 * <a> is used because:
                 * - This is a navigational element
                 * - Points back to top / home
                 * - NOT a heading, NOT content
                 */}
                <a
                    href="#top"
                    className="text-lg font-semibold text-white tracking-light"
                >
                    Julio
                </a>

                {/**
                 * <ul>
                 * - Navigation is a list of destinations
                 * - Using <ul><li> preserves semantic meaning
                 */}
                <ul className="flex items-center gap-8">
                    <li>
                        <a
                            href="#about"
                            aria-current={isActive('about') ? 'true' : undefined}
                            className={`transition-colors ${isActive('about')
                                    ? 'text-white underline undeline-offset-8'
                                    : 'text-slate-300 hover:text-white'
                                }`}
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            href="#projects"
                            aria-current={isActive('projects') ? 'true' : undefined}
                            className={`transition-colors ${isActive('projects')
                                    ? 'text-white underline undeline-offset-8'
                                    : 'text-slate-300 hover:text-white'
                                }`}
                        >
                            Projects
                        </a>
                    </li>

                    <li>
                        <a
                            href="#skills"
                            aria-current={isActive('skills') ? 'true' : undefined}
                            className={`transition-colors ${isActive('skills')
                                    ? 'text-white underline undeline-offset-8'
                                    : 'text-slate-300 hover:text-white'
                                }`}
                        >
                            Skills
                        </a>
                    </li>

                    <li>
                        <a
                            href="#contact"
                            aria-current={isActive('contact') ? true : undefined}
                            className={`transition-colors ${isActive('contact')
                                    ? 'text-white underline undeline-offset-8'
                                    : 'text-slate-300 hover:text-white'
                                }`}
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                {/**
                 * Action / Utility area (right side)
                 * <div> is acceptable because:
                 * - This is NOT main navigation
                 * - Content may change based on auth / role
                 */}
                <div>
                    <a
                        href="#contact"
                        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-black transition hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                        CTA Auth
                    </a>
                </div>
            </nav>
        </header>
    )
}