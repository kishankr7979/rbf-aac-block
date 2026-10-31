import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Civil Contractor',
    location: 'Varanasi, UP',
    text: 'We switched to RBF AAC blocks for a 50-unit housing project and the difference was remarkable. Construction was 25% faster, the walls were perfectly uniform, and our clients love the cooler interiors. Quality is consistently IS-certified.',
    stars: 5,
    avatar: 'RK',
    project: 'Residential Complex, 50 Units',
  },
  {
    name: 'Suresh Gupta',
    role: 'Structural Engineer',
    location: 'Mirzapur, UP',
    text: 'From an engineering standpoint, RBF AAC blocks offer excellent dimensional precision. The lightweight nature significantly reduced our foundation design loads — we saved nearly 18% on structural steel. Highly recommended for all projects.',
    stars: 5,
    avatar: 'SG',
    project: 'Commercial Building, 4 floors',
  },
  {
    name: 'Anita Sharma',
    role: 'Homeowner',
    location: 'Prayagraj, UP',
    text: 'Built my dream home with RBF AAC blocks on the recommendation of my contractor. The house stays cool in summer without constant AC — our electricity bill dropped by ₹3,000/month. Very happy with the investment!',
    stars: 5,
    avatar: 'AS',
    project: 'Independent House, 2400 sq ft',
  },
  {
    name: 'Mohit Agarwal',
    role: 'Real Estate Developer',
    location: 'Lucknow, UP',
    text: 'We have been procuring from RBF AAC Block for 3 years. Their delivery is always on time, quality is consistent batch after batch, and the pricing for bulk orders is very competitive. A trusted partner for our construction business.',
    stars: 5,
    avatar: 'MA',
    project: 'Multiple residential projects',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(0)

  const prev = () => setActive(a => (a - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive(a => (a + 1) % testimonials.length)

  return (
    <section ref={ref} className="py-24 bg-[#0b1323] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-yellow-400 text-sm font-semibold">Client Testimonials</span>
          </div>
          <h2 className="section-title mb-4">
            Trusted by Builders{' '}
            <span className="text-gradient">Across India</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Don't take our word for it — hear from the contractors, engineers, and homeowners who build with RBF AAC blocks.
          </p>
        </motion.div>

        {/* Featured testimonial carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative glass rounded-3xl p-8 md:p-12">
            <Quote className="w-12 h-12 text-amber-500/30 absolute top-6 left-6" />
            
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <StarRating count={testimonials[active].stars} />
              <p className="text-white text-lg md:text-xl leading-relaxed mt-6 mb-8 italic">
                "{testimonials[active].text}"
              </p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center text-slate-900 font-bold text-lg">
                    {testimonials[active].avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonials[active].name}</div>
                    <div className="text-slate-400 text-sm">{testimonials[active].role} · {testimonials[active].location}</div>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-xs text-slate-400">
                  Project: {testimonials[active].project}
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all ${i === active ? 'w-8 bg-amber-400' : 'w-3 bg-slate-600 hover:bg-slate-500'}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={prev} className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-all">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={next} className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-all">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trust logos / certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {[
            { label: 'IS 2185 Part 3', sub: 'BIS Certified' },
            { label: '4.9 ★ Rating', sub: 'Customer Reviews' },
            { label: 'Green Building', sub: 'Eco-Certified' },
            { label: 'ISO Quality', sub: 'Manufacturing Standards' },
          ].map(badge => (
            <div key={badge.label} className="glass px-6 py-4 rounded-2xl text-center min-w-[150px]">
              <div className="text-amber-400 font-bold text-lg">{badge.label}</div>
              <div className="text-slate-500 text-xs mt-0.5">{badge.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
