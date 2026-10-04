import type { NavLink } from '@/components/layout/NavLinks'

export const NAV_LINKS: NavLink[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
] as const

// Compact tab bar (Home covers every home section). Chat is a button rendered by MobileTabNav.
export const COMPACT_NAV_LINKS: NavLink[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'projects', label: 'Projects', href: '/projects' },
  { id: 'blog', label: 'Blog', href: '/blog' },
  { id: 'contact', label: 'Contact', href: '/#contact' },
]
