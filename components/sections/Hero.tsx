import TechStackMarquee from '../ui/TechStackMarquee'
import { TypingEffect } from '../ui/TypingEffect'
import { FlipEffect } from '../ui/FlipEffect'

const CODE_LINES = [
  { indent: 0, content: <>const <span className="text-blue-400">developer</span> = {'{'}</> },
  { indent: 1, content: <><span className="text-primary">name</span>: <span className="text-accent">"Julio"</span>,</> },
  { indent: 1, content: <><span className="text-primary">role</span>: <span className="text-accent">"Frontend Engineer"</span>,</> },
  { indent: 1, content: <><span className="text-primary">passions</span>: [</> },
  { indent: 2, content: <span className="text-accent">"Clean Code"</span> },
  { indent: 2, content: <span className="text-accent">"UI/UX Design"</span> },
  { indent: 2, content: <span className="text-accent">"Problem Solving"</span> },
  { indent: 1, content: <>],</> },
  { indent: 1, content: <><span className="text-primary">available</span>: <span className="text-green-400">true</span></> },
  { indent: 0, content: <>{"}"}</> },
] as const

export default function Hero() {
  const ROLES = ['Frontend Developer', 'UI/UX Enthusiast', 'Problem Solver']

  return (
    /**
     * Hero / Introduction section
     */
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[560px] w-[560px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      {/* Main container */}
      <div className="relative mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">

          {/* LEFT — Narrative */}
          <div className="order-1 space-y-10">

            {/* Identity cluster */}
            <div className="space-y-4">
              <p className="inline-block rounded-full border border-border bg-surface/60 px-4 py-1.5 text-sm font-mono text-muted backdrop-blur-sm">
                &lt;Hello World! /&gt;
              </p>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.08]">
                I&rsquo;m <span className="text-primary">Julio</span>
                <br />
                <span className="block mt-1.5 text-3xl md:text-4xl lg:text-5xl font-light text-muted">
                  <TypingEffect
                    words={ROLES}
                    typingSpeed={80}
                    deletingSpeed={50}
                    pauseDuration={2400}
                    waitDuration={400}
                    smoothTyping
                    showCursor={false}
                  />
                </span>
              </h1>
            </div>

            {/* Philosophy */}
            <figure className="max-w-lg">
              <blockquote className="border-l border-primary/40 pl-5 text-lg italic text-muted">
                &ldquo;Optimism is an occupational hazard of programming: feedback is the treatment.&rdquo;
              </blockquote>
              <figcaption className="mt-1.5 pl-5 text-sm text-primary">
                &mdash; Kent Beck
              </figcaption>
            </figure>

            {/* Action cluster */}
            <div className="space-y-4">

              <nav aria-label="Quick links" className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="
                    group relative inline-flex items-center justify-center
                    overflow-hidden rounded-lg border border-border
                    h-12 px-6 text-sm font-medium text-foreground
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
                  "
                >
                  <FlipEffect
                    fillOnHover
                    fillColor="bg-primary"
                    fillTextColor="text-background"
                    direction="vertical"
                    duration={300}
                    easing="ease-in-out"
                  >
                    View Projects
                  </FlipEffect>
                </a>

                <a
                  href="#contact"
                  className="
                    group relative inline-flex items-center justify-center
                    overflow-hidden rounded-lg border border-primary
                    h-12 px-6 text-sm font-medium text-primary
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
                  "
                >
                  <FlipEffect
                    fillOnHover
                    fillColor="bg-primary"
                    fillTextColor="text-background"
                    direction="vertical"
                    duration={300}
                    easing="ease-in-out"
                  >
                    Contact Me
                  </FlipEffect>
                </a>
              </nav>

              <TechStackMarquee />
            </div>
          </div>

          {/* RIGHT — Visual (Desktop only) */}
          <div className="order-2 hidden lg:flex justify-center pl-4">
            <div className="relative w-full max-w-md">

              {/* Code card */}
              <figure
                role="img"
                aria-label="Code snippet showing developer profile"
                className="relative transition-transform duration-700 hover:-translate-y-1"
              >
                <div className="rounded-2xl bg-surface/60 backdrop-blur-md border border-border p-4 shadow-2xl">
                  <div aria-hidden="true" className="mb-3 flex items-center gap-2 border-b border-border/50 pb-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <span className="h-3 w-3 rounded-full bg-green-500/80" />
                    <span className="ml-3 text-xs font-mono text-muted/60">
                      julio-portfolio.tsx
                    </span>
                  </div>

                  <pre className="font-mono text-[13px] leading-relaxed text-muted">
                    <code>
                      {CODE_LINES.map((line, i) => (
                        <span
                          key={i}
                          className="block"
                          style={{ paddingLeft: `${line.indent * 1.25}rem` }}
                        >
                          <span className="mr-3 inline-block w-5 text-right text-xs text-muted/30 select-none">
                            {i + 1}
                          </span>
                          {line.content}
                        </span>
                      ))}
                    </code>
                  </pre>
                </div>
              </figure>

              {/* Floating terminal */}
              <figure
                role="img"
                aria-label="Terminal output showing successful build"
                className="absolute left-1/2 top-[92%] -translate-x-1/2 mt-2 w-56"
              >
                <div className="rounded-xl bg-surface/70 backdrop-blur-md border border-border p-3 shadow-lg">
                  <p className="font-mono text-[11px] text-muted/70 mb-1">~/portfolio</p>
                  <p className="font-mono text-xs">
                    <span className="text-green-400">$</span> npm run build
                  </p>
                  <p className="font-mono text-[11px] text-green-400/80 mt-1">
                    ✓ Compiled successfully
                  </p>
                </div>
              </figure>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
