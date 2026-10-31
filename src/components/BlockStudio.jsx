import { useState, useRef, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calculator, RefreshCw, ArrowRight, Layers, Weight, Box, Hammer } from 'lucide-react'
import { calculateBlocks, BLOCK_SIZES } from '../lib/blockCalculator'

const THICKNESSES = [75, 100, 150, 200]
const UNITS = ['ft', 'm']

// Live wall preview using SVG
function WallPreview({ length, height, thickness }) {
  const blockW = 60  // px per block (600mm)
  const blockH = 20  // px per block (200mm)
  const maxW = 480
  const maxH = 220

  const lengthM = parseFloat(length) || 0
  const heightM = parseFloat(height) || 0

  if (lengthM <= 0 || heightM <= 0) {
    return (
      <div className="flex items-center justify-center h-full text-slate-600 text-sm">
        Enter dimensions to see preview
      </div>
    )
  }

  // Scale to fit
  const blocksX = Math.max(1, Math.round(lengthM / 0.6))
  const blocksY = Math.max(1, Math.round(heightM / 0.2))

  const totalW = blocksX * blockW
  const totalH = blocksY * blockH

  const scale = Math.min(1, maxW / totalW, maxH / totalH)
  const scaledBW = blockW * scale
  const scaledBH = blockH * scale
  const svgW = Math.min(maxW, totalW * scale) + 2
  const svgH = Math.min(maxH, totalH * scale) + 2

  const displayBlocksX = Math.min(blocksX, Math.floor(maxW / scaledBW))
  const displayBlocksY = Math.min(blocksY, Math.floor(maxH / scaledBH))

  return (
    <div className="relative overflow-hidden rounded-xl bg-slate-900/50 flex items-center justify-center p-2">
      <svg width={svgW} height={svgH} viewBox={`0 0 ${svgW} ${svgH}`} style={{ maxWidth: '100%' }}>
        {Array.from({ length: displayBlocksY }).map((_, row) =>
          Array.from({ length: displayBlocksX }).map((_, col) => {
            const offset = row % 2 === 0 ? 0 : scaledBW / 2
            const x = 1 + col * scaledBW + offset
            const y = 1 + (displayBlocksY - 1 - row) * scaledBH
            const isPartial = x + scaledBW > svgW - 1
            const w = Math.min(scaledBW - 1, (svgW - 1) - x)
            if (w <= 0) return null
            return (
              <g key={`${row}-${col}`}>
                <rect
                  x={x} y={y} width={w} height={scaledBH - 1}
                  fill="#1e293b" stroke="#f59e0b" strokeWidth="0.5" rx="1"
                />
                {/* Pore circles */}
                {!isPartial && w > 12 && (
                  <>
                    <circle cx={x + w * 0.3} cy={y + scaledBH / 2} r={Math.max(1, scaledBH * 0.2)} fill="#0f172a" opacity="0.7"/>
                    <circle cx={x + w * 0.7} cy={y + scaledBH / 2} r={Math.max(1, scaledBH * 0.2)} fill="#0f172a" opacity="0.7"/>
                  </>
                )}
              </g>
            )
          })
        )}
      </svg>
      {/* Dimension labels */}
      <div className="absolute bottom-1 right-2 text-xs text-amber-400/70 font-mono">
        {lengthM}m × {heightM}m
      </div>
    </div>
  )
}

function ResultCard({ icon: Icon, label, value, unit, color }) {
  return (
    <div className={`bg-white/5 border ${color} rounded-xl p-4 flex items-center gap-3`}>
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${color.replace('border-', 'bg-').replace('/30', '/15')}`}>
        <Icon className={`w-5 h-5 ${color.replace('border-', 'text-').replace('/30', '')}`} />
      </div>
      <div>
        <div className="text-xs text-slate-500 mb-0.5">{label}</div>
        <div className="font-display font-bold text-white text-lg">
          {value} <span className="text-sm font-normal text-slate-400">{unit}</span>
        </div>
      </div>
    </div>
  )
}

export default function BlockStudio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [unit, setUnit] = useState('ft')
  const [length, setLength] = useState('')
  const [height, setHeight] = useState('')
  const [thickness, setThickness] = useState(100)
  const [openings, setOpenings] = useState('')

  const factor = unit === 'ft' ? 0.3048 : 1
  const lengthM = (parseFloat(length) || 0) * factor
  const heightM = (parseFloat(height) || 0) * factor

  const result = calculateBlocks({ length: lengthM, height: heightM, thickness, unit: 'm', openings })

  const reset = () => {
    setLength('')
    setHeight('')
    setOpenings('')
    setThickness(100)
  }

  const buildWhatsAppLink = () => {
    if (!result) return '#'
    const msg = `Hi RBF AAC Block! I need a quote for:\n- Wall: ${length} ${unit} × ${height} ${unit}\n- Thickness: ${thickness}mm\n- Blocks required: ${result.totalBlocks}\n- Volume: ${result.volumeCBM} m³\nPlease send me pricing details.`
    return `https://wa.me/918840693544?text=${encodeURIComponent(msg)}`
  }

  return (
    <section id="studio" ref={ref} className="py-24 bg-[#0d1829] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-semibold">Block Configuration Studio</span>
          </div>
          <h2 className="section-title mb-4">
            Calculate Your{' '}
            <span className="text-gradient">Block Requirements</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Enter your wall dimensions and instantly get accurate block count, volume, and weight estimates. Then request a tailored quote with one click.
          </p>
        </motion.div>

        {/* Studio Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/40">
            {/* Studio header bar */}
            <div className="bg-gradient-to-r from-amber-600 to-amber-500 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                </div>
                <span className="font-display font-bold text-slate-900 text-sm">RBF Block Studio™</span>
              </div>
              <button onClick={reset} className="flex items-center gap-1.5 bg-slate-900/20 hover:bg-slate-900/30 text-slate-900 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">
                <RefreshCw className="w-3 h-3" />
                Reset
              </button>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left: Inputs */}
                <div className="space-y-6">
                  {/* Unit toggle */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Measurement Unit</label>
                    <div className="flex bg-slate-800 rounded-xl p-1 w-fit">
                      {UNITS.map(u => (
                        <button
                          key={u}
                          onClick={() => setUnit(u)}
                          className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${
                            unit === u
                              ? 'bg-amber-500 text-slate-900 shadow-md'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          {u === 'ft' ? 'Feet (ft)' : 'Metres (m)'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Wall dimensions */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Wall Dimensions</label>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-slate-300 mb-1.5">Length ({unit})</label>
                        <input
                          type="number"
                          min="0"
                          step="0.5"
                          value={length}
                          onChange={e => setLength(e.target.value)}
                          placeholder={unit === 'ft' ? 'e.g. 20' : 'e.g. 6'}
                          className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-slate-300 mb-1.5">Height ({unit})</label>
                        <input
                          type="number"
                          min="0"
                          step="0.5"
                          value={height}
                          onChange={e => setHeight(e.target.value)}
                          placeholder={unit === 'ft' ? 'e.g. 10' : 'e.g. 3'}
                          className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Block thickness selector */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Block Thickness</label>
                    <div className="grid grid-cols-4 gap-2">
                      {THICKNESSES.map(t => (
                        <button
                          key={t}
                          onClick={() => setThickness(t)}
                          className={`relative py-3 px-2 rounded-xl border text-center transition-all ${
                            thickness === t
                              ? 'border-amber-500 bg-amber-500/15 text-amber-400'
                              : 'border-white/10 bg-slate-800 text-slate-400 hover:border-white/20'
                          }`}
                        >
                          <div className={`font-bold text-base ${thickness === t ? 'text-amber-400' : 'text-white'}`}>{t}</div>
                          <div className="text-xs mt-0.5">mm</div>
                          {thickness === t && (
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full flex items-center justify-center">
                              <div className="w-1.5 h-1.5 bg-white rounded-full" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                    <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                      <span className="text-amber-400">ℹ</span>
                      {BLOCK_SIZES[thickness]?.description}
                    </p>
                  </div>

                  {/* Openings (optional) */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                      Openings Area (m²) <span className="text-slate-600 font-normal normal-case">— Optional: doors, windows</span>
                    </label>
                    <input
                      type="number"
                      min="0"
                      step="0.1"
                      value={openings}
                      onChange={e => setOpenings(e.target.value)}
                      placeholder="e.g. 2.5"
                      className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all"
                    />
                  </div>
                </div>

                {/* Right: Preview + Results */}
                <div className="space-y-5">
                  {/* Wall preview */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Live Wall Preview</label>
                    <div className="h-48 rounded-xl bg-slate-800/50 border border-white/5 overflow-hidden flex items-center justify-center">
                      <WallPreview length={lengthM} height={heightM} thickness={thickness} />
                    </div>
                  </div>

                  {/* Results */}
                  {result ? (
                    <div className="space-y-3">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Calculation Results</div>
                      <div className="grid grid-cols-2 gap-3">
                        <ResultCard icon={Layers} label="Blocks Required" value={result.totalBlocks.toLocaleString('en-IN')} unit="blocks" color="border-amber-500/30" />
                        <ResultCard icon={Box} label="Volume" value={result.volumeCBM} unit="m³" color="border-blue-500/30" />
                        <ResultCard icon={Weight} label="Total Weight" value={result.totalWeightKg > 1000 ? result.totalWeightTons : result.totalWeightKg} unit={result.totalWeightKg > 1000 ? 'tons' : 'kg'} color="border-emerald-500/30" />
                        <ResultCard icon={Hammer} label="Mortar Bags" value={result.mortarBags} unit="bags (approx)" color="border-purple-500/30" />
                      </div>

                      <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 text-xs text-amber-300">
                        <strong className="text-amber-400">Note:</strong> Includes 5% standard wastage factor. Mortar estimate is approximate. Actual requirements may vary.
                      </div>

                      <a
                        href={buildWhatsAppLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full btn-primary py-3.5 text-sm"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Request Quote on WhatsApp
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-10 text-slate-600">
                      <Calculator className="w-12 h-12 mb-3 opacity-30" />
                      <p className="text-sm text-center">Enter wall length and height above<br/>to see your calculation results</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
