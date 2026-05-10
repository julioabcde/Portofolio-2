import type { NavLink } from '@/components/layout/NavLinks'

export const NAV_LINKS: NavLink[] = [
  { id: 'home',     label: 'Home',     href: '#home' },
  { id: 'about',    label: 'About',    href: '#about' },
  { id: 'skills',   label: 'Skills',   href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact',  label: 'Contact',  href: '#contact' },
] as const
