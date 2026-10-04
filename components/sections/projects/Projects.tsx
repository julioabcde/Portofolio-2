'use client'
import dynamic from 'next/dynamic'
import { useDesktop } from '@/lib/hooks/useDesktop'
import MobileSelectedWorks from './MobileSelectedWorks'
const DesktopSelectedWorks = dynamic(() => import('./DesktopSelectedWorks'))
export default function Projects() {
  const desktop = useDesktop()
  return desktop ? <DesktopSelectedWorks /> : <MobileSelectedWorks />
}
