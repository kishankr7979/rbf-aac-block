import { motion } from 'framer-motion'
import { Feather, Clock, Thermometer, VolumeX, Flame, Leaf } from 'lucide-react'

const benefits = [
  {
    icon: Feather,
    title: 'Lightweight',
    description: 'Much lighter than red bricks, reducing dead load on the structure and easing handling on site.',
  },
  {
    icon: Clock,
    title: 'Faster Construction',
    description: 'Large 600 x 200 mm faces mean fewer blocks to lay, saving time and labour on every wall.',
  },
  {
    icon: Thermometer,
    title: 'Heat Insulation',
    description: 'Thermal conductivity of just 0.10 - 0.14 W/mK keeps interiors cooler and lowers energy bills.',
  },
  {
    icon: VolumeX,
    title: 'Sound Proof',
    description: 'The porous aerated structure absorbs sound, keeping indoor spaces quieter.',
  },
  {
    icon: Flame,
    title: 'Fire Resistant',
    description: 'Non-combustible blocks with fire resistance up to 4 hours for added safety.',
  },
  {
    icon: Leaf,
    title: 'Eco Friendly',
    description: 'Made with fly ash, an industrial by-product, instead of topsoil-burning kiln bricks.',
  },
]

export default function WhyAAC() {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-slate-50">
      <div className="container-site">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-tag">Why use RBF AAC Blocks?</span>
          <h2 className="section-title">Built for builders who value speed and strength</h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="card p-6 hover:shadow-md hover:border-brand-200 transition-all"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-800 text-white">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-lg text-brand-900">{b.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
