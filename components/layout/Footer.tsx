import { ArrowUp } from 'lucide-react'

const NAV_LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
] as const

const SOCIAL_LINKS = [
    { label: 'Instagram', href: 'https://instagram.com/julio68_' },
    { label: 'Facebook', href: 'https://facebook.com/julio68' },
    { label: 'Read CV', href: 'https://drive.google.com/file/d/1U6K3ozL6bgnphPxq88YSuw2T5OQShL6S/view?usp=sharing' },
] as const

const focusRing =
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

export default function Footer() {
    return (
        <footer className="relative overflow-hidden border-t border-border bg-[var(--color-background-secondary)]">
            <div className="relative z-10 mx-auto w-full max-w-container px-header-x-sm md:px-header-x-md lg:px-header-x-lg pt-10 pb-8 md:pt-16 md:pb-12">
                <div className="flex items-start justify-between gap-6 sm:gap-8">
                    <div className="max-w-sm">
                        <p className="font-display text-xl font-bold leading-snug tracking-tight text-foreground sm:text-2xl">
                            WHAT IS EARNED, NEVER GIVEN.
                        </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-4">
                        <a
                            href="#home"
                            className={`hidden font-mono text-xs uppercase tracking-[0.22em] text-foreground transition-colors hover:text-primary sm:inline ${focusRing}`}
                        >
                            Back to top
                        </a>
                        <a
                            href="#home"
                            aria-label="Back to top"
                            className={`group flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background transition-colors hover:bg-primary ${focusRing}`}
                        >
                            <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                        </a>
                    </div>
                </div>

                <span
                    aria-hidden="true"
                    className="block mt-6 select-none whitespace-nowrap font-bold leading-[0.85] tracking-[-0.03em] text-[rgba(10,9,8,0.07)] text-[clamp(3rem,17vw,15rem)] md:mt-14"
                >
                    ASCENSION
                </span>

                <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3 md:mt-12">
                    <span className="flex items-baseline gap-1.5 font-mono text-xs text-muted sm:text-sm">
                        <span className="font-sans text-base leading-none">©</span>
                        {new Date().getFullYear()} Julio. All rights reserved.
                    </span>

                    <nav aria-label="Social links" className="hidden flex-wrap gap-x-5 gap-y-2 sm:flex sm:gap-6">
                        {SOCIAL_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground ${focusRing}`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    )
}
