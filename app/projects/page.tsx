import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileShell from '@/components/layout/MobileShell'
import ProjectCard from '@/components/sections/projects/ProjectCard'
import MobileProjectGrid from '@/components/sections/projects/MobileProjectGrid'
import { PROJECTS } from '@/lib/data/project'

export const metadata: Metadata = {
  title: 'Projects · Julio',
  description: 'A gallery of web, mobile, and software projects.',
}

export default function ProjectsArchivePage() {
  return (
    <>
      <div className="hidden lg:block">
        <Header />
        <main className="min-h-screen bg-background pt-28 pb-16 text-foreground md:pt-32">
          <h1 className="sr-only">Projects</h1>
          <section
            aria-label="Project gallery"
            className="container-page columns-1 gap-6 sm:columns-2 lg:columns-3"
          >
            {PROJECTS.map((project) => (
              <div key={project.id} className="mb-6 break-inside-avoid">
                <ProjectCard project={project} headingLevel={2} />
              </div>
            ))}
          </section>
        </main>
      </div>
      <div className="lg:hidden">
        <main>
          <MobileShell>
            <MobileProjectGrid />
          </MobileShell>
        </main>
        <Footer />
      </div>
    </>
  )
}
