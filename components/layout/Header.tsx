'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import MobileMenu from './MobileMenu'
import { FlipEffect } from '@/components/ui/FlipEffect'
import { FlipEffects } from '../ui/Flip'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    // Prevent body scroll when menu open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [menuOpen])

    return (
        <>
            {/* 
                <header>
                - Global site header
                - Contains primary navigation controls
            */}
            <header className="fixed top-0 z-50 w-full">
                <div className="mx-auto max-w-6xl px-6">
                    {/* 
                        <nav>
                        - Primary navigation container
                    */}
                    <nav
                        aria-label="Primary navigation"
                        className="
                        flex h-16 items-center justify-between
                        bg-background/70 backdrop-blur-md
                        border-b border-border/50
                        "
                    >
                        {/* Logo / Brand */}
                        <a
                            href="#main"
                            className="text-lg font-semibold uppercase tracking-widest"
                        >
                            Julio
                        </a>

                        {/* Right controls */}
                        <div className="flex items-center gap-4">
                            {/* Availability status */}
                            <span className="flex items-center gap-2 text-md text-foreground">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                                </span>
                                Available to work
                            </span>

                            {/* Nationality / Location */}
                            <span className="hidden sm:flex items-center gap-2 text-md">
                                <Image
                                    src="/id.png"
                                    alt="Indonesia flag"
                                    width={14}
                                    height={12}
                                    className="rounded-sm border border-border opacity-80"
                                />
                                Indonesia
                            </span>

                            {/* Menu button */}
                            <button
                                type="button"
                                aria-haspopup="dialog"
                                aria-expanded={menuOpen}
                                aria-controls="mobile-menu"
                                aria-label="Open navigation menu"
                                onClick={() => setMenuOpen(true)}
                                className="
                                group
                                relative
                                overflow-hidden
                                rounded-full
                                border border-border
                                px-4 py-2
                                text-xs uppercase tracking-widest text-foreground
                                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary
                                "
                            >
                                <FlipEffect
                                    fillOnHover
                                    fillColor="bg-primary"
                                    fillTextColor="text-background"
                                    direction="vertical"
                                    duration={300}
                                    easing="ease-in-out"
                                >
                                    <span className="flex items-center gap-3">
                                        <span>Menu</span>
                                        {/* Hamburger Icon */}
                                        <span aria-hidden="true" className="flex flex-col justify-center gap-[5px]">
                                            <span className="block h-[2px] w-4 bg-current transition-transform duration-200" />
                                            <span className="block h-[2px] w-4 bg-current transition-transform duration-200" />
                                        </span>
                                    </span>
                                </FlipEffect>
                            </button>
                            // Parent must have: group relative overflow-hidden
                            <button className="group relative overflow-hidden px-6 py-2 border border-black">
                                <FlipEffects direction="vertical" flipContent="Hover!">
                                    Default
                                </FlipEffects>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Mobile / Overlay Menu */}
            <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    )
}
