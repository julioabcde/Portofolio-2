'use client'

import { useEffect, useRef, useState } from 'react'

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
    const trackARef = useRef<HTMLDivElement>(null)
    const trackBRef = useRef<HTMLDivElement>(null)

    const offsetRef = useRef(0)
    const rafRef = useRef<number | null>(null)

    const [paused, setPaused] = useState(false)

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches

        if (prefersReducedMotion) return

        const speed = 0.35

        const animate = () => {
            if (!paused && trackARef.current && trackBRef.current) {
                const trackWidth = trackARef.current.offsetWidth

                offsetRef.current -= speed

                if (offsetRef.current <= -trackWidth) {
                    offsetRef.current += trackWidth
                }

                trackARef.current.style.transform = `translateX(${offsetRef.current}px)`
                trackBRef.current.style.transform = `translateX(${offsetRef.current + trackWidth}px)`
            }

            rafRef.current = requestAnimationFrame(animate)
        }

        rafRef.current = requestAnimationFrame(animate)

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
    }, [paused])

    return (
        /**
         * <section>
         * - Decorative marquee
         * - Hidden from assistive technology
         */
        <section
            aria-hidden="true"
            className="bg-background"
        >
            <div className="max-w-[500px]">
                <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4">
                    {/* Label */}
                    <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                        Tech Stack
                    </span>

                    {/* Marquee viewport */}
                    <div
                        className="relative h-16 overflow-hidden"
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                    >
                        {/* Gradient masks */}
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

                        {/* Track A */}
                        <div
                            ref={trackARef}
                            className="absolute left-0 top-0 flex h-full items-center"
                        >
                            <ul className="flex items-center gap-4 pr-10">
                                {techStack.map((tech) => (
                                    <li
                                        key={tech.name}
                                        className="opacity-70 transition-opacity hover:opacity-100"
                                        title={tech.name}
                                    >
                                        <i className={`${tech.icon} text-4xl`} />
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Track B */}
                        <div
                            ref={trackBRef}
                            className="absolute left-0 top-0 flex h-full items-center"
                        >
                            <ul className="flex items-center gap-4 pr-10">
                                {techStack.map((tech) => (
                                    <li
                                        key={`${tech.name}-dup`}
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
            </div>
        </section>
    )
}
