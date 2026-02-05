'use client'

import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { initAOS } from '@/lib/aos'
import LightRays from '../reactbits/LightRays'

export default function SplashScreen() {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        // const hasSeenSplash = sessionStorage.getItem('hasSeenSplash')

        // if (hasSeenSplash) {
        //   setVisible(false)
        //   return
        // }

        // sessionStorage.setItem('hasSeenSplash', 'true')

        initAOS()

        const timer = setTimeout(() => {
            setVisible(false)
            AOS.refreshHard()
        }, 2400)

        return () => clearTimeout(timer)
    }, [])

    if (!visible) return null

    return (
        /**
         * <section>
         * - Standalone intro/splash content
         * - Not part of main document flow
         */
        <section
            aria-label="Intro splash screen"
            className="fixed inset-0 z-[9999] overflow-hidden bg-[#00072D]"
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
            >
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#ffffff"
                    raysSpeed={1}
                    lightSpread={0.5}
                    rayLength={3}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0}
                    distortion={0}
                    className="custom-rays"
                    pulsating={false}
                    fadeDistance={1}
                    saturation={1}
                />
            </div>
            {/**
             * <div>
             * - Layout-only container
             * - No semantic meaning required here
             */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center">
                <div className="text-center space-y-6">
                    {/**
                     * <h1>
                     * - Primary heading (identity)
                     */}
                    <h1 className="flex justify-center gap-4 text-5xl font-semibold">
                        <span
                            data-aos="fade-right"
                            data-aos-delay="0"
                            className="text-white"
                        >
                            Hello
                        </span>

                        <span
                            data-aos="fade-down"
                            data-aos-delay="250"
                            className="text-primary"
                        >
                            World
                        </span>
                    </h1>

                    {/**
                     * <h2>
                     * - Secondary heading (context)
                     */}
                    <h2 className="flex justify-center gap-4 text-3xl font-normal">
                        <span
                            data-aos="fade-up"
                            data-aos-delay="500"
                            className="text-slate-400"
                        >
                            Welcome to
                        </span>

                        <span
                            data-aos="fade-left"
                            data-aos-delay="750"
                            className="text-white font-semibold"
                        >
                            Julio's Portfolio
                        </span>
                    </h2>
                </div>
            </div>
        </section>
    )
}
