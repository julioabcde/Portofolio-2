'use client'
import { useDesktop } from '@/lib/hooks/useDesktop'
import DesktopHero from './DesktopHero'
import MobileHero from './MobileHero'
export default function Hero() {
  return useDesktop() ? <DesktopHero /> : <MobileHero />
}
