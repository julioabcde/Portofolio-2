'use client'

import { useState, type FormEvent } from 'react'
import { SlideEffect } from '../ui/SlideEffect'

/**
 * Social / contact link data.
 */
const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/julio', icon: 'GH' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/julio', icon: 'LI' },
  { label: 'Email', href: 'mailto:julio@example.com', icon: '@' },
] as const

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
      company: formData.get('company') as string, // honeypot
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const json = await res.json()

      if (!res.ok) {
        throw new Error(json.error || 'Failed to send message')
      }

      setSubmitted(true)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative py-section-y-sm md:py-section-y-md lg:py-section-y-lg overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="container-page relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT COLUMN - Heading + info */}
          <div className="space-y-8">
            {/* Section header — bold variant */}
            <header>
              <div className="mb-4 flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="h-px w-7 bg-primary"
                />
                <p className="text-[10px] font-mono uppercase tracking-[0.26em] text-primary">
                  Contact
                </p>
              </div>
              <h2
                id="contact-heading"
                className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[0.95] tracking-[-0.025em]"
              >
                Let&rsquo;s Work
                <br />
                <em className="font-light italic text-muted">Together.</em>
              </h2>
              <div
                aria-hidden="true"
                className="mt-5 h-px bg-gradient-to-r from-primary via-border to-transparent"
              />
            </header>

            <p className="text-muted text-lg max-w-sm leading-relaxed">
              Have a project in mind? I&rsquo;d love to hear about it. Let&rsquo;s
              create something great together!
            </p>

            {/* Social links */}
            <nav aria-label="Social links" className="flex gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="group flex h-11 w-11 items-center justify-center rounded-md
                             border border-border text-sm font-mono text-muted overflow-hidden"
                >
                  <SlideEffect
                    fillColor="bg-primary/10"
                    fillTextColor="text-primary"
                    duration={250}
                  >
                    {link.icon}
                  </SlideEffect>
                </a>
              ))}
            </nav>
          </div>

          {/* RIGHT COLUMN - Form */}
          <div className="relative">
            <div className="relative rounded-md border border-border bg-surface/40 backdrop-blur-sm p-6 md:p-8">
              {submitted ? (
                <div role="status" className="text-center py-12 space-y-4">
                  <p className="text-4xl" aria-hidden="true">✓</p>
                  <h3 className="text-xl font-semibold text-primary">Message Sent!</h3>
                  <p className="text-muted">
                    Thank you for reaching out. I&rsquo;ll get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="group mt-4 h-8 overflow-hidden text-sm font-mono text-primary
                               underline underline-offset-4"
                  >
                    <SlideEffect
                      fillColor="bg-transparent"
                      fillTextColor="text-foreground"
                      duration={250}
                    >
                      Send another message
                    </SlideEffect>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Honeypot - hidden from users, bots will fill this */}
                  <input
                    type="text"
                    name="company"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute -left-[9999px] opacity-0 pointer-events-none"
                  />

                  {/* Error message */}
                  {error && (
                    <div
                      role="alert"
                      className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-700"
                    >
                      {error}
                    </div>
                  )}

                  {/* Name fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-xs font-mono text-muted uppercase tracking-wider mb-2"
                      >
                        First name
                      </label>
                      <input
                        id="first-name"
                        name="firstName"
                        type="text"
                        required
                        autoComplete="given-name"
                        placeholder="John"
                        className="w-full rounded-lg border border-border bg-surface px-4 py-3
                                   text-sm text-foreground caret-secondary placeholder:text-muted/60
                                   transition-all duration-300
                                   hover:border-muted/50
                                   focus:border-secondary focus:outline-none
                                   focus:ring-2 focus:ring-secondary/20"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-xs font-mono text-muted uppercase tracking-wider mb-2"
                      >
                        Last name
                      </label>
                      <input
                        id="last-name"
                        name="lastName"
                        type="text"
                        required
                        autoComplete="family-name"
                        placeholder="Doe"
                        className="w-full rounded-lg border border-border bg-surface px-4 py-3
                                   text-sm text-foreground caret-secondary placeholder:text-muted/60
                                   transition-all duration-300
                                   hover:border-muted/50
                                   focus:border-secondary focus:outline-none
                                   focus:ring-2 focus:ring-secondary/20"
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono text-muted uppercase tracking-wider mb-2"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="john@example.com"
                      className="w-full rounded-lg border border-border bg-surface px-4 py-3
                                 text-sm text-foreground caret-secondary placeholder:text-muted/60
                                 transition-all duration-300
                                 hover:border-muted/50
                                 focus:border-secondary focus:outline-none
                                 focus:ring-2 focus:ring-secondary/20"
                    />
                  </div>

                  {/* Message field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono text-muted uppercase tracking-wider mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full resize-y rounded-lg border border-border bg-surface px-4 py-3
                                 text-sm text-foreground caret-secondary placeholder:text-muted/60
                                 transition-all duration-300
                                 hover:border-muted/50
                                 focus:border-secondary focus:outline-none
                                 focus:ring-2 focus:ring-secondary/20"
                    />
                  </div>

                  {/* Footer: terms + submit */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                    <p className="text-[11px] text-muted/70 max-w-[220px] leading-relaxed">
                      <span className="text-primary">Your message</span> will be sent directly to my email.
                      <br />
                      I typically respond within <span className="text-secondary">24-48 hours</span>.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative inline-flex items-center justify-center
                                 overflow-hidden rounded-lg border border-primary
                                 h-12 px-6 text-sm font-medium text-primary
                                 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                          Sending...
                        </span>
                      ) : (
                        <SlideEffect
                          fillColor="bg-primary"
                          fillTextColor="text-white"
                          duration={300}
                        >
                          <span className="flex items-center gap-2">
                            SUBMIT <span>↗</span>
                          </span>
                        </SlideEffect>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
