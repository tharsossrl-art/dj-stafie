import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Services from './components/Services'
import MixPlayer from './components/MixPlayer'
import Gallery from './components/Gallery'
import AIEmployee from './components/AIEmployee'
import Booking from './components/Booking'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Services />
      <MixPlayer />
      <Gallery />
      <AIEmployee />
      <Booking />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
