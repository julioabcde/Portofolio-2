const skills = [
    {
        name: "React",
        level: 85,
        description: "Component-based UIs",
        icon: "⚛️",
        color: "from-[#61DAFB]/30 to-[#61DAFB]/10",
    },
    {
        name: "TypeScript",
        level: 75,
        description: "Type-safe development",
        icon: "📘",
        color: "from-[#3178C6]/30 to-[#3178C6]/10",
    },
    {
        name: "Next.js",
        level: 70,
        description: "Full-stack React framework",
        icon: "▲",
        color: "from-foreground/30 to-foreground/10",
    },
    {
        name: "Tailwind CSS",
        level: 90,
        description: "Utility-first styling",
        icon: "🎨",
        color: "from-[#38BDF8]/30 to-[#38BDF8]/10",
    },
];

const otherSkills = ["HTML5", "CSS3", "JavaScript", "Git", "VS Code", "Figma", "REST APIs", "Responsive Design"];

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-background-secondary" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Left - Header and description */}
                    <div className="lg:col-span-5">
                        <div className="lg:sticky lg:top-32 space-y-6">
                            <span className="text-primary font-mono text-sm">// 02. Skills</span>
                            <h2 className="text-4xl md:text-5xl font-bold">
                                My <span className="gradient-text">Tech Stack</span>
                            </h2>
                            <p className="text-muted leading-relaxed">
                                I specialize in modern front-end technologies to build responsive,
                                performant, and accessible web applications. Here&apos;s what I work with daily.
                            </p>

                            {/* Other Skills */}
                            <div className="pt-4">
                                <h4 className="text-sm font-mono text-muted mb-4">// Also familiar with</h4>
                                <div className="flex flex-wrap gap-2">
                                    {otherSkills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 text-sm rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Skills Cards */}
                    <div className="lg:col-span-7">
                        <div className="grid sm:grid-cols-2 gap-6">
                            {skills.map((skill, index) => (
                                <div
                                    key={skill.name}
                                    className="group relative p-6 rounded-2xl glassmorphism card-hover overflow-hidden"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {/* Gradient Background on Hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                                    <div className="relative z-10">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="w-14 h-14 rounded-xl bg-background flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                                {skill.icon}
                                            </div>
                                            <span className="text-2xl font-bold text-muted group-hover:text-foreground transition-colors">
                                                {skill.level}%
                                            </span>
                                        </div>

                                        {/* Name & Description */}
                                        <h3 className="text-xl font-bold mb-1">{skill.name}</h3>
                                        <p className="text-sm text-muted mb-4">{skill.description}</p>

                                        {/* Progress Bar */}
                                        <div className="h-2 bg-background rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                                                style={{ width: `${skill.level}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
