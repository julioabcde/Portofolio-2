// export default function About() {
//     return (
//         /**
//          * <section>
//          * - Represents the "About" content
//          * - Standalone topic within <main>
//          */
//         <section
//             id="about"
//             className="scroll-mt-24 bg-background-secondary"
//         >
//             <div className="mx-auto max-w-6xl px-6 py-24">
//                 {/**
//                  * <header>
//                  * - Introductory content for this section
//                  * - Groups heading and short description
//                  */}
//                 <header className="mb-12 max-w-2xl space-y-4">
//                     {/**
//                      * <h2>
//                      * - Section heading
//                      * - Follows <h1> from Hero
//                      */}
//                     <h2 className="text-3xl font-semibold text-foreground">
//                         About Me
//                     </h2>

//                     {/**
//                      * <p>
//                      * - Short section summary
//                      * - Supports the heading
//                      */}
//                     <p className="text-muted">
//                         A brief introduction about who I am, how I work, and what I value as
//                         a developer.
//                     </p>
//                 </header>

//                 {/**
//                  * Content body
//                  * - <div> used as layout container
//                  * - Paragraphs are the actual semantic content
//                  */}
//                 <div className="max-w-3xl space-y-6 text-foreground">
//                     <p>
//                         I am a frontend developer with a strong focus on building clean,
//                         maintainable, and accessible user interfaces. I enjoy translating
//                         complex requirements into simple, intuitive experiences that feel
//                         natural to users.
//                     </p>

//                     <p>
//                         My approach emphasizes thoughtful architecture, performance
//                         awareness, and long-term scalability. I believe good software is not
//                         just about features, but about clarity, consistency, and empathy for
//                         the people who use it.
//                     </p>
//                 </div>
//             </div>
//         </section>
//     )
// }

// 'use client'

// import Image from 'next/image'

// const EXPERIENCES = [
//   {
//     period: '2024 — Present',
//     role: 'Frontend Developer',
//     company: 'Periksa.id',
//     description: 'Building healthcare reporting modules, dashboard widgets, and patient screening systems for hospital networks.',
//   },
//   {
//     period: '2021 — Present',
//     role: 'Computer Science',
//     company: 'BINUS University',
//     description: 'Pursuing a degree in Computer Science with focus on web development. Currently completing thesis project.',
//   },
// ] as const

// const DETAILS = [
//   { label: 'Name', value: 'Julio' },
//   { label: 'Location', value: 'Jakarta, Indonesia' },
//   { label: 'Education', value: 'BINUS University' },
//   { label: 'Focus', value: 'Frontend Development' },
//   { label: 'Languages', value: 'Indonesian, English' },
//   { label: 'Availability', value: 'Open to opportunities' },
// ] as const

// export default function About() {
//   return (
//     <section
//       id="about"
//       className="relative py-28"
//       aria-labelledby="about-heading"
//     >
//       <div className="mx-auto w-full max-w-6xl px-6">

//         {/* Section header — ruled line style */}
//         <header className="mb-20">
//           <div className="flex items-center gap-4 mb-6">
//             <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] shrink-0">
//               About Me
//             </p>
//             <div aria-hidden="true" className="flex-1 h-px bg-border" />
//           </div>
//           <h2
//             id="about-heading"
//             className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
//           >
//             A developer who cares
//             <br />
//             <span className="text-muted">about the details.</span>
//           </h2>
//         </header>

//         {/**
//          * Two-column layout with a vertical ruled divider.
//          * Left: bio + photo. Right: details table + experience.
//          * The border-l on the right column creates the divider.
//          */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">

//           {/* LEFT — Bio & photo */}
//           <div className="lg:pr-12 space-y-8">
//             {/* Profile image */}
//             <figure className="relative">
//               <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border">
//                 <Image
//                   src="/profile.jpg"
//                   alt="Photo of Julio"
//                   fill
//                   sizes="(max-width: 1024px) 100vw, 50vw"
//                   className="object-cover"
//                 />
//               </div>
//             </figure>

//             {/* Bio text */}
//             <div className="space-y-4">
//               <p className="text-lg text-foreground leading-relaxed">
//                 I&rsquo;m a Computer Science student at BINUS University and a Frontend
//                 Developer at Periksa.id, where I build healthcare technology used by
//                 hospitals across Indonesia.
//               </p>
//               <p className="text-[15px] text-muted leading-relaxed">
//                 I believe in writing clean, maintainable code and designing interfaces that
//                 feel intuitive. Every project is an opportunity to improve — both the product
//                 and myself as a developer.
//               </p>
//               <p className="text-[15px] text-muted leading-relaxed">
//                 When I&rsquo;m not coding, I&rsquo;m exploring new tools, studying design
//                 systems, or working on my thesis project — a comprehensive POS system called
//                 Velocart that combines modern frontend practices with real business logic.
//               </p>
//             </div>

//             {/* Signature quote */}
//             <figure className="pt-6 border-t border-border">
//               <blockquote className="text-[15px] italic text-muted/80">
//                 &ldquo;Optimism is an occupational hazard of programming:
//                 feedback is the treatment.&rdquo;
//               </blockquote>
//               <figcaption className="text-xs font-mono text-primary/70 mt-2">
//                 &mdash; Kent Beck
//               </figcaption>
//             </figure>
//           </div>

//           {/* RIGHT — Details & experience */}
//           <div className="lg:pl-12 lg:border-l lg:border-border space-y-12">

//             {/**
//              * Personal details table.
//              * <dl> with ruled rows — clean, scannable, professional.
//              */}
//             <div>
//               <h3 className="text-xs font-mono text-muted uppercase tracking-[0.15em] mb-6">
//                 Details
//               </h3>
//               <dl className="divide-y divide-border border-y border-border">
//                 {DETAILS.map((item) => (
//                   <div
//                     key={item.label}
//                     className="flex items-center justify-between py-3.5
//                                transition-colors duration-300 hover:bg-surface/20"
//                   >
//                     <dt className="text-xs font-mono text-muted/60 uppercase tracking-wider">
//                       {item.label}
//                     </dt>
//                     <dd className="text-sm text-foreground font-medium text-right">
//                       {item.value}
//                     </dd>
//                   </div>
//                 ))}
//               </dl>
//             </div>

//             {/**
//              * Experience timeline.
//              * Minimal ruled style consistent with the details table.
//              */}
//             <div>
//               <h3 className="text-xs font-mono text-muted uppercase tracking-[0.15em] mb-6">
//                 Experience
//               </h3>
//               <ol className="space-y-0 divide-y divide-border border-y border-border" role="list">
//                 {EXPERIENCES.map((exp, i) => (
//                   <li key={i} className="py-5 transition-colors duration-300 hover:bg-surface/20">
//                     <div className="flex items-start justify-between gap-4 mb-2">
//                       <div>
//                         <h4 className="text-base font-semibold">{exp.role}</h4>
//                         <p className="text-sm text-primary/80">{exp.company}</p>
//                       </div>
//                       <time className="text-[11px] font-mono text-muted/50 uppercase tracking-wider shrink-0 pt-1">
//                         {exp.period}
//                       </time>
//                     </div>
//                     <p className="text-sm text-muted leading-relaxed">
//                       {exp.description}
//                     </p>
//                   </li>
//                 ))}
//               </ol>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import Image from 'next/image'

/**
 * Info items displayed as bento tiles.
 */
const INFO_TILES = [
  { label: 'Location', value: 'Jakarta, Indonesia', icon: '&#9673;' },
  { label: 'University', value: 'BINUS University', icon: '&#9733;' },
  { label: 'Focus', value: 'Frontend Development', icon: '&#9883;' },
  { label: 'Languages', value: 'Indonesian, English', icon: '&#9731;' },
] as const

const EXPERIENCES = [
  {
    period: '2024 — Present',
    role: 'Frontend Developer',
    company: 'Periksa.id',
    type: 'Enrichment Program',
  },
  {
    period: '2021 — Present',
    role: 'Computer Science',
    company: 'BINUS University',
    type: 'Undergraduate',
  },
] as const

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="relative mx-auto w-full max-w-6xl px-6">

        {/* Section header with large number */}
        <header className="mb-16 flex items-end gap-6">
          <span
            aria-hidden="true"
            className="text-[8rem] md:text-[10rem] font-bold leading-none text-border/50 select-none -mb-4"
          >
            03
          </span>
          <div className="pb-4">
            <p className="text-sm font-mono text-primary uppercase tracking-widest mb-2">
              About Me
            </p>
            <h2
              id="about-heading"
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              Who I Am
            </h2>
          </div>
        </header>

        {/**
         * Bento grid layout — asymmetric tiles.
         *
         * Desktop grid (6 cols):
         * ┌──────────────┬─────────┬─────────┐
         * │  Photo +     │  Info   │  Info   │
         * │  Bio         │  tile   │  tile   │
         * │  (3 cols,    ├─────────┼─────────┤
         * │   3 rows)    │  Info   │  Info   │
         * │              │  tile   │  tile   │
         * ├──────────────┴─────────┴─────────┤
         * │  Experience strip (full width)    │
         * └──────────────────────────────────-┘
         */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 auto-rows-[100px]">

          {/* Bio card — large tile with photo */}
          <article
            className="col-span-2 md:col-span-2 lg:col-span-3 row-span-3
                       rounded-2xl border border-border bg-surface/40 backdrop-blur-sm
                       p-6 md:p-8 flex flex-col"
          >
            <div className="flex items-start gap-5 mb-6">
              <figure className="shrink-0">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-border">
                  <Image
                    src=""
                    alt="Photo of Julio"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
              </figure>
              <div>
                <h3 className="text-xl font-bold">Julio</h3>
                <p className="text-sm text-primary font-mono">Frontend Developer</p>
                <p className="flex items-center gap-1.5 text-xs text-muted mt-1">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
                  </span>
                  Available for opportunities
                </p>
              </div>
            </div>

            <p className="text-muted leading-relaxed text-[15px] mb-4">
              A Computer Science student at BINUS University with a passion for building
              clean, accessible, and performant user interfaces. I care about the details
              that make software feel polished.
            </p>
            <p className="text-muted leading-relaxed text-[15px]">
              Currently working as a Frontend Developer at Periksa.id, building
              healthcare technology for hospitals across Indonesia.
            </p>

            {/* Decorative quote at the bottom */}
            <figure className="mt-auto pt-6 border-t border-border/50">
              <blockquote className="text-sm italic text-muted/70">
                &ldquo;Every pixel matters, every interaction should feel intentional.&rdquo;
              </blockquote>
            </figure>
          </article>

          {/* Info tiles — small bento squares */}
          {INFO_TILES.map((tile) => (
            <div
              key={tile.label}
              className="col-span-1 row-span-1 rounded-xl border border-border bg-surface/30
                         backdrop-blur-sm p-4 flex flex-col justify-between
                         transition-all duration-300 hover:border-primary/30 hover:bg-surface/50"
            >
              <span
                aria-hidden="true"
                className="text-lg text-primary/50"
                dangerouslySetInnerHTML={{ __html: tile.icon }}
              />
              <div>
                <p className="text-[10px] font-mono text-muted/50 uppercase tracking-wider">
                  {tile.label}
                </p>
                <p className="text-sm font-medium text-foreground mt-0.5 leading-snug">
                  {tile.value}
                </p>
              </div>
            </div>
          ))}

          {/* Stats tile — wide */}
          <div
            className="col-span-2 lg:col-span-2 row-span-1 rounded-xl border border-border bg-surface/30
                       backdrop-blur-sm p-4 flex items-center justify-around gap-4"
          >
            {[
              { label: 'Projects', value: '10+' },
              { label: 'Stack', value: '15+' },
              { label: 'Coffee', value: '999+' },
            ].map((stat) => (
              <dl key={stat.label} className="text-center">
                <dd className="text-2xl font-bold text-primary leading-none">{stat.value}</dd>
                <dt className="text-[10px] font-mono text-muted/50 uppercase tracking-wider mt-1">
                  {stat.label}
                </dt>
              </dl>
            ))}
          </div>

          {/* Experience strip — full width */}
          {EXPERIENCES.map((exp, i) => (
            <article
              key={i}
              className="col-span-2 md:col-span-2 lg:col-span-3 row-span-1
                         rounded-xl border border-border bg-surface/30 backdrop-blur-sm
                         p-4 flex items-center gap-4"
            >
              {/* Timeline dot */}
              <div className="shrink-0 flex flex-col items-center gap-1">
                <div className="h-2.5 w-2.5 rounded-full border-2 border-primary bg-background" />
                {i < EXPERIENCES.length - 1 && (
                  <div className="w-px h-4 bg-border" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold truncate">{exp.role}</h4>
                  <span className="rounded-full border border-border px-2 py-0.5
                                   text-[10px] font-mono text-muted shrink-0">
                    {exp.type}
                  </span>
                </div>
                <p className="text-xs text-muted mt-0.5">{exp.company}</p>
              </div>

              <time className="text-[10px] font-mono text-muted/60 uppercase tracking-wider shrink-0">
                {exp.period}
              </time>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}