export default function About() {
    return (
        /**
         * <section>
         * - Represents the "About" content
         * - Standalone topic within <main>
         */
        <section
            id="about"
            className="scroll-mt-24 bg-background-secondary"
        >
            <div className="mx-auto max-w-6xl px-6 py-24">
                {/**
                 * <header>
                 * - Introductory content for this section
                 * - Groups heading and short description
                 */}
                <header className="mb-12 max-w-2xl space-y-4">
                    {/**
                     * <h2>
                     * - Section heading
                     * - Follows <h1> from Hero
                     */}
                    <h2 className="text-3xl font-semibold text-foreground">
                        About Me
                    </h2>

                    {/**
                     * <p>
                     * - Short section summary
                     * - Supports the heading
                     */}
                    <p className="text-muted">
                        A brief introduction about who I am, how I work, and what I value as
                        a developer.
                    </p>
                </header>

                {/**
                 * Content body
                 * - <div> used as layout container
                 * - Paragraphs are the actual semantic content
                 */}
                <div className="max-w-3xl space-y-6 text-foreground">
                    <p>
                        I am a frontend developer with a strong focus on building clean,
                        maintainable, and accessible user interfaces. I enjoy translating
                        complex requirements into simple, intuitive experiences that feel
                        natural to users.
                    </p>

                    <p>
                        My approach emphasizes thoughtful architecture, performance
                        awareness, and long-term scalability. I believe good software is not
                        just about features, but about clarity, consistency, and empathy for
                        the people who use it.
                    </p>
                </div>
            </div>
        </section>
    )
}
