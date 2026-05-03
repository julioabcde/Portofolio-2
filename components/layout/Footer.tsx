export default function Footer() {
    return (
        <footer className="border-t border-border bg-[var(--color-background-secondary)]">
            <div className="mx-auto w-full max-w-container px-header-x-sm md:px-header-x-md lg:px-header-x-lg py-12">
                <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                    <nav aria-label="Footer navigation">
                        <ul className="flex flex-wrap gap-6 text-sm text-muted">
                            <li>
                                <a
                                    href="#home"
                                    className="hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                >
                                    Back to top
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projects"
                                    className="hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                >
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <address className="not-italic text-sm text-muted">
                        {/* TODO: replace with real contact email before launch */}
                        <a
                            href="mailto:julio@example.com"
                            className="hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            julio@example.com
                        </a>
                    </address>
                </div>

                <p className="mt-8 text-sm text-muted">
                    © {new Date().getFullYear()} Julio. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
