'use client'
import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
} from 'react'
import Lenis from 'lenis'
import { DESKTOP_QUERY } from '@/lib/hooks/useDesktop'
const LenisContext = createContext<Lenis | null>(null)
let current: Lenis | null = null
const listeners = new Set<() => void>()
const subscribe = (listener: () => void) => {
  listeners.add(listener)
  return () => {
    listeners.delete(listener)
  }
}
const snapshot = () => current
const serverSnapshot = () => null
function publish(value: Lenis | null) {
  current = value
  listeners.forEach((listener) => listener())
}
export function useLenis() {
  return useContext(LenisContext)
}
export default function LenisProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const lenis = useSyncExternalStore(subscribe, snapshot, serverSnapshot)
  useEffect(() => {
    const desktop = window.matchMedia(DESKTOP_QUERY)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    let instance: Lenis | null = null
    let rafId = 0
    function stop() {
      cancelAnimationFrame(rafId)
      instance?.destroy()
      instance = null
      publish(null)
    }
    function update() {
      stop()
      if (!desktop.matches || reduced.matches) return
      instance = new Lenis({
        duration: 1.35,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
      })
      publish(instance)
      function frame(time: number) {
        instance?.raf(time)
        rafId = requestAnimationFrame(frame)
      }
      rafId = requestAnimationFrame(frame)
    }
    update()
    desktop.addEventListener('change', update)
    reduced.addEventListener('change', update)
    return () => {
      desktop.removeEventListener('change', update)
      reduced.removeEventListener('change', update)
      stop()
    }
  }, [])
  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}
