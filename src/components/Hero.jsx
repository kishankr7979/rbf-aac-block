import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight, Shield, Leaf, Zap } from 'lucide-react'

function AACBlockIllustration() {
  return (
    <svg viewBox="0 0 480 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background glow */}
      <ellipse cx="240" cy="320" rx="180" ry="40" fill="#f59e0b" opacity="0.1"/>

      {/* Main block stack - isometric view */}
      {/* Bottom row of blocks */}
      <g opacity="0.85">
        {/* Block 1 - bottom left */}
        <path d="M80 280 L200 280 L200 316 L80 316 Z" fill="#1e293b" stroke="#f59e0b" strokeWidth="1"/>
        <path d="M80 280 L60 260 L180 260 L200 280 Z" fill="#334155" stroke="#f59e0b" strokeWidth="1"/>
        <path d="M200 280 L180 260 L180 296 L200 316 Z" fill="#0f172a" stroke="#f59e0b" strokeWidth="1"/>
        {/* Block pores */}
        <circle cx="110" cy="298" r="6" fill="#0f172a" opacity="0.8"/>
        <circle cx="130" cy="298" r="6" fill="#0f172a" opacity="0.8"/>
        <circle cx="150" cy="298" r="6" fill="#0f172a" opacity="0.8"/>
        <circle cx="170" cy="298" r="6" fill="#0f172a" opacity="0.8"/>

        {/* Block 2 - bottom right */}
        <path d="M200 280 L320 280 L320 316 L200 316 Z" fill="#1e293b" stroke="#f59e0b" strokeWidth="1"/>
        <path d="M200 280 L180 260 L300 260 L320 280 Z" fill="#334155" stroke="#f59e0b" strokeWidth="1"/>
        <path d="M320 280 L300 260 L300 296 L320 316 Z" fill="#0f172a" stroke="#f59e0b" strokeWidth="1"/>
        <circle cx="230" cy="298" r="6" fill="#0f172a" opacity="0.8"/>
        <circle cx="250" cy="298" r="6" fill="#0f172a" opacity="0.8"/>
        <circle cx="270" cy="298" r="6" fill="#0f172a" opacity="0.8"/>
        <circle cx="290" cy="298" r="6" fill="#0f172a" opacity="0.8"/>

        {/* Block 3 - bottom far right */}
        <path d="M320 280 L400 280 L400 316 L320 316 Z" fill="#1e293b" stroke="#f59e0b" strokeWidth="1"/>
        <path d="M320 280 L300 260 L380 260 L400 280 Z" fill="#334155" stroke="#f59e0b" strokeWidth="1"/>
        <path d="M400 280 L380 260 L380 296 L400 316 Z" fill="#0f172a" stroke="#f59e0b" strokeWidth="1"/>
      </g>

      {/* Second row */}
      <g>
        {/* Block 1 - middle */}
        <path d="M120 244 L240 244 L240 280 L120 280 Z" fill="#f59e0b" stroke="#d97706" strokeWidth="1.5"/>
        <path d="M120 244 L100 224 L220 224 L240 244 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5"/>
        <path d="M240 244 L220 224 L220 260 L240 280 Z" fill="#b45309" stroke="#d97706" strokeWidth="1.5"/>
        {/* Pores on amber block */}
        <circle cx="150" cy="262" r="7" fill="#d97706" opacity="0.7"/>
        <circle cx="170" cy="262" r="7" fill="#d97706" opacity="0.7"/>
        <circle cx="190" cy="262" r="7" fill="#d97706" opacity="0.7"/>
        <circle cx="210" cy="262" r="7" fill="#d97706" opacity="0.7"/>

        {/* Block 2 - middle right */}
        <path d="M240 244 L360 244 L360 280 L240 280 Z" fill="#1e293b" stroke="#f59e0b" strokeWidth="1"/>
        <path d="M240 244 L220 224 L340 224 L360 244 Z" fill="#334155" stroke="#f59e0b" strokeWidth="1"/>
        <path d="M360 244 L340 224 L340 260 L360 280 Z" fill="#0f172a" stroke="#f59e0b" strokeWidth="1"/>
      </g>

      {/* Top single block - highlighted */}
      <g>
        <path d="M160 208 L280 208 L280 244 L160 244 Z" fill="#f59e0b" stroke="#fbbf24" strokeWidth="2"/>
        <path d="M160 208 L140 188 L260 188 L280 208 Z" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2"/>
        <path d="M280 208 L260 188 L260 224 L280 244 Z" fill="#d97706" stroke="#d97706" strokeWidth="2"/>
        {/* Pores */}
        <circle cx="185" cy="226" r="8" fill="#d97706" opacity="0.7"/>
        <circle cx="205" cy="226" r="8" fill="#d97706" opacity="0.7"/>
        <circle cx="225" cy="226" r="8" fill="#d97706" opacity="0.7"/>
        <circle cx="245" cy="226" r="8" fill="#d97706" opacity="0.7"/>
        {/* Shine */}
        <path d="M165 212 L240 212" stroke="white" strokeWidth="1.5" opacity="0.4" strokeLinecap="round"/>
      </g>

      {/* Labels / callouts */}
      {/* Lightweight label */}
      <line x1="295" y1="216" x2="350" y2="185" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4 2"/>
      <circle cx="295" cy="216" r="3" fill="#fbbf24"/>
      <rect x="352" y="168" width="98" height="36" rx="8" fill="#1e293b" stroke="#fbbf24" strokeWidth="1"/>
      <text x="401" y="183" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="600" fontFamily="Inter">LIGHTWEIGHT</text>
      <text x="401" y="196" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="Inter">600×200×100mm</text>

      {/* Eco label */}
      <line x1="100" y1="262" x2="50" y2="235" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 2"/>
      <circle cx="100" cy="262" r="3" fill="#10b981"/>
      <rect x="10" y="218" width="82" height="36" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1"/>
      <text x="51" y="233" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="600" fontFamily="Inter">ECO-FRIENDLY</text>
      <text x="51" y="246" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="Inter">IS 2185 Certified</text>

      {/* Thermal label */}
      <line x1="220" y1="188" x2="220" y2="140" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4 2"/>
      <circle cx="220" cy="188" r="3" fill="#60a5fa"/>
      <rect x="170" y="118" width="100" height="36" rx="8" fill="#1e293b" stroke="#60a5fa" strokeWidth="1"/>
      <text x="220" y="133" textAnchor="middle" fill="#60a5fa" fontSize="9" fontWeight="600" fontFamily="Inter">THERMAL</text>
      <text x="220" y="146" textAnchor="middle" fill="#94a3b8" fontSize="8" fontFamily="Inter">Excellent Insulation</text>

      {/* Floating particles */}
      <circle cx="60" cy="180" r="3" fill="#f59e0b" opacity="0.6">
        <animateTransform attributeName="transform" type="translate" values="0,0; 5,-10; 0,0" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="400" cy="200" r="4" fill="#10b981" opacity="0.5">
        <animateTransform attributeName="transform" type="translate" values="0,0; -5,-8; 0,0" dur="4s" repeatCount="indefinite"/>
      </circle>
      <circle cx="420" cy="260" r="2" fill="#60a5fa" opacity="0.6">
        <animateTransform attributeName="transform" type="translate" values="0,0; 8,-12; 0,0" dur="3.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="40" cy="300" r="3" fill="#fbbf24" opacity="0.5">
        <animateTransform attributeName="transform" type="translate" values="0,0; -4,-8; 0,0" dur="4.5s" repeatCount="indefinite"/>
      </circle>
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-[#0b1323]">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[120px] animate-blob-delayed" />
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-emerald-500/8 rounded-full blur-[100px] animate-blob-delayed-2" />
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-8"
            >
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-amber-400 text-sm font-semibold tracking-wide">IS 2185 Certified • Made in India</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6"
            >
              Build Stronger.{' '}
              <span className="text-gradient block">Smarter. Greener.</span>
              <span className="text-slate-200 text-3xl sm:text-4xl lg:text-5xl block mt-2">
                With RBF AAC Blocks
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
            >
              Precision-engineered Autoclaved Aerated Concrete blocks that cut construction time by <span className="text-amber-400 font-semibold">30%</span>, reduce structural load, and deliver superior thermal comfort — all at an unbeatable value.
            </motion.p>

            {/* Feature pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {[
                { icon: Shield, label: 'Fire Resistant', color: 'text-red-400' },
                { icon: Leaf, label: 'Eco-Friendly', color: 'text-emerald-400' },
                { icon: Zap, label: 'Faster Build', color: 'text-amber-400' },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-4 py-2">
                  <Icon className={`w-4 h-4 ${color}`} />
                  <span className="text-sm text-slate-300 font-medium">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#studio" className="btn-primary text-base px-8 py-4">
                Calculate My Blocks
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#contact" className="btn-outline text-base px-8 py-4">
                Request a Quote
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex items-center gap-6 text-slate-500 text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span>BIS Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span>Free Delivery*</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span>Bulk Discounts</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center animate-float"
          >
            <div className="absolute inset-0 bg-gradient-radial from-amber-500/15 to-transparent rounded-full blur-3xl" />
            <div className="relative w-full max-w-lg">
              <AACBlockIllustration />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </div>
    </section>
  )
}
