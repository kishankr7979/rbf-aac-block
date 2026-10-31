import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Package, ArrowRight, CheckCircle } from 'lucide-react'

const products = [
  {
    thickness: '75mm',
    label: 'Partition Pro',
    useCase: 'Interior partitions & bathroom walls',
    weight: '7.5 kg',
    blocksPerCBM: '111',
    color: 'from-sky-500 to-blue-600',
    borderColor: 'border-sky-500/30',
    glowColor: 'shadow-sky-500/20',
    features: ['Ultra-lightweight', 'Easy to cut', 'Perfect for apartments', 'Quick installation'],
  },
  {
    thickness: '100mm',
    label: 'Standard Block',
    useCase: 'Interior & light exterior walls',
    weight: '9.5 kg',
    blocksPerCBM: '83',
    color: 'from-amber-500 to-orange-600',
    borderColor: 'border-amber-500/40',
    glowColor: 'shadow-amber-500/25',
    features: ['Most popular size', 'Versatile use', 'Great insulation', 'Cost-effective'],
    popular: true,
  },
  {
    thickness: '150mm',
    label: 'Structural Block',
    useCase: 'External & load-bearing walls',
    weight: '14 kg',
    blocksPerCBM: '55',
    color: 'from-emerald-500 to-teal-600',
    borderColor: 'border-emerald-500/30',
    glowColor: 'shadow-emerald-500/20',
    features: ['High strength', 'Weather resistant', 'Excellent thermal barrier', 'Fire rated 2hr'],
  },
  {
    thickness: '200mm',
    label: 'Heavy Duty Block',
    useCase: 'Industrial & heavy structural walls',
    weight: '18.5 kg',
    blocksPerCBM: '41',
    color: 'from-purple-500 to-violet-600',
    borderColor: 'border-purple-500/30',
    glowColor: 'shadow-purple-500/20',
    features: ['Maximum fire rating 4hr', 'Superior insulation', 'Industrial grade', 'High durability'],
  },
]

function BlockSVG({ thickness, color }) {
  const width = parseInt(thickness)
  const svgWidth = 40 + width * 0.5

  return (
    <svg viewBox={`0 0 ${svgWidth + 60} 80`} fill="none" className="w-full h-16">
      {/* Main block face */}
      <rect x="10" y="15" width={svgWidth} height="40" rx="4" className="fill-current opacity-20" style={{ color: 'white' }} />
      <rect x="10" y="15" width={svgWidth} height="40" rx="4" fill="none" stroke="white" strokeWidth="1.5" opacity="0.6" />
      {/* Top face */}
      <path d={`M10 15 L${10 + 12} 5 L${10 + svgWidth + 12} 5 L${10 + svgWidth} 15 Z`}
        fill="white" opacity="0.15" />
      {/* Side face */}
      <path d={`M${10 + svgWidth} 15 L${10 + svgWidth + 12} 5 L${10 + svgWidth + 12} 45 L${10 + svgWidth} 55 Z`}
        fill="white" opacity="0.1" />
      {/* Pores */}
      {[0, 1, 2].map(i => (
        <circle key={i} cx={20 + i * (svgWidth / 3.5)} cy="35" r="5" fill="black" opacity="0.25" />
      ))}
      {/* Dimension label */}
      <text x={10 + svgWidth / 2} y={70} textAnchor="middle" fill="white" fontSize="9" opacity="0.7" fontFamily="Inter">
        {thickness}
      </text>
      {/* Arrows for thickness */}
      <line x1="5" y1="15" x2="5" y2="55" stroke="white" strokeWidth="1" opacity="0.4"/>
      <line x1="3" y1="15" x2="7" y2="15" stroke="white" strokeWidth="1" opacity="0.4"/>
      <line x1="3" y1="55" x2="7" y2="55" stroke="white" strokeWidth="1" opacity="0.4"/>
    </svg>
  )
}

export default function Products() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="products" ref={ref} className="py-24 bg-[#0b1323] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6">
            <Package className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-semibold">Our Products</span>
          </div>
          <h2 className="section-title mb-4">
            Standard Block{' '}
            <span className="text-gradient">Sizes & Grades</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            All blocks are 600mm × 200mm in face dimensions. Available in 4 thickness grades to suit every construction requirement. Custom sizes available for bulk orders.
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.thickness}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`relative group rounded-2xl border ${product.borderColor} bg-white/5 backdrop-blur-sm overflow-hidden
                hover:shadow-xl ${product.glowColor} hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Popular badge */}
              {product.popular && (
                <div className="absolute top-3 right-3 bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full z-10">
                  Most Popular
                </div>
              )}

              {/* Gradient header */}
              <div className={`bg-gradient-to-br ${product.color} p-6 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 grid-pattern" />
                <div className="relative">
                  <BlockSVG thickness={product.thickness} color={product.color} />
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-4">
                  <h3 className="font-display font-bold text-white text-lg mb-1">{product.label}</h3>
                  <p className="text-xs text-slate-400 mb-3">{product.useCase}</p>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    <div className="bg-white/5 rounded-lg p-2.5 text-center">
                      <div className="text-xs text-slate-500 mb-0.5">Size</div>
                      <div className="text-xs font-semibold text-white">600×200×{product.thickness}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2.5 text-center">
                      <div className="text-xs text-slate-500 mb-0.5">Weight</div>
                      <div className="text-sm font-semibold text-white">{product.weight}</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2.5 text-center col-span-2">
                      <div className="text-xs text-slate-500 mb-0.5">Blocks per cu. meter</div>
                      <div className="text-lg font-bold text-amber-400">{product.blocksPerCBM} <span className="text-sm font-normal text-slate-400">blocks/m³</span></div>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-5">
                    {product.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-white/10 text-sm font-semibold text-white hover:bg-white/10 hover:border-amber-500/40 transition-all group/btn"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-10 text-slate-500 text-sm"
        >
          All blocks conform to <span className="text-amber-400 font-medium">IS 2185 Part 3</span> specifications.
          Custom sizes & bulk orders available — <a href="#contact" className="text-amber-400 hover:underline">Contact us</a> for details.
        </motion.div>
      </div>
    </section>
  )
}
