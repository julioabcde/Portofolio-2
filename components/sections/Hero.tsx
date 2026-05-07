import Image from 'next/image'
import TechStackMarquee from '../ui/TechStackMarquee'
import { TypingEffect } from '../ui/TypingEffect'

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-14"
    >
      {/* Axis labels */}
      <span
        aria-hidden="true"
        className="hidden md:flex absolute left-8 top-0 bottom-0 items-center font-mono text-[0.6rem] font-bold tracking-[0.35em] uppercase text-subtle [writing-mode:vertical-rl] z-10 pointer-events-none"
      >
        Portfolio 2026 — Independent Practice
      </span>
      <span
        aria-hidden="true"
        className="hidden md:flex absolute right-8 top-0 bottom-0 items-center font-mono text-[0.6rem] font-bold tracking-[0.35em] uppercase text-subtle [writing-mode:vertical-rl] rotate-180 z-10 pointer-events-none"
      >
        Frontend Development & Visual Systems
      </span>

      {/* Main container */}
      <div className="container-page relative">
        {/* Portrait — clipped to container width */}
        <div
          aria-hidden="true"
          className="absolute inset-0 overflow-hidden pointer-events-none z-0"
        >
          <div className="absolute right-0 top-0 h-full aspect-[2/3]">
            <Image
              src="/julio_hero.png"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 60vw, 40vw"
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

        <div className="relative z-[2] font-mono text-[0.65rem] font-bold tracking-[0.3em] uppercase text-primary mb-12">
          Frontend Developer & UI Engineer
        </div>

        <h1
          className="relative z-[2] font-display font-extrabold leading-[0.9] tracking-[-0.04em] mb-12 max-w-[1100px]"
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
