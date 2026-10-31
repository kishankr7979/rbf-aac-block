import { motion } from 'framer-motion'
import { Beaker, Layers, Wind, PackageCheck } from 'lucide-react'

const steps = [
  {
    icon: Beaker,
    title: 'Batching & Mixing',
    description: 'Cement, lime, fly ash, gypsum, water and aluminium powder are measured and mixed to a precise slurry.',
  },
  {
    icon: Layers,
    title: 'Moulding & Cutting',
    description: 'The slurry rises in moulds, then is wire-cut into exact 600 x 200 mm blocks.',
  },
  {
    icon: Wind,
    title: 'Autoclave Curing',
    description: 'Blocks are cured with high-pressure steam in an autoclave, giving them their final strength.',
  },
  {
    icon: PackageCheck,
    title: 'Quality Check & Dispatch',
    description: 'Blocks are quality checked, then dispatched directly from our Rajatalab plant to your site.',
  },
]

export default function Process() {
  return (
    <section className="py-16 md:py-24 bg-brand-800">
      <div className="container-site">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-tag !text-accent-400">How it is made</span>
          <h2 className="section-title !text-white">From raw material to your site</h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="rounded-xl bg-brand-700/50 border border-brand-600/50 p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-500 text-white">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="font-display font-bold text-2xl text-brand-400/60">0{i + 1}</span>
              </div>
              <h3 className="mt-4 font-display font-semibold text-lg text-white">{s.title}</h3>
              <p className="mt-2 text-sm text-brand-100/80 leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
