'use client'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) return null

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="
          fixed inset-0 z-40
          bg-black/50
          backdrop-blur-sm
        "
      />

      {/* Sidebar */}
      <aside
        role="dialog"
        aria-modal="true"
        className="
          fixed right-0 top-0 z-50
          h-full w-[420px] max-w-full
          bg-background
          border-l border-border
        "
      >
        <div className="flex h-full flex-col px-6 py-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.3em] text-muted">
              Menu
            </span>

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="
                rounded-full
                border border-border
                p-2
                transition
                hover:bg-foreground hover:text-background
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
              "
            >
              ✕
            </button>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Sidebar navigation"
            className="mt-16 flex-1"
          >
            <ul className="space-y-10">
              {[
                { label: 'Home', href: '#home' },
                { label: 'Projects', href: '#projects' },
                { label: 'Skills', href: '#skills' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="
                      block
                      text-4xl font-semibold
                      tracking-tight
                      text-foreground
                      transition
                      hover:text-primary
                    "
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="mt-auto space-y-4 text-sm text-muted">
            <p>julio@email.com</p>

            <div className="flex gap-6">
              <a
                href="https://linkedin.com"
                className="transition hover:text-foreground"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                className="transition hover:text-foreground"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
