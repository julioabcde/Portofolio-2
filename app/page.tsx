import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import SplashScreen from "@/components/SplashScreen";
import UnderConstructionNotification from "@/components/UnderConstructionNotification";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <UnderConstructionNotification />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
