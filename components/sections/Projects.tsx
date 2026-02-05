export default function Projects() {
    return (
        /**
         * <section>
         * - Represents a collection of projects
         * - Each project is an independent unit
         */
        <section
            id="projects"
            className="scroll-mt-24 bg-background"
        >
            <div className="mx-auto max-w-6xl px-6 py-24">
                {/**
                 * <header>
                 * - Section introduction
                 */}
                <header className="mb-12 max-w-2xl space-y-4">
                    <h2 className="text-3xl font-semibold text-foreground">
                        Projects
                    </h2>
                    <p className="text-muted">
                        A selection of projects that demonstrate my approach to frontend
                        architecture, accessibility, and performance.
                    </p>
                </header>

                {/**
                 * Projects grid
                 * - Layout container only
                 */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {/**
                     * <article>
                     * - Represents a single, self-contained project
                     */}
                    <article className="overflow-hidden rounded-lg border border-border bg-surface shadow-card">
                        {/**
                         * Layout container
                         * - Grid for image + content
                         * - No semantic meaning
                         */}
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/**
                             * <figure>
                             * - Represents self-contained media
                             * - Image related directly to the project
                             */}
                            <figure className="relative h-full">
                                <img
                                    src="/dim.png"
                                    alt="Screenshot of personal portfolio website"
                                    className="h-full w-full object-cover"
                                />
                            </figure>

                            {/**
                             * Content area
                             */}
                            <div className="flex flex-col p-6">
                                <header className="mb-2">
                                    <h3 className="text-lg font-semibold text-foreground">
                                        Portfolio Website
                                    </h3>
                                </header>

                                <p className="mb-6 flex-grow text-sm text-muted">
                                    A personal portfolio built with Next.js and Tailwind CSS, focusing on
                                    semantic HTML, accessibility, and smooth scrolling.
                                </p>

                                <footer>
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    >
                                        View Project →
                                    </a>
                                </footer>
                            </div>
                        </div>
                    </article>

                </div>
            </div>
        </section>
    )
}
