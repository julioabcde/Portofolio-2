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
                                        <p className="text-primary">Frontend Developer</p>
                                    </div>
                                </div>

                                <div className="space-y-4 text-muted leading-relaxed text-justify">
                                    <p>
                                        An enthusiastic and dedicated developer with a strong interest in mobile development, web development, and full-stack engineering. I enjoy building user-centric applications across platforms and continuously improving my technical skills through hands-on projects and real-world problem solving.
                                    </p>
                                    <p>
                                        I am capable of contributing to the development of scalable, user-focused applications by writing clean, maintainable code and collaborating effectively within a team. My experience spans frontend development, UI design, backend integration, and database management, gained through academic projects and practical implementations.
                                    </p>
                                    <p>
                                        I have experience as a Frontend Developer Intern, where I built and maintained web applications using Angular, integrated RESTful APIs, and improved code quality through refactoring and debugging.
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
                                    <p className="text-sm text-muted mt-1">Year Experience</p>
                                </div>
                                <div className="text-center p-4 rounded-xl bg-background">
                                    <span className="text-3xl font-bold gradient-text">7+</span>
                                    <p className="text-sm text-muted mt-1">Projects</p>
                                </div>
                                <div className="text-center p-4 rounded-xl bg-background">
                                    <span className="text-3xl font-bold gradient-text">3.69</span>
                                    <p className="text-sm text-muted mt-1">GPA</p>
                                </div>
                                <div className="text-center p-4 rounded-xl bg-background">
                                    <span className="text-3xl font-bold gradient-text">1</span>
                                    <p className="text-sm text-muted mt-1">Publication</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education Card */}
                    <div className="col-span-6 lg:col-span-2">
                        <div className="h-full p-6 rounded-2xl glassmorphism card-hover flex flex-col items-center justify-center text-center">
                            <span className="text-4xl mb-3">🎓</span>
                            <p className="text-muted text-sm">Studying at</p>
                            <p className="font-semibold">Binus University</p>
                            <p className="text-xs text-muted mt-1">Software Engineering</p>
                        </div>
                    </div>

                    {/* Experience Card */}
                    <div className="col-span-12 lg:col-span-3">
                        <div className="h-full p-6 rounded-2xl glassmorphism card-hover">
                            <h4 className="text-sm font-mono text-muted mb-4">// Work Experience</h4>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-lg shrink-0">💼</span>
                                    <div>
                                        <p className="text-sm font-medium">Frontend Developer Intern</p>
                                        <p className="text-xs text-muted">PT Periksa Solusi Indonesia</p>
                                        <p className="text-xs text-primary">Feb 2025 - Feb 2026</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
