import HomeSections from '@/components/sections/HomeSections'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SplashScreen from '@/components/splash/splashScreen'
export default function Home() {
  return (
    <>
      <SplashScreen />
      <Header />
      <main id="main-content">
        <HomeSections />
      </main>
      <Footer />
    </>
  )
}
