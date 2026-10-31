import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    step: '01',
    title: 'Raw Material Sourcing',
    desc: 'We use fly ash (certified), ordinary Portland cement, lime, gypsum, and aluminum powder — all procured from verified suppliers for consistent quality.',
    color: 'from-sky-500 to-blue-600',
    icon: (
      <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
        <circle cx="30" cy="30" r="24" fill="currentColor" opacity="0.1"/>
        <rect x="15" y="25" width="30" height="20" rx="4" fill="currentColor" opacity="0.7"/>
        <path d="M20 25 L25 15 L35 15 L40 25" fill="currentColor" opacity="0.5"/>
        <circle cx="23" cy="38" r="3" fill="white" opacity="0.6"/>
        <circle cx="30" cy="38" r="3" fill="white" opacity="0.6"/>
        <circle cx="37" cy="38" r="3" fill="white" opacity="0.6"/>
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Mixing & Casting',
    desc: 'Ingredients are precisely measured and mixed. The slurry is poured into large steel molds. Aluminum reacts with lime to create millions of micro air bubbles, giving AAC its unique cellular structure.',
    color: 'from-amber-500 to-orange-600',
    icon: (
      <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
        <circle cx="30" cy="30" r="24" fill="currentColor" opacity="0.1"/>
        <rect x="18" y="28" width="24" height="18" rx="3" fill="currentColor" opacity="0.7"/>
        <path d="M25 28 C25 20 35 20 35 28" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        {[0,1,2,3,4,5].map(i => (
          <circle key={i} cx={20 + (i % 3) * 8} cy={33 + Math.floor(i/3) * 7} r="2.5" fill="white" opacity="0.5"/>
        ))}
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Pre-Curing',
    desc: 'The cast slurry rests for 3-4 hours in a temperature-controlled chamber until it achieves a semi-solid (green) state strong enough to be wire-cut without crumbling.',
    color: 'from-emerald-500 to-teal-600',
    icon: (
      <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
        <circle cx="30" cy="30" r="24" fill="currentColor" opacity="0.1"/>
        <rect x="15" y="22" width="30" height="22" rx="3" fill="currentColor" opacity="0.6"/>
        {[0,1,2,3].map(row => (
          [0,1,2].map(col => (
            <rect key={`${row}-${col}`} x={18+col*9} y={24+row*5} width="7" height="3.5" rx="0.5" fill="white" opacity="0.4"/>
          ))
        ))}
        {/* Timer icon */}
        <circle cx="44" cy="16" r="8" fill="currentColor" opacity="0.8"/>
        <circle cx="44" cy="16" r="5" fill="none" stroke="white" strokeWidth="1.5"/>
        <line x1="44" y1="13" x2="44" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="44" y1="16" x2="46" y2="18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Autoclaving',
    desc: 'Blocks enter high-pressure autoclave chambers at 180–200°C saturated steam for 8–12 hours. This cures them to full structural strength while locking in the cellular insulating structure.',
    color: 'from-red-500 to-rose-600',
    icon: (
      <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
        <circle cx="30" cy="30" r="24" fill="currentColor" opacity="0.1"/>
        {/* Autoclave cylinder */}
        <rect x="12" y="22" width="36" height="22" rx="11" fill="currentColor" opacity="0.7"/>
        <ellipse cx="12" cy="33" rx="4" ry="11" fill="currentColor" opacity="0.9"/>
        <ellipse cx="48" cy="33" rx="4" ry="11" fill="currentColor" opacity="0.5"/>
        {/* Steam */}
        {[0,1,2].map(i => (
          <path key={i} d={`M${22+i*8} 18 Q${24+i*8} 13 ${22+i*8} 10`}
            stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity={0.7-i*0.2}>
            <animate attributeName="opacity" values={`${0.7-i*0.2};0.1;${0.7-i*0.2}`} dur="2s" repeatCount="indefinite"/>
          </path>
        ))}
      </svg>
    ),
  },
  {
    step: '05',
    title: 'Quality Check & Dispatch',
    desc: 'Every batch undergoes rigorous testing — compressive strength, dimensional accuracy, density, and thermal conductivity are verified against IS 2185 Part 3 standards before dispatch.',
    color: 'from-purple-500 to-violet-600',
    icon: (
      <svg viewBox="0 0 60 60" fill="none" className="w-full h-full">
        <circle cx="30" cy="30" r="24" fill="currentColor" opacity="0.1"/>
        {/* Clipboard */}
        <rect x="17" y="18" width="26" height="28" rx="4" fill="currentColor" opacity="0.7"/>
        <rect x="23" y="14" width="14" height="8" rx="2" fill="currentColor" opacity="0.9"/>
        {/* Check marks */}
        {[0,1,2].map(i => (
          <g key={i} transform={`translate(0, ${i*7})`}>
            <path d={`M22 29 L26 33 L34 25`} stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
          </g>
        ))}
      </svg>
    ),
  },
]

export default function Process() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 bg-[#0b1323] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
            </svg>
            <span className="text-blue-400 text-sm font-semibold">Our Manufacturing Process</span>
          </div>
          <h2 className="section-title mb-4">
            From Raw Material to{' '}
            <span className="text-gradient">Precision Block</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Every RBF AAC block passes through a scientifically controlled 5-step process ensuring consistent quality, dimensional accuracy, and superior performance.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} p-3 mb-6 shadow-xl flex items-center justify-center text-white z-10`}>
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-slate-900 border border-amber-500 rounded-full flex items-center justify-center text-xs font-bold text-amber-400">
                    {i + 1}
                  </div>
                </div>

                <h3 className="font-display font-bold text-white text-base mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>

                {/* Arrow for mobile/tablet */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden mt-6 mb-2 text-amber-500 opacity-50">
                    <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-14"
        >
          <a href="#contact" className="btn-primary text-base px-8 py-4">
            Start Your Project With Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
