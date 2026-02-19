import dynamic from 'next/dynamic'
import Navigation from './components/Navigation'
import Hero from './components/Hero'

// Lazy load below-the-fold components
const Services = dynamic(() => import('./components/Services'))
const MixPlayer = dynamic(() => import('./components/MixPlayer'))
const Gallery = dynamic(() => import('./components/Gallery'))
const AIEmployee = dynamic(() => import('./components/AIEmployee'))
const Booking = dynamic(() => import('./components/Booking'))
const Testimonials = dynamic(() => import('./components/Testimonials'))
const Contact = dynamic(() => import('./components/Contact'))
const Footer = dynamic(() => import('./components/Footer'))

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
