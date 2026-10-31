import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Building2, User, MessageSquare, CheckCircle } from 'lucide-react'

const THICKNESSES = ['75mm', '100mm', '150mm', '200mm', 'Multiple / Not sure']
const PROJECT_TYPES = ['Residential (House/Flat)', 'Commercial (Office/Shop)', 'Industrial', 'High-Rise Building', 'Other']

export default function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({
    name: '', phone: '', email: '', city: '', thickness: '', quantity: '', projectType: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission (in production, connect to backend or Formspree)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  const inputClass = "w-full bg-slate-800/80 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all text-sm"
  const labelClass = "block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5"

  return (
    <section id="contact" ref={ref} className="py-24 bg-[#0d1829] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[150px]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6">
            <Mail className="w-4 h-4 text-amber-400" />
            <span className="text-amber-400 text-sm font-semibold">Get in Touch</span>
          </div>
          <h2 className="section-title mb-4">
            Ready to Build?{' '}
            <span className="text-gradient">Let's Talk.</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Send us your requirements and we'll respond within 2 hours with a detailed quote. No obligation, completely free.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-2xl p-6 space-y-6">
              <h3 className="font-display font-bold text-white text-xl">Contact Information</h3>
              
              <div className="space-y-4">
                <a href="tel:+918840693544" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-amber-500/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/25 transition-colors">
                    <Phone className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Call / WhatsApp</div>
                    <div className="text-white font-semibold group-hover:text-amber-400 transition-colors">+91 88406 93544</div>
                  </div>
                </a>

                <a href="mailto:rbfaacblock@gmail.com" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 bg-blue-500/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/25 transition-colors">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Email</div>
                    <div className="text-white font-semibold group-hover:text-blue-400 transition-colors">rbfaacblock@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-500/15 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-0.5">Location</div>
                    <div className="text-white font-semibold">Varanasi Region, Uttar Pradesh</div>
                    <div className="text-slate-400 text-sm">Serving UP, MP & nearby states</div>
                  </div>
                </div>
              </div>

              {/* Quick actions */}
              <div className="space-y-3 pt-2 border-t border-white/10">
                <a
                  href="https://wa.me/918840693544?text=Hi%20RBF%20AAC%20Block!%20I%20need%20a%20quote%20for%20AAC%20blocks."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] font-semibold hover:bg-[#25D366]/20 transition-all text-sm"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
                <a
                  href="https://maps.app.goo.gl/3hGTwc1PScFcqHtc9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold hover:bg-blue-500/20 transition-all text-sm"
                >
                  <MapPin className="w-4 h-4" />
                  View on Google Maps
                </a>
              </div>
            </div>

            {/* Business hours */}
            <div className="glass rounded-2xl p-5">
              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-amber-400" />
                Business Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Monday – Saturday</span>
                  <span className="text-white font-medium">8:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Sunday</span>
                  <span className="text-amber-400 font-medium">On Call</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-6 md:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-20 h-20 bg-emerald-500/15 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-emerald-400" />
                  </div>
                  <h3 className="font-display font-bold text-white text-2xl mb-3">Inquiry Received!</h3>
                  <p className="text-slate-400 max-w-sm mb-6">
                    Thank you for reaching out. Our team will contact you within 2 hours with a detailed quote.
                  </p>
                  <div className="flex gap-3">
                    <a href="https://wa.me/918840693544" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm px-6 py-2.5">
                      Also chat on WhatsApp
                    </a>
                    <button onClick={() => { setSubmitted(false); setForm({ name:'',phone:'',email:'',city:'',thickness:'',quantity:'',projectType:'',message:'' }) }} className="btn-outline text-sm px-6 py-2.5">
                      New Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display font-bold text-white text-xl mb-6 flex items-center gap-2">
                    <Send className="w-5 h-5 text-amber-400" />
                    Send Inquiry
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required
                        placeholder="Rajesh Kumar" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Phone Number *</label>
                      <input name="phone" value={form.phone} onChange={handleChange} required type="tel"
                        placeholder="+91 98765 43210" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Email Address</label>
                      <input name="email" value={form.email} onChange={handleChange} type="email"
                        placeholder="your@email.com" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>City / District *</label>
                      <input name="city" value={form.city} onChange={handleChange} required
                        placeholder="e.g. Varanasi" className={inputClass} />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Block Thickness Required</label>
                      <select name="thickness" value={form.thickness} onChange={handleChange} className={inputClass}>
                        <option value="">Select thickness</option>
                        {THICKNESSES.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Quantity Required (m³)</label>
                      <input name="quantity" value={form.quantity} onChange={handleChange} type="number" min="0"
                        placeholder="e.g. 50" className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Project Type</label>
                    <div className="flex flex-wrap gap-2">
                      {PROJECT_TYPES.map(type => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setForm(f => ({ ...f, projectType: type }))}
                          className={`text-xs px-3 py-2 rounded-lg border transition-all ${
                            form.projectType === type
                              ? 'border-amber-500 bg-amber-500/15 text-amber-400'
                              : 'border-white/10 bg-slate-800 text-slate-400 hover:border-white/20'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>
                      <MessageSquare className="w-3 h-3 inline mr-1" />
                      Additional Message
                    </label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                      placeholder="Tell us about your project, timeline, or any specific requirements..."
                      className={`${inputClass} resize-none`} />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full py-4 text-base justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Inquiry — Get Quote in 2 Hours
                      </>
                    )}
                  </button>
                  
                  <p className="text-xs text-slate-600 text-center">
                    By submitting, you agree to be contacted by RBF AAC Block team. We don't share your information.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
