import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Feather, Flame, Thermometer, Leaf, TrendingDown, Clock } from 'lucide-react'

const benefits = [
  {
    icon: Feather,
    title: 'Ultra Lightweight',
    description: 'Up to 3x lighter than traditional red bricks, significantly reducing dead load on structure — saving up to 20% on foundation and structural steel costs.',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    border: 'border-amber-400/20',
  },
  {
    icon: Flame,
    title: '4-Hour Fire Rating',
    description: 'AAC blocks offer exceptional fire resistance with up to 4-hour ratings for 200mm walls, providing superior safety for buildings of all types.',
    color: 'text-red-400',
    bg: 'bg-red-400/10',
    border: 'border-red-400/20',
  },
  {
    icon: Thermometer,
    title: 'Thermal Insulation',
    description: 'Millions of air pockets within each block create natural thermal barriers, reducing HVAC energy consumption by up to 30% all year round.',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Made from fly ash (industrial waste), lime, and cement — no pollutants during production. Reduces carbon footprint compared to traditional bricks.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20',
  },
  {
    icon: TrendingDown,
    title: 'Cost Efficient',
    description: 'Lower transportation weight, reduced mortar usage (thin-bed), and fewer skilled workers needed — resulting in 15-25% overall construction cost savings.',
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    border: 'border-purple-400/20',
  },
  {
    icon: Clock,
    title: 'Faster Construction',
    description: 'Large block size (600×200mm) means fewer pieces to lay. Consistent dimensions reduce cutting waste. Build 30% faster than conventional methods.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
  },
]

function BuildingIllustration() {
  return (
    <svg viewBox="0 0 400 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-h-[480px]">
      {/* Background glow */}
      <ellipse cx="200" cy="400" rx="160" ry="30" fill="#f59e0b" opacity="0.1"/>

      {/* Building structure */}
      {/* Foundation */}
      <rect x="60" y="390" width="280" height="20" rx="4" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5"/>

      {/* Ground floor walls */}
      <rect x="60" y="310" width="120" height="80" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
      <rect x="220" y="310" width="120" height="80" fill="#1e293b" stroke="#334155" strokeWidth="1"/>

      {/* AAC block texture on walls */}
      {[0,1,2,3].map(row => (
        [0,1,2].map(col => (
          <rect key={`${row}-${col}`}
            x={65 + col * 37 + (row % 2 === 0 ? 0 : 18)}
            y={315 + row * 18}
            width="33" height="14" rx="2"
            fill="#0f172a" stroke="#f59e0b" strokeWidth="0.5" opacity="0.8"/>
        ))
      ))}

      {/* Door */}
      <rect x="155" y="330" width="90" height="60" rx="4" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5"/>
      <rect x="157" y="332" width="86" height="56" rx="3" fill="#0b1323"/>
      <circle cx="195" cy="362" r="4" fill="#f59e0b"/>

      {/* First floor */}
      <rect x="80" y="230" width="240" height="80" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
      {/* AAC block texture */}
      {[0,1,2,3].map(row => (
        [0,1,2,3,4,5].map(col => (
          <rect key={`f1-${row}-${col}`}
            x={85 + col * 37 + (row % 2 === 0 ? 0 : 18)}
            y={235 + row * 18}
            width="33" height="14" rx="2"
            fill="#0f172a" stroke="#334155" strokeWidth="0.5" opacity="0.6"/>
        ))
      ))}
      {/* Windows */}
      <rect x="95" y="245" width="60" height="40" rx="4" fill="#0f172a" stroke="#60a5fa" strokeWidth="1.5"/>
      <rect x="170" y="245" width="60" height="40" rx="4" fill="#0f172a" stroke="#60a5fa" strokeWidth="1.5"/>
      <rect x="245" y="245" width="60" height="40" rx="4" fill="#0f172a" stroke="#60a5fa" strokeWidth="1.5"/>
      {/* Window shine */}
      <line x1="97" y1="247" x2="107" y2="247" stroke="#60a5fa" strokeWidth="1" opacity="0.5"/>
      <line x1="172" y1="247" x2="182" y2="247" stroke="#60a5fa" strokeWidth="1" opacity="0.5"/>
      <line x1="247" y1="247" x2="257" y2="247" stroke="#60a5fa" strokeWidth="1" opacity="0.5"/>

      {/* Second floor */}
      <rect x="100" y="160" width="200" height="70" fill="#1e293b" stroke="#334155" strokeWidth="1"/>
      {[0,1,2,3].map(row => (
        [0,1,2,3].map(col => (
          <rect key={`f2-${row}-${col}`}
            x={105 + col * 46 + (row % 2 === 0 ? 0 : 23)}
            y={165 + row * 17}
            width="40" height="12" rx="2"
            fill="#0f172a" stroke="#f59e0b" strokeWidth="0.5" opacity="0.8"/>
        ))
      ))}
      {/* Windows */}
      <rect x="115" y="170" width="60" height="38" rx="4" fill="#0f172a" stroke="#60a5fa" strokeWidth="1.5"/>
      <rect x="225" y="170" width="60" height="38" rx="4" fill="#0f172a" stroke="#60a5fa" strokeWidth="1.5"/>

      {/* Roof */}
      <path d="M90 160 L200 100 L310 160 Z" fill="#f59e0b" opacity="0.9"/>
      <path d="M90 160 L200 100 L310 160" stroke="#d97706" strokeWidth="2" fill="none"/>
      {/* Roof highlight */}
      <path d="M140 138 L200 105 L260 138" stroke="white" strokeWidth="1.5" fill="none" opacity="0.3"/>

      {/* Chimney */}
      <rect x="190" y="88" width="20" height="30" rx="2" fill="#334155" stroke="#f59e0b" strokeWidth="1"/>

      {/* Eco indicators */}
      {/* Sun */}
      <circle cx="355" cy="80" r="25" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" strokeWidth="1"/>
      <circle cx="355" cy="80" r="15" fill="#f59e0b" opacity="0.5"/>
      {[0,1,2,3,4,5,6,7].map(i => (
        <line key={i}
          x1={355 + 20 * Math.cos(i * Math.PI / 4)}
          y1={80 + 20 * Math.sin(i * Math.PI / 4)}
          x2={355 + 27 * Math.cos(i * Math.PI / 4)}
          y2={80 + 27 * Math.sin(i * Math.PI / 4)}
          stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      ))}

      {/* Green leaf/tree */}
      <circle cx="45" cy="340" r="22" fill="#10b981" opacity="0.7"/>
      <circle cx="33" cy="352" r="16" fill="#10b981" opacity="0.6"/>
      <circle cx="57" cy="352" r="16" fill="#10b981" opacity="0.6"/>
      <rect x="42" y="358" width="6" height="25" rx="2" fill="#b45309"/>

      {/* Thermal waves */}
      {[0,1,2].map(i => (
        <path key={i}
          d={`M${320 + i*5} ${200 + i*15} Q${335 + i*5} ${195 + i*15} ${350 + i*5} ${200 + i*15}`}
          stroke="#f59e0b" strokeWidth="1.5" fill="none" opacity={0.6 - i*0.15} strokeLinecap="round">
          <animateTransform attributeName="transform" type="translate" values="0,0; 5,-5; 0,0" dur={`${2+i*0.5}s`} repeatCount="indefinite"/>
        </path>
      ))}
    </svg>
  )
}

export default function WhyAAC() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-us" ref={ref} className="py-24 bg-[#0d1829] relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
            <Leaf className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 text-sm font-semibold">Why Choose AAC?</span>
          </div>
          <h2 className="section-title mb-4">
            The Future of{' '}
            <span className="text-gradient">Construction</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            AAC (Autoclaved Aerated Concrete) blocks are revolutionizing the Indian construction industry with unmatched performance, sustainability, and economy.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center animate-float-delayed"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-radial from-amber-500/10 to-transparent rounded-full blur-2xl" />
              <BuildingIllustration />
            </div>
          </motion.div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
                  className={`card-glass group hover:scale-[1.02] transition-all duration-300`}
                >
                  <div className={`w-10 h-10 ${benefit.bg} ${benefit.border} border rounded-xl flex items-center justify-center mb-3`}>
                    <Icon className={`w-5 h-5 ${benefit.color}`} />
                  </div>
                  <h3 className="font-display font-semibold text-white text-base mb-1.5">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
