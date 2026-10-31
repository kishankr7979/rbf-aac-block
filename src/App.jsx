import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import About from './components/About'
import WhyAAC from './components/WhyAAC'
import Products from './components/Products'
import Comparison from './components/Comparison'
import BlockStudio from './components/BlockStudio'
import Process from './components/Process'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <WhyAAC />
        <Products />
        <Comparison />
        <BlockStudio />
        <Process />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
