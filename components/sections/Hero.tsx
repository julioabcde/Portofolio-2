export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden pt-20"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient Mesh */}
                <div className="absolute top-0 right-0 w-[70%] h-full bg-gradient-to-bl from-primary/10 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 w-[50%] h-[60%] bg-gradient-to-tr from-accent/10 via-transparent to-transparent" />

                {/* Grid Lines */}
                <div className="absolute right-0 top-0 w-1/2 h-full opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(var(--color-text) 1px, transparent 1px),
                             linear-gradient(90deg, var(--color-text) 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                    {/* Left Content - Takes 7 columns */}
                    <div className="lg:col-span-7 space-y-8">
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glassmorphism animate-fade-in-up">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                            </span>
                            <span className="text-sm font-medium">Available for opportunities</span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                            <p className="text-lg md:text-xl text-muted font-mono">
                                &lt;Hello World! /&gt;
                            </p>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                I&apos;m{" "}
                                <span className="gradient-text">Julio</span>
                                <br />
                                <span className="text-muted text-3xl md:text-4xl lg:text-5xl font-light">
                                    Junior Front End Engineer
                                </span>
                            </h1>
                        </div>

                        {/* Tagline */}
                        <p className="text-xl md:text-2xl text-muted max-w-xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                            <span className="text-primary font-semibold">Crafting Pixels</span> into Experiences —
                            building beautiful, user-centric web applications with modern technologies.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                            <a href="#projects" className="btn btn-primary group">
                                <span>View My Work</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                            <a href="#contact" className="btn btn-secondary">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>Get In Touch</span>
                            </a>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="flex flex-wrap gap-3 pt-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                            {["React", "TypeScript", "Next.js", "Tailwind"].map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 text-sm font-medium rounded-lg bg-surface border border-border hover:border-primary transition-colors"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Visual - Takes 5 columns */}
                    <div className="lg:col-span-5 relative hidden lg:block">
                        <div className="relative w-full aspect-square max-w-md ml-auto">
                            {/* Code Window Mockup */}
                            <div className="absolute inset-0 rounded-2xl glassmorphism p-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                                {/* Window Header */}
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                    <span className="ml-3 text-xs text-muted font-mono">julio-portfolio.tsx</span>
                                </div>

                                {/* Code Content */}
                                <div className="font-mono text-sm space-y-2 text-muted">
                                    <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {"{"}</p>
                                    <p className="pl-4"><span className="text-primary">name</span>: <span className="text-accent">&quot;Julio&quot;</span>,</p>
                                    <p className="pl-4"><span className="text-primary">role</span>: <span className="text-accent">&quot;Front End Engineer&quot;</span>,</p>
                                    <p className="pl-4"><span className="text-primary">passions</span>: [</p>
                                    <p className="pl-8"><span className="text-accent">&quot;Clean Code&quot;</span>,</p>
                                    <p className="pl-8"><span className="text-accent">&quot;UI/UX Design&quot;</span>,</p>
                                    <p className="pl-8"><span className="text-accent">&quot;Problem Solving&quot;</span></p>
                                    <p className="pl-4">],</p>
                                    <p className="pl-4"><span className="text-primary">coffee</span>: <span className="text-blue-400">true</span> ☕</p>
                                    <p>{"}"};</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator - Left aligned */}
                    <div className="absolute bottom-10 left-6 flex items-center gap-3 text-muted animate-bounce">
                        <div className="w-6 h-10 rounded-full border-2 border-muted flex justify-center pt-2">
                            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
                        </div>
                        <span className="text-sm font-medium">Scroll to explore</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
