import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const sizes = [
  { thickness: '4"', dims: '600 x 200 x 100 mm', perCbm: '~83', bricks: '6', popular: true },
  { thickness: '5"', dims: '600 x 200 x 125 mm', perCbm: '~66', bricks: '8', popular: false },
  { thickness: '6"', dims: '600 x 200 x 150 mm', perCbm: '~55', bricks: '10', popular: true },
  { thickness: '8"', dims: '600 x 200 x 200 mm', perCbm: '~41', bricks: '12', popular: true },
  { thickness: '9"', dims: '600 x 200 x 225 mm', perCbm: '~37', bricks: '14', popular: false },
  { thickness: '10"', dims: '600 x 200 x 250 mm', perCbm: '~33', bricks: '16', popular: false },
]

const specs = [
  ['Raw Material', 'Cement, Lime, Fly Ash, Gypsum, Water & Aluminium Powder'],
  ['Compressive Strength', '3.5 - 5.0 N/mm²'],
  ['Dry Density', '500 - 650 kg/m³'],
  ['Thermal Conductivity', '0.10 - 0.14 W/mK'],
  ['Fire Resistance', 'Up to 4 Hours'],
  ['Water Absorption', '≤ 25%'],
  ['Finish', 'Smooth & Even'],
  ['Application', 'Internal Walls, External Walls, Partition Walls, Load Bearing Walls'],
]

export default function Products() {
  return (
    <section id="products" className="py-16 md:py-24">
      <div className="container-site">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-tag">Product Range</span>
          <h2 className="section-title">Sizes and specifications</h2>
          <p className="section-subtitle mt-4">
            Standard 600 x 200 mm face in six thicknesses for partition, external and
            load-bearing walls.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 card overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
              <h3 className="font-display font-semibold text-lg text-brand-900">Size Chart</h3>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium text-accent-700 bg-accent-50 border border-accent-200 px-2.5 py-1 rounded-full">
                <Star className="h-3 w-3 fill-current" /> Most used: 4" | 6" | 8"
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-brand-800 text-white text-left">
                    <th className="px-6 py-3 font-semibold">Thickness</th>
                    <th className="px-6 py-3 font-semibold">Size (L x H x W)</th>
                    <th className="px-6 py-3 font-semibold">Blocks per m³</th>
                    <th className="px-6 py-3 font-semibold">1 Block ≈ Red Bricks</th>
                  </tr>
                </thead>
                <tbody>
                  {sizes.map((s) => (
                    <tr key={s.thickness} className="border-t border-slate-100 hover:bg-brand-50/50">
                      <td className="px-6 py-3 font-semibold text-brand-900 whitespace-nowrap">
                        {s.thickness}
                        {s.popular && <Star className="inline h-3.5 w-3.5 ml-1.5 text-accent-500 fill-current" />}
                      </td>
                      <td className="px-6 py-3 text-slate-600 whitespace-nowrap">{s.dims}</td>
                      <td className="px-6 py-3 text-slate-600">{s.perCbm}</td>
                      <td className="px-6 py-3 text-slate-600">{s.bricks} bricks</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 card overflow-hidden"
          >
            <div className="px-6 py-4 border-b border-slate-200">
              <h3 className="font-display font-semibold text-lg text-brand-900">Product Specifications</h3>
            </div>
            <dl className="divide-y divide-slate-100">
              {specs.map(([k, v]) => (
                <div key={k} className="px-6 py-3 grid grid-cols-2 gap-4 text-sm">
                  <dt className="font-medium text-slate-500">{k}</dt>
                  <dd className="text-brand-900 font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="px-6 py-4 text-xs text-slate-500 leading-relaxed border-t border-slate-100 bg-slate-50">
              Suitability for load-bearing walls depends on the structural design. Confirm
              with your project structural engineer and the product specification before use.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
