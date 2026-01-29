export default function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 right-0 w-1/3 h-96 bg-gradient-to-l from-primary/5 to-transparent" />
                <div className="absolute bottom-0 left-0 w-1/2 h-64 bg-gradient-to-r from-accent/5 to-transparent" />
            </div>

            <div className="container relative z-10">
                {/* Section Header - Left aligned */}
                <div className="mb-16">
                    <span className="text-primary font-mono text-sm mb-3 block">// 01. About Me</span>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Get to know me
                    </h2>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-12 gap-6">
                    {/* Main Bio Card - Large */}
                    <div className="col-span-12 lg:col-span-7 row-span-2">
                        <div className="h-full p-8 rounded-2xl glassmorphism card-hover">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    {/* Avatar */}
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                        <span className="text-4xl font-bold text-white">J</span>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">Julio</h3>
                                        <p className="text-primary">Junior Front End Engineer</p>
                                    </div>
                                </div>

                                <div className="space-y-4 text-muted leading-relaxed">
                                    <p>
                                        I&apos;m a passionate developer who loves transforming ideas into beautiful,
                                        functional websites. My journey started with curiosity about how websites work,
                                        and evolved into a deep passion for creating user-centric digital experiences.
                                    </p>
                                    <p>
                                        I specialize in modern front-end technologies and believe in writing clean,
                                        maintainable code. Every project is an opportunity to learn something new
                                        and push my boundaries.
                                    </p>
                                    <p>
                                        When I&apos;m not coding, you can find me exploring new technologies,
                                        contributing to open-source, or learning about UI/UX design principles.
                                    </p>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 pt-4">
                                    {["Problem Solver", "Quick Learner", "Team Player", "Detail Oriented"].map((tag) => (
                                        <span key={tag} className="px-3 py-1.5 text-sm rounded-full bg-primary/10 text-primary">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Stats Card */}
                    <div className="col-span-6 lg:col-span-5">
                        <div className="h-full p-6 rounded-2xl glassmorphism card-hover">
                            <h4 className="text-sm font-mono text-muted mb-4">// Quick Stats</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center p-4 rounded-xl bg-background">
                                    <span className="text-3xl font-bold gradient-text">1+</span>
                                    <p className="text-sm text-muted mt-1">Years Coding</p>
                                </div>
                                <div className="text-center p-4 rounded-xl bg-background">
                                    <span className="text-3xl font-bold gradient-text">10+</span>
                                    <p className="text-sm text-muted mt-1">Projects</p>
                                </div>
                                <div className="text-center p-4 rounded-xl bg-background">
                                    <span className="text-3xl font-bold gradient-text">4+</span>
                                    <p className="text-sm text-muted mt-1">Technologies</p>
                                </div>
                                <div className="text-center p-4 rounded-xl bg-background">
                                    <span className="text-3xl font-bold gradient-text">∞</span>
                                    <p className="text-sm text-muted mt-1">Curiosity</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Location Card */}
                    <div className="col-span-6 lg:col-span-2">
                        <div className="h-full p-6 rounded-2xl glassmorphism card-hover flex flex-col items-center justify-center text-center">
                            <span className="text-4xl mb-3">📍</span>
                            <p className="text-muted text-sm">Based in</p>
                            <p className="font-semibold">Indonesia</p>
                        </div>
                    </div>

                    {/* Currently Learning */}
                    <div className="col-span-12 lg:col-span-3">
                        <div className="h-full p-6 rounded-2xl glassmorphism card-hover">
                            <h4 className="text-sm font-mono text-muted mb-4">// Currently Learning</h4>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-lg">📚</span>
                                    <span className="text-sm">Advanced TypeScript</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-lg">🎨</span>
                                    <span className="text-sm">UI/UX Design</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-lg">⚡</span>
                                    <span className="text-sm">Performance Optimization</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
