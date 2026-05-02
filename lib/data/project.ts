import { Project } from '@/types/project'

export const PROJECTS: Project[] = [
  {
    id: 'velocart',
    title: 'VELOCART',
    description:
      'A comprehensive Point of Sales system with inventory management, transaction processing, preorder functionality, and Market Basket Analysis.',
    image: '/velocart.png',
    tags: ['Next.js', 'TailwindCSS', 'Laravel', 'MySQL'],
    liveUrl: 'https://velocart-pos.vercel.app/login',
    featured: true,
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description:
      'My personal portfolio website showcasing projects and skills, built with modern web technologies and semantic HTML.',
    image: '',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'periksa',
    title: 'Periksa.id Dashboard',
    description:
      'Healthcare reporting modules, dashboard widgets, and patient screening systems for hospital clients.',
    image: '',
    tags: ['React', 'TypeScript', 'REST API'],
    liveUrl: '#',
  },
  {
    id: 'project-4',
    title: 'Project Four',
    description:
      'A short description of another project you have worked on. Replace this placeholder with real content.',
    image: '',
    tags: ['React', 'Node.js', 'MongoDB'],
    repoUrl: '#',
  },
  
]
