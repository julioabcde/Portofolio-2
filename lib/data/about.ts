export const STORY_BLOCKS = [
  {
    number: '01',
    heading: 'Where It Started',
    body: 'My interest in technology started during the COVID era, when digital platforms and technology adoption were rapidly accelerating across everyday life. Watching how software could connect people, solve practical problems, and reshape the way businesses operated sparked my curiosity to explore programming and software development more deeply.',
  },
  {
    number: '02',
    heading: 'Learning the Skills',
    body: 'To deepen my understanding of technology and software engineering, I pursued a Computer Science degree at BINUS University with a focus on Software Engineering. Through academic projects, research, and hands-on development experiences, I gradually built my skills in full stack development, mobile applications, UI/UX design, and system architecture while learning how to turn ideas into functional products.',
  },
  {
    number: '03',
    heading: 'My Experience',
    body: 'My professional journey started at Periksa Solusi Indonesia as a Front End Engineer Intern, where I handled 12 modules using a sprint-based development workflow. I was also entrusted with developing the “Skrining Awal Pasien IGD” feature, which manages patients’ initial emergency screening information. This experience strengthened my ability to work in a fast-paced environment while building scalable and maintainable front-end features for real-world healthcare systems.',
  },
] as const

export const TIMELINE = [
  {
    period: '2022 — Present',
    title: 'Binus University',
    sub: 'Computer Science',
    info: 'Studied Computer Science at BINUS University with a focus on Software Engineering, including full stack development, mobile applications, UI/UX design, and system architecture.',
  },
  {
    period: '2025 — 2026',
    title: 'Front End Developer',
    sub: 'Periksa Solusi Indonesia',
    info: 'Worked as a Front End Engineer Intern, handling 12 modules in sprint-based development and building the initial emergency patient screening feature.',
  },
  {
    period: 'Future',
    title: 'Coming Soon',
    sub: 'Contact Me!',
    info: 'Have a project in mind? Visit the Contact section to get in touch and discuss working together.',
  },
] as const

export const EXPERIENCE = [
  {
    company: TIMELINE[1].sub,
    title: 'Front End Engineer Intern',
    period: TIMELINE[1].period,
    description: TIMELINE[1].info,
    skills: ['Angular', 'TypeScript', 'RxJS', 'REST APIs'],
  },
] as const
