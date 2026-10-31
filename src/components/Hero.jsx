import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, CheckCircle } from 'lucide-react'

const trustPoints = ['Direct factory supply', 'Consistent 600 x 200 mm sizes', 'Rajatalab, Varanasi']

function BlockStack() {
  return (
    <svg viewBox="0 0 320 240" className="w-full h-auto" role="img" aria-label="Stack of AAC blocks">
      {/* bottom row */}
      <g>
        <rect x="30" y="170" width="120" height="50" rx="3" fill="#e8edf4" stroke="#b9c6da" strokeWidth="1.5" />
        <rect x="155" y="170" width="120" height="50" rx="3" fill="#dfe7f1" stroke="#b9c6da" strokeWidth="1.5" />
        {/* middle row, offset */}
        <rect x="92" y="115" width="120" height="50" rx="3" fill="#e8edf4" stroke="#b9c6da" strokeWidth="1.5" />
        <rect x="217" y="115" width="80" height="50" rx="3" fill="#dfe7f1" stroke="#b9c6da" strokeWidth="1.5" />
        {/* top */}
        <rect x="130" y="60" width="120" height="50" rx="3" fill="#eef2f8" stroke="#b9c6da" strokeWidth="1.5" />
        {/* pores */}
        {[
          [60, 195], [100, 188], [130, 200], [185, 192], [230, 200],
          [125, 140], [165, 132], [195, 144], [245, 138], [275, 146],
          [160, 85], [200, 78], [228, 88],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="4" fill="#c7d2e2" />
        ))}
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="top" className="pt-16 bg-gradient-to-b from-brand-50 via-white to-white">
      <div className="container-site py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-accent-50 text-accent-700 border border-accent-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-5">
            Future of Modern Construction
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-[3.4rem] leading-tight text-brand-900">
            Build Faster with <span className="text-accent-500">RBF AAC Blocks</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
            Lightweight, precision-engineered Autoclaved Aerated Concrete blocks that cut
            construction time and cost for builders, contractors and developers in
            Varanasi.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="tel:+918840693544" className="btn-primary">
              <Phone className="h-5 w-5" />
              Call for Enquiry
            </a>
            <a
              href="https://wa.me/918840693544"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <CheckCircle className="h-4 w-4 text-accent-500" />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="card p-8 bg-gradient-to-br from-white to-brand-50"
        >
          <BlockStack />
          <a
            href="https://maps.app.goo.gl/3hGTwc1PScFcqHtc9"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500 hover:text-brand-700 transition-colors"
          >
            <MapPin className="h-4 w-4 text-accent-500" />
            Jamuni - Jakkhini Road, Rajatalab, Varanasi 221305 · View on Google Maps
          </a>
        </motion.div>
      </div>
    </section>
  )
}
