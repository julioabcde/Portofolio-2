// ============================================
// PROJECTS DATA - Easy to edit!
// Just update this array with your projects
// ============================================

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
    size: "large" | "medium" | "small";
}

const projects: Project[] = [
    // ===========================================
    // ADD YOUR PROJECTS HERE
    // Size options: "large" (spans 2 cols), "medium" (1 col), "small" (1 col, shorter)
    // ===========================================
    {
        id: 1,
        title: "Featured Project",
        description: "A full-stack web application showcasing modern development practices with React, TypeScript, and a clean UI design. This project demonstrates my ability to build complex, user-friendly applications.",
        image: "",
        tags: ["React", "TypeScript", "Next.js", "Tailwind"],
        size: "large",
    },
    {
        id: 2,
        title: "Project Two",
        description: "A creative web application built with modern technologies and best practices.",
        image: "",
        tags: ["React", "API Integration"],
        size: "medium",
    },
    {
        id: 3,
        title: "Project Three",
        description: "Exploring new design patterns and cutting-edge features.",
        image: "",
        tags: ["Next.js", "TypeScript"],
        size: "medium",
    },
    {
        id: 4,
        title: "Side Project",
        description: "A fun experiment with animations and interactive elements.",
        image: "",
        tags: ["CSS", "JavaScript"],
        size: "small",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute bottom-0 left-0 w-1/3 h-96 bg-gradient-to-r from-accent/5 to-transparent" />

            <div className="container relative z-10">
                {/* Header - Left aligned */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
                    <div>
                        <span className="text-primary font-mono text-sm mb-3 block">// 03. Projects</span>
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Featured <span className="gradient-text">Work</span>
                        </h2>
                    </div>
                    <p className="text-muted max-w-md lg:text-right">
                        A selection of projects I&apos;ve worked on. Each represents unique challenges and learning experiences.
                    </p>
                </div>

                {/* Bento Grid for Projects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`group relative rounded-2xl overflow-hidden glassmorphism card-hover ${project.size === "large" ? "md:col-span-2 lg:col-span-2" : ""
                                }`}
                        >
                            {/* Project Image / Placeholder */}
                            <div className={`relative ${project.size === "large" ? "h-64" : "h-48"} bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden`}>
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="text-5xl font-bold gradient-text opacity-30 mb-2">
                                                {project.title.charAt(0)}
                                            </div>
                                            <span className="text-sm text-muted">Coming Soon</span>
                                        </div>
                                    </div>
                                )}

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <div className="flex gap-3">
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors"
                                            >
                                                Live Demo
                                            </a>
                                        )}
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-surface border border-border rounded-lg text-sm font-medium hover:border-primary transition-colors"
                                            >
                                                Source
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Corner Accent */}
                            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More */}
                <div className="mt-12 text-center">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-muted hover:text-primary transition-colors group"
                    >
                        <span>View all projects on GitHub</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
