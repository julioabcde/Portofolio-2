const currentYear = new Date().getFullYear();

const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Footer() {
    return (
        <footer className="py-8 border-t border-border">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & Copyright */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <a href="#home" className="text-2xl font-bold gradient-text">
                            Julio<span className="text-accent">.</span>
                        </a>
                        <p className="text-sm text-muted">
                            © {currentYear} Julio. All rights reserved.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm text-muted hover:text-primary transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Made with */}
                    <p className="text-sm text-muted flex items-center gap-2">
                        Made with{" "}
                        <span className="text-red-500 animate-pulse">❤</span>
                        {" "}using Next.js & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
}
