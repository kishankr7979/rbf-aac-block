import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const rawMaterials = ['Cement', 'Lime', 'Fly Ash', 'Gypsum', 'Water', 'Aluminium Powder']

const whyRbf = [
  'High quality manufacturing',
  'Direct factory supply',
  'Competitive pricing',
  'Reliable delivery',
]

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container-site grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">What is AAC Block?</span>
          <h2 className="section-title">A smarter building material for modern construction</h2>
          <p className="mt-5 text-slate-600 leading-relaxed">
            AAC (Autoclaved Aerated Concrete) is an advanced, lightweight and eco-friendly
            building material. It is produced from fly ash, cement, lime, gypsum and water,
            and cured with high-pressure steam in an autoclave - giving every block a
            smooth, even finish with consistent dimensions.
          </p>
          <div className="mt-6">
            <div className="text-sm font-semibold text-brand-900 uppercase tracking-wider mb-3">
              Raw materials
            </div>
            <div className="flex flex-wrap gap-2">
              {rawMaterials.map((m) => (
                <span key={m} className="bg-brand-50 text-brand-700 border border-brand-100 text-sm font-medium px-3 py-1.5 rounded-full">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card p-8"
        >
          <h3 className="font-display font-bold text-xl text-brand-900">Why choose RBF?</h3>
          <ul className="mt-5 space-y-4">
            {whyRbf.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent-500 mt-0.5 shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-lg bg-brand-50 border border-brand-100 p-4 text-sm text-brand-800 leading-relaxed">
            RBF AAC Blocks are manufactured at our plant in Rajatalab, Varanasi and supplied
            directly to construction sites.
          </div>
        </motion.div>
      </div>
    </section>
  )
}
