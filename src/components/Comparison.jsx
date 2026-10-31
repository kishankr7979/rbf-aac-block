import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const rows = [
  { aspect: 'Weight', aac: 'Lightweight, easy to handle', brick: 'Heavy, higher dead load' },
  { aspect: 'Size & Joints', aac: 'Bigger size, fewer joints', brick: 'Small size, more joints' },
  { aspect: 'Thermal Insulation', aac: 'Better insulation', brick: 'Poor insulation' },
  { aspect: 'Sound Insulation', aac: 'Better sound absorption', brick: 'Less sound absorption' },
  { aspect: 'Plastering', aac: 'Smooth finish, less plaster', brick: 'Needs thicker plaster' },
  { aspect: 'Time & Cost', aac: 'Saves time and labour cost', brick: 'Slower, more labour' },
  { aspect: 'Fire Safety', aac: 'Fire resistant up to 4 hours', brick: 'Lower fire resistance' },
  { aspect: 'Environment', aac: 'Eco-friendly, uses fly ash', brick: 'Consumes topsoil, kiln-fired' },
]

export default function Comparison() {
  return (
    <section id="compare" className="py-16 md:py-24 bg-slate-50">
      <div className="container-site">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-tag">Make the switch</span>
          <h2 className="section-title">RBF AAC Blocks vs Red Bricks</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-12 card overflow-hidden max-w-4xl mx-auto"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left">
                  <th className="px-6 py-4 bg-slate-100 font-semibold text-slate-600 w-1/4"></th>
                  <th className="px-6 py-4 bg-brand-800 text-white font-semibold w-[37.5%]">RBF AAC Blocks</th>
                  <th className="px-6 py-4 bg-slate-200 text-slate-600 font-semibold w-[37.5%]">Red Bricks</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.aspect} className="border-t border-slate-100">
                    <td className="px-6 py-3.5 font-semibold text-brand-900 bg-slate-50">{r.aspect}</td>
                    <td className="px-6 py-3.5 text-slate-700">
                      <span className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                        {r.aac}
                      </span>
                    </td>
                    <td className="px-6 py-3.5 text-slate-500">
                      <span className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-400 mt-0.5 shrink-0" />
                        {r.brick}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
