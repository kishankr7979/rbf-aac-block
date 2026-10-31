import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Phone } from 'lucide-react'
import { calculateBlocks, BLOCK_SIZES, BRICK_EQUIVALENT } from '../lib/blockCalculator'

const THICKNESSES = Object.keys(BLOCK_SIZES)
const FT = 0.3048

const clamp = (v, min, max) => Math.min(max, Math.max(min, v))
const round05 = (v) => Math.round(v / 0.05) * 0.05
const toMeters = (v, unit) => (parseFloat(v) || 0) * (unit === 'ft' ? FT : 1)
const fromMeters = (m, unit) => (unit === 'ft' ? m / FT : m)
const fmt = (n, d = 2) => Number(n.toFixed(d)).toString()

/* ---------------- Isometric block preview ---------------- */

function IsoBlock({ thickness }) {
  const t = parseInt(thickness, 10)
  const d = 12 + ((t - 100) / 150) * 30 // 12px (100mm) .. 42px (250mm)
  const dx = d * 0.9
  const dy = d * 0.55
  const fx = 54
  const fy = 66
  const fw = 118
  const fh = 44
  const pores = [
    [58, 80], [90, 88], [120, 76], [148, 92], [74, 100], [108, 102], [140, 80],
  ]
  return (
    <svg viewBox="0 0 250 150" className="w-full h-auto" role="img" aria-label={`AAC block, 600 x 200 x ${t} mm`}>
      <polygon
        points={`${fx},${fy} ${fx + dx},${fy - dy} ${fx + fw + dx},${fy - dy} ${fx + fw},${fy}`}
        fill="#eef2f8" stroke="#b9c6da" strokeWidth="1.2"
      />
      <polygon
        points={`${fx + fw},${fy} ${fx + fw + dx},${fy - dy} ${fx + fw + dx},${fy + fh - dy} ${fx + fw},${fy + fh}`}
        fill="#dfe7f1" stroke="#b9c6da" strokeWidth="1.2"
      />
      <rect x={fx} y={fy} width={fw} height={fh} rx="2" fill="#f7fafd" stroke="#b9c6da" strokeWidth="1.2" />
      {pores.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.4" fill="#ccd7e6" />
      ))}
      <text x={fx + fw / 2} y={fy + fh + 18} textAnchor="middle" fontSize="11" fontFamily="Inter, sans-serif" className="fill-slate-500">600 mm</text>
      <text x={fx - 8} y={fy + fh / 2 + 4} textAnchor="end" fontSize="11" fontFamily="Inter, sans-serif" className="fill-slate-500">200 mm</text>
      <text x={fx + fw + dx / 2 + 8} y={fy - dy / 2 + 4} fontSize="11" fontWeight="600" fontFamily="Inter, sans-serif" className="fill-brand-700">{t} mm</text>
    </svg>
  )
}

/* ---------------- Interactive wall canvas ---------------- */

const VB_W = 640
const VB_H = 340
const PAD = { l: 52, r: 24, t: 26, b: 46 }

function WallCanvas({ lengthM, heightM, onResize }) {
  const svgRef = useRef(null)
  const dragRef = useRef(null)
  const dimsRef = useRef({ lengthM, heightM, scale: 0 })
  const [dragging, setDragging] = useState(null)

  if (lengthM <= 0 || heightM <= 0) {
    return (
      <div className="flex items-center justify-center h-64 rounded-lg bg-brand-50 border border-brand-100 text-slate-400 text-sm">
        Enter wall dimensions to build the wall
      </div>
    )
  }

  const availW = VB_W - PAD.l - PAD.r
  const availH = VB_H - PAD.t - PAD.b
  const cols = clamp(Math.ceil(lengthM / 0.6 - 1e-9), 1, 60)
  const rows = clamp(Math.ceil(heightM / 0.2 - 1e-9), 1, 40)
  const scale = Math.min(availW / lengthM, availH / heightM, 110)
  const wallW = lengthM * scale
  const wallH = heightM * scale
  const ox = PAD.l
  const oy = VB_H - PAD.b
  const bw = 0.6 * scale
  const bh = 0.2 * scale
  dimsRef.current = { lengthM, heightM, scale }

  const clientToVB = (e) => {
    const rect = svgRef.current.getBoundingClientRect()
    return {
      x: ((e.clientX - rect.left) / rect.width) * VB_W,
      y: ((e.clientY - rect.top) / rect.height) * VB_H,
    }
  }

  const startDrag = (e, dir) => {
    e.preventDefault()
    e.target.setPointerCapture(e.pointerId)
    dragRef.current = { dir, last: clientToVB(e) }
    setDragging(dir)
  }

  const onMove = (e) => {
    const d = dragRef.current
    if (!d) return
    const p = clientToVB(e)
    const { lengthM: l, heightM: h, scale: s } = dimsRef.current
    if (d.dir === 'x') {
      const next = round05(l + (p.x - d.last.x) / s)
      onResize(clamp(next, 0.6, 40), null)
    } else {
      const next = round05(h - (p.y - d.last.y) / s)
      onResize(null, clamp(next, 0.2, 10))
    }
    d.last = p
  }

  const endDrag = () => {
    dragRef.current = null
    setDragging(null)
  }

  const blocks = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c <= cols; c++) {
      const x = ox + c * bw + (r % 2 === 1 ? bw / 2 : 0)
      if (x >= ox + wallW - 0.5) continue
      const w = Math.min(bw, ox + wallW - x)
      const y = oy - (r + 1) * bh
      blocks.push({ x, y, w: Math.max(w - 1, 1), h: bh - 1, r, c })
    }
  }

  const rx = ox + wallW // right edge x
  const ty = oy - wallH // top edge y

  return (
    <div className="relative rounded-lg bg-brand-50 border border-brand-100 p-2">
      <svg
        ref={svgRef}
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        className="w-full h-auto select-none"
        style={{ touchAction: 'pan-y' }}
        role="img"
        aria-label={`Illustrative wall, ${fmt(lengthM)} metres long and ${fmt(heightM)} metres high, built from ${cols} by ${rows} block courses`}
      >
        {/* wall blocks, laid course by course from the bottom */}
        <g key={`${cols}x${rows}`}>
          {blocks.map((b) => (
            <rect
              key={`${b.r}-${b.c}`}
              x={b.x}
              y={b.y}
              width={b.w}
              height={b.h}
              rx="1"
              fill="#ffffff"
              stroke="#84aad7"
              strokeWidth="0.75"
              style={
                dragging
                  ? undefined
                  : {
                      animation: 'block-in 0.4s ease both',
                      animationDelay: `${Math.min(b.r * 55 + b.c * 10, 900)}ms`,
                    }
              }
            />
          ))}
        </g>

        {/* dimension lines */}
        <line x1={ox} y1={oy + 22} x2={ox + wallW} y2={oy + 22} stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 3" />
        <line x1={ox} y1={oy + 16} x2={ox} y2={oy + 28} stroke="#94a3b8" strokeWidth="1" />
        <line x1={ox + wallW} y1={oy + 16} x2={ox + wallW} y2={oy + 28} stroke="#94a3b8" strokeWidth="1" />
        <text x={ox + wallW / 2} y={oy + 38} textAnchor="middle" fontSize="12" fontWeight="600" fontFamily="Inter, sans-serif" className="fill-brand-800">
          {fmt(lengthM)} m
        </text>
        <line x1={ox - 22} y1={oy} x2={ox - 22} y2={oy - wallH} stroke="#94a3b8" strokeWidth="1" strokeDasharray="4 3" />
        <line x1={ox - 28} y1={oy} x2={ox - 16} y2={oy} stroke="#94a3b8" strokeWidth="1" />
        <line x1={ox - 28} y1={oy - wallH} x2={ox - 16} y2={oy - wallH} stroke="#94a3b8" strokeWidth="1" />
        <text
          x={ox - 32}
          y={oy - wallH / 2}
          textAnchor="middle"
          fontSize="12"
          fontWeight="600"
          fontFamily="Inter, sans-serif"
          className="fill-brand-800"
          transform={`rotate(-90 ${ox - 32} ${oy - wallH / 2})`}
        >
          {fmt(heightM)} m
        </text>

        {/* drag handle: length (right edge) */}
        <g
          data-testid="handle-x"
          onPointerDown={(e) => startDrag(e, 'x')}
          onPointerMove={onMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          style={{ cursor: 'ew-resize', touchAction: 'none' }}
        >
          <title>Drag to change wall length</title>
          <circle cx={rx} cy={oy - wallH / 2} r="36" fill="transparent" />
          <circle cx={rx} cy={oy - wallH / 2} r="17" fill={dragging === 'x' ? '#ffe8d3' : '#fff5ec'} />
          <circle cx={rx} cy={oy - wallH / 2} r="11" fill="#ffffff" stroke="#f58220" strokeWidth="2" />
          <path
            d={`M ${rx - 4.5} ${oy - wallH / 2} h9 M ${rx + 2.5} ${oy - wallH / 2 - 3} l3 3 l-3 3 M ${rx - 2.5} ${oy - wallH / 2 - 3} l-3 3 l3 3`}
            stroke="#f58220" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
          />
        </g>

        {/* drag handle: height (top edge) */}
        <g
          data-testid="handle-y"
          onPointerDown={(e) => startDrag(e, 'y')}
          onPointerMove={onMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          style={{ cursor: 'ns-resize', touchAction: 'none' }}
        >
          <title>Drag to change wall height</title>
          <circle cx={ox + wallW / 2} cy={ty} r="36" fill="transparent" />
          <circle cx={ox + wallW / 2} cy={ty} r="17" fill={dragging === 'y' ? '#ffe8d3' : '#fff5ec'} />
          <circle cx={ox + wallW / 2} cy={ty} r="11" fill="#ffffff" stroke="#f58220" strokeWidth="2" />
          <path
            d={`M ${ox + wallW / 2} ${ty - 4.5} v9 M ${ox + wallW / 2 - 3} ${ty + 2.5} l3 3 l3 -3 M ${ox + wallW / 2 - 3} ${ty - 2.5} l3 -3 l3 3`}
            stroke="#f58220" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
          />
        </g>
      </svg>
      <div className="absolute top-2 right-3 text-[11px] text-brand-500 font-medium">
        {cols} blocks/course x {rows} courses - drag the handles to reshape
      </div>
    </div>
  )
}

/* ---------------- Result card ---------------- */

function ResultCard({ label, value, unit }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 text-center">
      <div className="font-display font-bold text-2xl text-brand-900">
        {value}
        {unit && <span className="text-sm font-medium text-slate-500 ml-1">{unit}</span>}
      </div>
      <div className="mt-1 text-xs font-medium text-slate-500 uppercase tracking-wide">{label}</div>
    </div>
  )
}

/* ---------------- Section ---------------- */

export default function BlockStudio() {
  const [unit, setUnit] = useState('m')
  const [length, setLength] = useState('10')
  const [height, setHeight] = useState('3')
  const [thickness, setThickness] = useState('150')
  const [openings, setOpenings] = useState('0')

  const result = calculateBlocks({ length, height, thickness, unit, openings })
  const lengthM = toMeters(length, unit)
  const heightM = toMeters(height, unit)
  const bricksReplaced = result ? result.totalBlocks * BRICK_EQUIVALENT[thickness] : null

  const switchUnit = (next) => {
    if (next === unit) return
    const conv = (v, f) => {
      const n = parseFloat(v)
      return Number.isNaN(n) ? v : fmt(n * f, 2)
    }
    const toFt = next === 'ft'
    setLength((v) => conv(v, toFt ? 1 / FT : FT))
    setHeight((v) => conv(v, toFt ? 1 / FT : FT))
    setOpenings((v) => conv(v, toFt ? 10.7639 : 0.09290304))
    setUnit(next)
  }

  const handleResize = (lenM, hgtM) => {
    if (lenM != null) setLength(fmt(fromMeters(lenM, unit), 2))
    if (hgtM != null) setHeight(fmt(fromMeters(hgtM, unit), 2))
  }

  const inputCls =
    'w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500'
  const labelCls = 'block text-sm font-medium text-slate-600 mb-1.5'

  return (
    <section id="calculator" className="py-16 md:py-24">
      <div className="container-site">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-tag">Plan your order</span>
          <h2 className="section-title">Visual Wall Builder</h2>
          <p className="section-subtitle mt-4">
            Drag the wall edges or enter dimensions, choose a block size, and see the
            quantity and volume instantly. Includes a 5% site wastage allowance.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-12 card p-6 md:p-8 max-w-6xl mx-auto grid lg:grid-cols-5 gap-8"
        >
          {/* Controls */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Wall length</label>
                <input type="number" min="0" step="any" value={length} onChange={(e) => setLength(e.target.value)} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Wall height</label>
                <input type="number" min="0" step="any" value={height} onChange={(e) => setHeight(e.target.value)} className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Unit</label>
                <select value={unit} onChange={(e) => switchUnit(e.target.value)} className={inputCls}>
                  <option value="m">Metres</option>
                  <option value="ft">Feet</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Openings (doors/windows, {unit === 'ft' ? 'ft²' : 'm²'})</label>
                <input type="number" min="0" step="any" value={openings} onChange={(e) => setOpenings(e.target.value)} className={inputCls} />
              </div>
            </div>

            <div className="mt-5">
              <label className={labelCls}>Block size (thickness)</label>
              <div className="grid grid-cols-3 gap-2">
                {THICKNESSES.map((t) => (
                  <button
                    key={t}
                    onClick={() => setThickness(t)}
                    className={`rounded-lg border px-2 py-2.5 text-sm font-medium transition-colors ${
                      thickness === t
                        ? 'border-brand-700 bg-brand-800 text-white'
                        : 'border-slate-300 bg-white text-slate-600 hover:border-brand-400'
                    }`}
                  >
                    {BLOCK_SIZES[t].label.split(' ')[0]}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-slate-500">
                {BLOCK_SIZES[thickness].label} - 600 x 200 x {thickness} mm
              </p>
            </div>

            <div className="mt-5 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <IsoBlock thickness={thickness} />
              <div className="mt-1 flex items-center justify-between text-xs text-slate-500">
                <span>~{result ? result.blocksPerCBM : '-' } blocks per m³</span>
                <span>1 block replaces ~{BRICK_EQUIVALENT[thickness]} red bricks</span>
              </div>
            </div>
          </div>

          {/* Builder + estimate */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <WallCanvas lengthM={lengthM} heightM={heightM} onResize={handleResize} />

            <div>
              <div className="flex items-center gap-2 text-brand-900">
                <Calculator className="h-5 w-5 text-accent-500" />
                <h3 className="font-display font-semibold text-lg">Your estimate</h3>
              </div>

              {result ? (
                <>
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <ResultCard label="Blocks needed" value={result.totalBlocks.toLocaleString('en-IN')} />
                    <ResultCard label="Wall area" value={result.netArea} unit="m²" />
                    <ResultCard label="Volume" value={result.volumeCBM} unit="m³" />
                    <ResultCard label="Blocks per m³" value={`~${result.blocksPerCBM}`} />
                  </div>
                  <p className="mt-3 text-sm text-slate-600">
                    Same wall in red bricks: roughly {bricksReplaced.toLocaleString('en-IN')} bricks.
                  </p>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    Estimate only. Actual quantity depends on cuts, breakage and site
                    conditions. Share your requirement with us for an exact quote.
                  </p>
                  <a href="tel:+918840693544" className="btn-primary mt-5">
                    <Phone className="h-5 w-5" />
                    Get a quote for {result.totalBlocks.toLocaleString('en-IN')} blocks
                  </a>
                </>
              ) : (
                <p className="mt-4 text-sm text-slate-500">
                  Enter a valid wall length and height to see the estimate.
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
