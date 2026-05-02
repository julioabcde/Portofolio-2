export default function Footer() {
    return (
        /**
         * <footer>
         * - Represents the footer for the entire document
         */
        <footer className="border-t border-border bg-background-secondary">
            <div className="mx-auto max-w-6xl px-6 py-12">
                <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                    {/**
           * <nav>
           * - Secondary navigation
           * - Not required, but useful
           */}
                    <nav aria-label="Footer navigation">
                        <ul className="flex flex-wrap gap-6 text-sm text-muted">
                            <li>
                                <a
                                    href="#top"
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

                    {/**
           * <address>
           * - Author / ownership information
           * - Light usage (not full contact block)
           */}
                    <address className="not-italic text-sm text-muted">
                        <a
                            href="mailto:julio@example.com"
                            className="hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        >
                            julio@example.com
                        </a>
                    </address>
                </div>

                {/**
         * Copyright
         */}
                <p className="mt-8 text-sm text-muted">
                    © {new Date().getFullYear()} Julio. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
