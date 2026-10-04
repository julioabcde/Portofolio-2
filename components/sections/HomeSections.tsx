'use client'
import { useDesktop } from '@/lib/hooks/useDesktop'
import Hero from './hero/Hero'
import About from './About'
import Skills from './Skills'
import Experience from './experience/Experience'
import Projects from './projects/Projects'
import MobileSelectedWorks from './projects/MobileSelectedWorks'
import Research from './research/Research'
import MobileResearch from './research/MobileResearch'
import Certifications from './certifications/Certifications'
import Contact from './contact/Contact'
import MobileShell from '@/components/layout/MobileShell'

const hatch = <div aria-hidden="true" className="hatch h-8 border-b border-border" />

export default function HomeSections() {
  if (useDesktop())
    return (
      <>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </>
    )
  return (
    <MobileShell>
      <Experience />
      {hatch}
      <MobileSelectedWorks />
      {hatch}
      <Skills />
      {hatch}
      <MobileResearch />
      {hatch}
      <Certifications />
      {hatch}
      <Contact />
    </MobileShell>
  )
}
