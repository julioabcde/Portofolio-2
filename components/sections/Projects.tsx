interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
    size: "large" | "medium" | "small";
    date: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Velocart",
        description: "A web-based POS system designed to support UMKM with affordable transaction management. Features automated Market Basket Analysis using Apriori and FP-Growth algorithms with support, confidence, and lift metrics.",
        image: "",
        tags: ["Laravel", "Next.js", "MySQL", "PHP"],
        liveUrl: "https://velocart-pos.vercel.app/dashboard",
        size: "large",
        date: "Dec 2025",
    },
    {
        id: 2,
        title: "BeaScholar",
        description: "A comprehensive web application that assists students in finding and applying for scholarships. Features intuitive UI for scholarship search and efficient backend for data processing.",
        image: "",
        tags: ["React JS", "Golang", "Firebase"],
        size: "medium",
        date: "Jun 2024",
    },
    {
        id: 3,
        title: "GymMe",
        description: "Full-stack web platform for supplement sales and inventory management. Features admin dashboard, secure access control, and integrated Crystal Reports.",
        image: "",
        tags: ["ASP.NET", "C#", "SQL Server"],
        size: "medium",
        date: "Jun 2024",
    },
    {
        id: 4,
        title: "DimsumMaster",
        description: "Mobile app for optimizing dim sum restaurant management. Real-time order processing system for tracking customer orders and improving operational efficiency.",
        image: "",
        tags: ["Android Studio", "Java", "Firebase"],
        size: "medium",
        date: "Dec 2024",
    },
    {
        id: 5,
        title: "StellarFest",
        description: "Interactive event management application with user-friendly interface for event scheduling, registration, and attendee management.",
        image: "",
        tags: ["JavaFX", "Eclipse"],
        size: "small",
        date: "Nov 2024",
    },
    {
        id: 6,
        title: "VhoTel",
        description: "High-fidelity prototype designed in Figma, built as a hotel website with Home, About, Rooms, Facilities, and Reservation pages.",
        image: "",
        tags: ["HTML", "CSS", "JavaScript", "Figma"],
        size: "small",
        date: "May 2023",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute bottom-0 left-0 w-1/3 h-96 bg-gradient-to-r from-primary/5 to-transparent" />

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
                        A selection of projects showcasing my experience in full-stack development, mobile apps, and UI/UX design.
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
                            <div className={`relative ${project.size === "large" ? "h-64" : "h-48"} bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden`}>
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
                                            <span className="text-sm text-muted">{project.date}</span>
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

                                {/* Date Badge */}
                                <span className="absolute top-4 right-4 px-3 py-1 text-xs font-medium bg-background/80 backdrop-blur-sm rounded-full">
                                    {project.date}
                                </span>
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
                            <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Publication Section */}
                <div className="mt-16 p-8 rounded-2xl glassmorphism">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                            <span className="text-2xl">📄</span>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-2">Research Publication</h4>
                            <p className="text-muted text-sm mb-3">
                                International Conference on Information Management and Technology (ICIMTech)
                            </p>
                            <p className="text-sm">
                                <span className="text-primary font-medium">
                                    Predicting Customer Sentiment in E-commerce: Leveraging Naive Bayes and Support Vector Machine Models using the Twitter API
                                </span>
                            </p>
                            <a
                                href="https://doi.org/10.1109/ICIMTech63123.2024.10780794"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary mt-2 transition-colors"
                            >
                                <span>View Publication</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* View More */}
                <div className="mt-12 text-center">
                    <a
                        href="https://github.com/julio68"
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
