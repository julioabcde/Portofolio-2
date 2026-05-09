import Image from 'next/image'
import TechStackMarquee from '../ui/TechStackMarquee'
import { TypingEffect } from '../ui/TypingEffect'

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden md:pt-14"
    >
      <div className="md:hidden flex flex-1 flex-col px-6 pt-24 relative z-[1]">
        <nav
          aria-label="Mobile socials"
          className="flex justify-center gap-7 mb-8"
        >
          {[
            { label: 'Instagram', href: 'https://instagram.com/' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/julio' },
            { label: 'GitHub', href: 'https://github.com/julio' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-foreground hover:text-primary transition-colors"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="relative flex-1 flex items-end justify-center">
          <div className="absolute bottom-0 h-full aspect-[2/3]">
            <Image
              src="/julio_hero.png"
              alt=""
              fill
              priority
              sizes="85vw"
              className="object-cover object-top select-none"
            />
          </div>
        </div>
      </div>

      {/* Axis label */}
      <span
        aria-hidden="true"
        className="hidden md:flex absolute right-8 top-0 bottom-4 items-center font-mono text-[0.6rem] font-bold tracking-[0.35em] uppercase text-subtle [writing-mode:vertical-rl] rotate-180 z-10 pointer-events-none"
      >
        Frontend Development & Visual Systems
      </span>

      {/* Main container — desktop only */}
      <div className="hidden md:block container-page relative pt-12 md:pt-14 lg:pt-16 xl:pt-20">
        {/* Portrait — clipped to container width */}
        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden pointer-events-none z-0"
        >
          <div className="absolute right-0 md:right-16 lg:right-18 top-0 h-full aspect-[2/3]">
            <Image
              src="/julio_hero.png"
              alt=""
              fill
              priority
              className="object-contain object-top select-none"
            />

            <div className="hidden absolute rotate-12 pointer-events-none select-none lg:block lg:top-[23%] lg:right-[18%] lg:w-24">
              <div className="overflow-hidden">
                <img
                  src="/cat-scuba-kicau.gif"
                  alt="Scuba cat"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <h1
          className="relative z-[2] font-display font-extrabold leading-[0.9] tracking-[-0.04em] mb-6 md:mb-8 lg:mb-10 xl:mb-14 2xl:mb-18 max-w-[1100px] xl:max-w-[1200px] 2xl:max-w-[1400px]"
          style={{ fontSize: 'clamp(3rem, 12vw, 12rem)' }}
        >
          Code that<br />
          speaks <em className="italic font-semibold text-primary"><TypingEffect words={["before"]} /></em><br />
          it's read.
        </h1>

        <div>
          <TechStackMarquee></TechStackMarquee>
        </div>
      </div>

    </section>
  )
}
