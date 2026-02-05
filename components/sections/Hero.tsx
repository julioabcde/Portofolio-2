export default function Hero() {
    return (
        /**
         * <section>
         * - Represents the main introductory content
         * - First content inside <main>
         */
        <section
            id="top"
            className="relative flex min-h-screen items-center bg-background"
        >
            {/**
             * Container
             * - Limits content width
             * - Centers content vertically & horizontally
             */}
            <div
                className="mx-auto w-full max-w-6xl px-6 py-24"
            >
                <header className="max-w-3xl space-y-6">
                    {/**
                     * <p>
                     * - Intro / role indicator
                     * - Not a heading (supporting text)
                     */}
                    <p className="text-sm uppercase tracking-widest text-muted">
                        Frontend Developer
                    </p>

                    {/**
                     * <h1>
                     * - Main page heading
                     * - MUST be unique per page
                     */}
                    <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                        Building thoughtful, accessible, and performant web experiences.
                    </h1>
                </header>

                {/**
                 * <p>
                 * - Supporting description
                 * - Expands on the headline
                 */}
                <p className="max-w-wl text-lg text-muted">
                    I focus on crafting clean user interfaces with strong foundations in
                    accessibility, performance, and modern frontend architecture.
                </p>

                {/**
                 * Action group
                 * - Primary & secondary actions
                 * - <div> is fine (layout-only)
                 */}
                <div className="flex flex-wrap gap-4 pt-6">
                    <a
                        href="#projects"
                        className="rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:bg-surface">
                        View Projects
                    </a>

                    <a
                        href="#contact"
                        className="rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:bg-surface">
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    )
}