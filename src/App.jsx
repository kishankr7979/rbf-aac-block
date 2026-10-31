import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import WhyAAC from './components/WhyAAC'
import Products from './components/Products'
import BlockStudio from './components/BlockStudio'
import Process from './components/Process'
import Comparison from './components/Comparison'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b1323]">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <WhyAAC />
        <Products />
        <BlockStudio />
        <Process />
        <Comparison />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
