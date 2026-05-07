'use client'

import { useState } from "react"
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Skills from "@/components/sections/Skills"
import Projects from "@/components/sections/Projects"
import Contact from "@/components/sections/Contact"
import UnderConstructionNotification from "@/components/UnderConstructionNotification"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import SplashScreen from "@/components/splash/splashScreen"

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)

  return (
    <>
      {showSplash && (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      )}

      <Header />
      <UnderConstructionNotification />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}