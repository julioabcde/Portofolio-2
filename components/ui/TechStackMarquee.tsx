interface TechItem {
    name: string
    icon: string
}

const techStack: TechItem[] = [
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'Next.js', icon: 'devicon-nextjs-plain' },
    { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
    { name: 'Vite', icon: 'devicon-vitejs-plain colored' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'Figma', icon: 'devicon-figma-plain colored' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'npm', icon: 'devicon-npm-original-wordmark colored' },
    { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
    { name: 'GitHub', icon: 'devicon-github-original' },
]

export default function TechStackMarquee() {
    return (
        <section aria-hidden="true" className="bg-background">
            <div className="max-w-[500px]">
                <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4">
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                        Tech Stack
                    </span>

                    <div className="group relative h-16 overflow-hidden">
                        {/* Edge fades */}
                        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
                        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />

                        {/* Track: items rendered twice; translates -50% to seamlessly loop */}
                        <ul className="flex h-full w-max items-center gap-4 pr-4 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
                            {[...techStack, ...techStack].map((tech, i) => (
                                <li
                                    key={`${tech.name}-${i}`}
                                    className="opacity-70 transition-opacity hover:opacity-100"
                                    title={tech.name}
                                >
                                    <i className={`${tech.icon} text-4xl`} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
