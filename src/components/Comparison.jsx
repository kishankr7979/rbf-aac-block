import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, X } from 'lucide-react'

const params = [
  { param: 'Weight (per m²)', aac: '100–120 kg', brick: '300–360 kg', hollow: '200–240 kg' },
  { param: 'Compressive Strength', aac: '3–5 N/mm²', brick: '3.5–7 N/mm²', hollow: '4–6 N/mm²' },
  { param: 'Thermal Conductivity', aac: '0.16 W/mK ✓', brick: '0.81 W/mK ✗', hollow: '0.5 W/mK ~' },
  { param: 'Fire Rating', aac: 'Up to 4 hrs ✓', brick: '2–3 hrs ~', hollow: '1–2 hrs ~' },
  { param: 'Sound Insulation', aac: '45 dB ✓', brick: '35–40 dB ~', hollow: '35 dB ~' },
  { param: 'Water Absorption', aac: 'Low ✓', brick: 'High ✗', hollow: 'Medium ~' },
  { param: 'Construction Speed', aac: 'Fastest ✓', brick: 'Slowest ✗', hollow: 'Medium ~' },
  { param: 'Eco-Friendly', aac: '✓ Yes', brick: '✗ No', hollow: '~ Partial' },
  { param: 'Foundation Load', aac: 'Low ✓', brick: 'Very High ✗', hollow: 'Medium ~' },
  { param: 'Pest Resistant', aac: '✓ Yes', brick: '✗ No', hollow: '~ Partial' },
]

function CellBadge({ value }) {
  const isGood = value.includes('✓')
  const isBad = value.includes('✗')
  const text = value.replace('✓', '').replace('✗', '').replace('~', '').trim()

  return (
    <div className="flex items-center justify-center gap-1.5">
      {isGood && <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />}
      {isBad && <X className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />}
      {!isGood && !isBad && <div className="w-3.5 h-3.5 flex items-center justify-center text-slate-500 text-xs">~</div>}
      <span>{text}</span>
    </div>
  )
}

export default function Comparison() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 bg-[#0d1829] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-500/5 rounded-full blur-[120px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
            <svg className="w-4 h-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-purple-400 text-sm font-semibold">Comparison</span>
          </div>
          <h2 className="section-title mb-4">
            AAC vs Traditional{' '}
            <span className="text-gradient">Building Materials</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            See how RBF AAC Blocks outperform conventional red bricks and hollow concrete blocks across every key parameter.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="overflow-x-auto rounded-2xl border border-white/10 shadow-2xl shadow-black/30"
        >
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-slate-800/80">
                <th className="text-left px-6 py-4 text-slate-400 text-sm font-semibold border-b border-white/10">Parameter</th>
                <th className="px-6 py-4 text-center border-b border-white/10">
                  <div className="inline-flex flex-col items-center gap-1">
                    <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-slate-900 font-bold text-sm px-4 py-1.5 rounded-lg">
                      RBF AAC Block
                    </div>
                    <div className="text-xs text-amber-400 font-medium">Recommended ✓</div>
                  </div>
                </th>
                <th className="px-6 py-4 text-center border-b border-white/10 text-slate-400 text-sm font-semibold">Red Bricks</th>
                <th className="px-6 py-4 text-center border-b border-white/10 text-slate-400 text-sm font-semibold">Hollow Blocks</th>
              </tr>
            </thead>
            <tbody>
              {params.map((row, i) => (
                <tr
                  key={row.param}
                  className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-slate-900/40' : 'bg-slate-900/20'} hover:bg-slate-800/40 transition-colors`}
                >
                  <td className="px-6 py-4 text-slate-300 text-sm font-medium">{row.param}</td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-emerald-400 text-sm font-medium">
                      <CellBadge value={row.aac} />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center text-slate-400 text-sm">
                    <CellBadge value={row.brick} />
                  </td>
                  <td className="px-6 py-4 text-center text-slate-400 text-sm">
                    <CellBadge value={row.hollow} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-10"
        >
          <p className="text-slate-500 text-sm mb-6">
            Make the smart choice for your project. Switch to AAC and save on cost, time, and environment.
          </p>
          <a href="#studio" className="btn-primary">
            Calculate Your Savings →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
