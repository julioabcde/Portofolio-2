'use client'
import { useSyncExternalStore } from 'react'

// Tailwind's existing lg breakpoint. The compact server snapshot keeps SSR readable.
export const DESKTOP_QUERY = '(min-width: 1024px)'
function subscribe(callback: () => void) {
  const query = window.matchMedia(DESKTOP_QUERY)
  query.addEventListener('change', callback)
  return () => query.removeEventListener('change', callback)
}
const getSnapshot = () => window.matchMedia(DESKTOP_QUERY).matches
const getServerSnapshot = () => false
export function useDesktop() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
