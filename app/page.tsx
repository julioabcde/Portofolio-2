import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import UnderConstructionNotification from "@/components/UnderConstructionNotification";
import SplashScreen from "@/components/splash/splashScreen";

export default function Home() {
  return (
    <>
      <SplashScreen />
      {/* <Header /> */}
      {/* <Hero /> */}
      {/* <About /> */}
      {/* <Projects /> */}

      <UnderConstructionNotification />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
