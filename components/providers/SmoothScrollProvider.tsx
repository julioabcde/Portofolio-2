'use client'

import Lenis from "lenis"
import { useEffect } from "react"

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
    // https://www.npmjs.com/package/lenis
    useEffect(() => {
        /**
         * Accesibility first
         * Disable Lenis if user prefers reduced motion
         */
        const preferesReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (preferesReducedMotion) return

        // Initialize Lenis smooth scrolling
        const lenis = new Lenis({
            duration: 1.1,
            easing: (t: number) => 1 - Math.pow(1 - t, 3),
            smoothWheel: true,
        })

        let rafId: number

        const raf = (time: number) => {
            lenis.raf(time)
            rafId = requestAnimationFrame(raf)
        }

        rafId = requestAnimationFrame(raf)  

        return () => {
            cancelAnimationFrame(rafId)
            lenis.destroy()
        }
    }, [])

    return <>{children}</>
}