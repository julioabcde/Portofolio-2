'use client'
export default function Contact() {
  return (
    /**
     * <section>
     * - Represents the contact area
     * - Final call-to-action section
     */
    <section
      id="contact"
      className="scroll-mt-24 bg-background"
    >
      <div className="mx-auto max-w-6xl px-6 py-24">
        {/**
         * <header>
         * - Section introduction
         */}
        <header className="mb-12 max-w-2xl space-y-4">
          <h2 className="text-3xl font-semibold text-foreground">
            Contact
          </h2>
          <p className="text-muted">
            Interested in working together or have a question? Feel free to
            reach out through the form or via email.
          </p>
        </header>

        <div className="grid gap-12 md:grid-cols-2">
          {/**
           * <address>
           * - Contact information for the individual
           * - Semantic and screen-reader friendly
           */}
          <address className="not-italic space-y-4 text-foreground">
            <p className="text-muted">
              You can contact me directly via email or connect with me on the
              following platforms:
            </p>

            <a
              href="mailto:julio@example.com"
              className="block text-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              julio@example.com
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              LinkedIn
            </a>
          </address>

          {/**
           * <form>
           * - Contact form
           * - Uses proper labels for accessibility
           */}
          <form
            className="space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-medium text-foreground"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded-md border border-border bg-surface px-3 py-2 text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-foreground"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-md border border-border bg-surface px-3 py-2 text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-md border border-border bg-surface px-3 py-2 text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              />
            </div>

            <button
              type="submit"
              className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-black transition hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
