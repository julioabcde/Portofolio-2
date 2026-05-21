import { Project } from '@/types/project'

export const CARD_VW = 70
export const SIDE_PAD_VW = (100 - CARD_VW) / 2
export const GAP_VW = 4

export const CATEGORIES: Record<string, string> = {
  velocart: 'Point of Sales · Web App',
  portfolio: 'Personal Branding · Web',
  periksa: 'Healthcare · Dashboard',
  'project-4': 'Web Application',
}

export const PROJECTS: Project[] = [
  {
    id: 'vhotel',
    title: 'Vhotel',
    description:
      'A modern digital presence for a simulated hotel brand, built as a final assessment for Human and Computer Interaction.',
    images: [],
    summary:
      "Vhotel was a final assessment project for the Human and Computer Interaction course at BINUS University, where I designed a high-fidelity hotel website prototype in Figma and developed it into a functional website using HTML, CSS, and JavaScript. The project focused on creating a modern and user-friendly digital experience for a hotel booking platform.",
    type: 'Individual',
    impact:
      'This project strengthened my time management, adaptability, and problem-solving skills by requiring me to independently manage both the design and development process within a limited timeframe. It also improved my attention to detail in translating designs into responsive web interfaces.',
    learnings:
      'I learned that transforming a high-fidelity design into a real website is more challenging than it initially appears, as implementation often reveals better solutions than the original prototype. The project also deepened my understanding of front-end development, UI/UX consistency, and the importance of simplifying design decisions to improve user experience.',
    learningPoints: [
      'A prototype should be treated as a hypothesis rather than a fixed specification because implementation often uncovers improvements hidden during the design phase.',
      'Simplicity and restraint in UI design often create a better user experience than excessive visual effects.',
      'Structuring and naming components early helps maintain consistency and avoid repetitive design patterns.',
    ],
    year: '2023',
    role: 'UX Designer & Frontend',
    engagement: '1 Month',
    status: 'Course submitted',
    tags: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'velocart',
    title: 'Velocart',
    description:
      'A comprehensive Point of Sales system with inventory management, transaction processing, preorder functionality, and Market Basket Analysis.',
    images: ['/velocart.png', '/id.png', '/julio_hero.png'],
    summary:
      'Velocart is a web-based point of sales application developed as a final thesis project. The system integrates Market Basket Analysis to help identify purchasing patterns and support better product recommendation and sales strategies.',
    type: 'Group Project',
    impact:
      'This project improved my collaboration and communication skills through team-based full stack development while also strengthening my ability to design scalable application workflows. I contributed to both frontend and backend development, ensuring smooth integration between the system interface, database, and server deployment.',
    learnings:
      'Through this project, I learned new technologies such as Next.js and Tencent Cloud while deepening my understanding of full stack application architecture using Laravel and MySQL. I also gained hands-on experience in building responsive interfaces, managing API communication, optimizing database interactions, and deploying applications in a environment.',
    learningPoints: [
      'Full stack development requires strong coordination between frontend, backend, and deployment workflows to ensure system stability.',
      'Learning a new framework becomes easier when applied directly to a real-world project with clear objectives and constraints.',
      'Building data-driven features such as Market Basket Analysis helped me better understand how software can support business decision-making.',
    ],
    year: '2025',
    role: 'Product Designer & Full-stack',
    engagement: '5-6 Months',
    status: 'Live in production',
    tags: ['Next.js', 'TailwindCSS', 'Laravel', 'MySQL'],
    liveUrl: 'https://velocart-pos.vercel.app/login',
  },
  {
    id: 'pocketree',
    title: 'Pocketree',
    description:
      'A personal-finance app that frames money as a tree you tend — categories grow, leaks prune, healthy habits compound.',
    images: [],
    summary:
      'Pocketree is a mobile financial management application built to explore Flutter development while addressing personal finance management in a more practical way. One of its core additional features is split bill functionality, inspired by the observation of how services like LINE SplitBill disappeared while GoPay Split Bill continued to remain relevant for users.',
    type: 'Self-initiated',
    impact:
      'This project strengthened my ability to independently design and develop cross-platform mobile applications while combining technical implementation with product-oriented thinking. It also improved my understanding of how user behavior and real-world problems can shape application features and functionality.',
    learnings:
      'Through Pocketree, I learned Flutter development fundamentals, state management concepts, and how to build responsive mobile interfaces with a smoother user experience. I also gained deeper insight into feature prioritization, product sustainability, and the importance of designing features that solve recurring everyday problems rather than simply following trends.',
    learningPoints: [
      'Technical implementation becomes more meaningful when features are grounded in real user behavior and habits.',
      'Cross-platform development with Flutter requires balancing UI consistency, performance, and maintainable application structure.',
      'Product longevity often depends on whether a feature solves a recurring practical need rather than serving as a temporary convenience.',
    ],
    year: '2026',
    role: 'Full Stack Developer',
    engagement: '3 Months',
    status: 'Closed beta',
    tags: ['Flutter', 'Dart', 'PostgreSQL'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'dimsummaster',
    title: 'DimsumMaster',
    description:
      'An ordering and kitchen-display system for a family-owned dimsum restaurant — built to match the cart-to-table rhythm of real service.',
    images: [],
    summary:
      'DimSumMaster is a mobile food ordering application developed as the final project for the Mobile Programming course at BINUS University. The application allows users to browse and order restaurant menu items digitally, while also providing an admin interface for managing orders and menu data.',
    type: 'Group Project',
    impact:
      'This project improved my collaboration and mobile development skills through team-based application development. I was responsible for developing both the admin and user interfaces, which strengthened my understanding of user flow design and role-based application features.',
    learnings:
      'Through this project, I gained hands-on experience in Android application development using Java and Firebase Realtime Database. I also learned how to design responsive mobile interfaces, manage real-time data synchronization, and create separate workflows for different types of users within a single application.',
    learningPoints: [
      'Designing applications for multiple user roles requires clear workflow separation and interface consistency.',
      'Real-time databases improve user experience but require careful data structure planning and synchronization handling.',
      'Mobile application usability depends heavily on intuitive navigation and responsive interaction design.',
    ],
    year: '2024',
    role: 'Full Stack Developer',
    engagement: '4 Months',
    status: 'Closed beta',
    tags: ['Android Studio', 'Java', 'Firebase Realtime Database'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'gymme',
    title: 'GymMe',
    description:
      'A gym supplement store and management system where members browse and order supplements while admins manage inventory, transaction queues, and sales reports.',
    images: [],
    summary:
      'GymMe is an ASP.NET Web Forms application built to deepen my understanding of enterprise web development on the .NET stack. It covers the full retail flow for a gym supplement business. Registration and login, browsing and ordering supplements, cart management, a transaction queue for processing orders, and sales reporting. The project was an exercise in applying a strict layered architecture, separating concerns across Controller, Handler, Factory, and Repository layers on top of an Entity Framework data model.',
    type: 'Group Project',
    impact:
      'This project strengthened my ability to design and implement a maintainable, layered web application that handles real transactional flows rather than isolated CRUD screens. It gave me hands-on experience translating a business process — ordering, queuing, and reporting — into clean separations of responsibility across the codebase.',
    learnings:  
      'Through GymMe I learned ASP.NET Web Forms fundamentals, working with Entity Framework as an ORM, and structuring an application into Controller, Handler, Factory, and Repository layers. I also gained practical insight into modeling transactional data with headers and detail records, and into building admin-facing tooling like inventory management and transaction reporting.',
    learningPoints: [
      'A disciplined layered architecture keeps business logic, data access, and presentation independently testable and easier to extend.',
      'Transactional features like carts and order queues require careful data modeling. Separating transaction headers from line-item details keeps records consistent.',
      'Building both customer-facing and admin-facing flows in one system highlights how different user roles shape interface and validation needs.',
    ],
    year: '2026',
    role: 'Full Stack Developer',
    engagement: '1 Month',
    status: 'Completed',
    tags: ['C#', 'ASP.NET Web Forms', 'Entity Framework', 'SQL Server'],
    liveUrl: '#',
    repoUrl: '#',
  },
    {
    id: 'stellar',
    title: 'Stellar',
    description:
      'An interactive event management platform focused on scheduling, registration, and attendee management.',
    images: [],
    summary:
      'Stellar is a desktop-based event management application developed using JavaFX and Eclipse. I worked as a full-stack developer, handling both the user interface and application logic to create a responsive and user-friendly system for managing events efficiently.',
    type: 'Group Project',
    impact:
  'Strengthened my problem-solving, adaptability, and ownership mindset while handling both interface development and application logic in a collaborative environment.',
    learnings:
      'This project strengthened my understanding of full-stack desktop application development using JavaFX. I also learned how to structure application logic more effectively while balancing functionality, responsiveness, and maintainability.',
    learningPoints: [
      'Building responsive desktop interfaces with JavaFX.',
      'Managing frontend interaction alongside backend application logic.',
      'Designing maintainable systems for event management workflows.',
    ],
    year: '2024',
    role: 'Full Stack Developer',
    engagement: '1 Month',
    status: 'Completed',
    tags: ['Java', 'JavaFX', 'Eclipse'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'beascholar',
    title: 'BeaScholar',
    description:
      'A scholarship platform that helps students discover and apply for scholarships more efficiently.',
    images: [],
    summary:
      'BeaScholar is a web application designed to simplify scholarship searching and application processes for students. I contributed as a frontend developer using React JS, focusing on building intuitive interfaces and improving the overall user experience.',
    type: 'Group Project',
    impact:
      'Working on BeaScholar improved my attention to user experience and strengthened my collaboration skills during frontend development. The project also taught me how to communicate ideas more effectively and stay consistent when building reusable interfaces.',
    learnings:
      'Through this project, I improved my frontend development skills using React JS and learned how to create reusable UI components with better state management. I also gained experience integrating frontend features with backend services and Firebase.',
    learningPoints: [
      'Developing responsive interfaces using React JS.',
      'Creating reusable and maintainable frontend components.',
      'Integrating frontend applications with Firebase services.',
    ],
    year: '2024',
    role: 'Frontend Developer',
    engagement: 'Team project',
    status: 'Completed',
    tags: ['React JS', 'Firebase', 'JSX', 'Go'],
    liveUrl: '#',
    repoUrl: '#',
  }
]

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find(p => p.id === id)
}
