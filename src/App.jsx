import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProofStrip from './components/ProofStrip'
import Intro from './components/Intro'
import ExperienceCards from './components/ExperienceCards'
import RoomsSection from './components/RoomsSection'
import Gallery from './components/Gallery'
import BookingInquiry from './components/BookingInquiry'
import WhyBookDirect from './components/WhyBookDirect'
import LocationSection from './components/LocationSection'
import Testimonials from './components/Testimonials'
import InstagramPreview from './components/InstagramPreview'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible'))
    }, { threshold: 0.12 })
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return <>
    <Navbar />
    <main>
      <Hero />
      <ProofStrip />
      <Intro />
      <ExperienceCards />
      <RoomsSection />
      <Gallery />
      <BookingInquiry />
      <WhyBookDirect />
      <LocationSection />
      <Testimonials />
      <InstagramPreview />
      <FinalCTA />
    </main>
    <Footer />
  </>
}
