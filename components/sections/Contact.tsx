// ============================================
// CONTACT DATA - Update with your info!
// ============================================

const contactInfo = {
    email: "your.email@example.com",
    linkedin: "https://linkedin.com/in/yourusername",
    github: "https://github.com/yourusername",
};

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-background-secondary" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-primary font-mono text-sm mb-3 block">// 04. Contact</span>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Let&apos;s work <span className="gradient-text">together</span>
                            </h2>
                            <p className="text-muted text-lg leading-relaxed">
                                I&apos;m currently looking for new opportunities. Whether you have a
                                project in mind, a question, or just want to connect — my inbox is always open!
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="space-y-4">
                            {/* Email */}
                            <a
                                href={`mailto:${contactInfo.email}`}
                                className="group flex items-center gap-4 p-4 rounded-xl glassmorphism hover:border-primary/50 transition-all"
                            >
                                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-muted">Email me at</p>
                                    <p className="font-medium group-hover:text-primary transition-colors">{contactInfo.email}</p>
                                </div>
                                <svg className="w-5 h-5 text-muted ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href={contactInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 p-4 rounded-xl glassmorphism hover:border-primary/50 transition-all"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-muted">Connect on</p>
                                    <p className="font-medium group-hover:text-primary transition-colors">LinkedIn</p>
                                </div>
                                <svg className="w-5 h-5 text-muted ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>

                            {/* GitHub */}
                            <a
                                href={contactInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 p-4 rounded-xl glassmorphism hover:border-primary/50 transition-all"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gray-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-muted">Check out my</p>
                                    <p className="font-medium group-hover:text-primary transition-colors">GitHub</p>
                                </div>
                                <svg className="w-5 h-5 text-muted ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right - Visual/CTA */}
                    <div className="relative">
                        <div className="p-10 rounded-3xl glassmorphism text-center">
                            {/* Decorative */}
                            <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                <span className="text-5xl">👋</span>
                            </div>

                            <h3 className="text-2xl font-bold mb-4">Ready to start?</h3>
                            <p className="text-muted mb-8 max-w-sm mx-auto">
                                Feel free to reach out. I&apos;m excited to hear about your project and explore how we can work together.
                            </p>

                            <a
                                href={`mailto:${contactInfo.email}`}
                                className="btn btn-primary w-full max-w-xs"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Send me an email
                            </a>

                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-5 rounded-3xl overflow-hidden pointer-events-none">
                                <div className="absolute inset-0" style={{
                                    backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
                                    backgroundSize: '24px 24px'
                                }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
