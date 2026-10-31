import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react'

const phones = [
  { label: 'Enquiry & Orders', number: '8840693544' },
]

const MAPS_URL = 'https://maps.app.goo.gl/3hGTwc1PScFcqHtc9'

const formatPhone = (n) => `${n.slice(0, 5)} ${n.slice(5)}`

export default function ContactForm() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const inputCls =
    'w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500'

  const sendWhatsApp = (e) => {
    e.preventDefault()
    const text = `Hi RBF AAC Blocks, I am ${name || 'a customer'} (${phone || 'no number shared'}). ${message || 'I want to enquire about AAC blocks.'}`
    window.open(`https://wa.me/918840693544?text=${encodeURIComponent(text)}`, '_blank', 'noopener')
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50">
      <div className="container-site">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-tag">Get in touch</span>
          <h2 className="section-title">For enquiry & orders</h2>
          <p className="section-subtitle mt-4">
            Call, WhatsApp or visit our plant - we supply directly from Rajatalab, Varanasi.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="card p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-800 text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold text-lg text-brand-900">Call us</h3>
              </div>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {phones.map((p) => (
                  <a
                    key={p.number}
                    href={`tel:+91${p.number}`}
                    className="rounded-lg border border-slate-200 px-4 py-3 hover:border-brand-400 hover:bg-brand-50 transition-colors"
                  >
                    <div className="text-xs text-slate-500">{p.label}</div>
                    <div className="font-semibold text-brand-900">{formatPhone(p.number)}</div>
                  </a>
                ))}
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-800 text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-brand-900">Email</h3>
                  <a href="mailto:rbfaacblock@gmail.com" className="text-sm text-brand-600 hover:underline">
                    rbfaacblock@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-800 text-white shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-brand-900">Visit our plant</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                    RBF AAC Blocks Plant<br />
                    Jamuni - Jakkhini Road, Rajatalab<br />
                    Varanasi, Uttar Pradesh - 221305
                  </p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-medium text-brand-600 hover:underline"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={sendWhatsApp}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-6 md:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-white">
                <MessageCircle className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold text-lg text-brand-900">Send an enquiry on WhatsApp</h3>
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1.5">Your name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} className={inputCls} placeholder="e.g. Ramesh Builders" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1.5">Phone number</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} className={inputCls} placeholder="10-digit mobile number" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-1.5">Requirement</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className={inputCls}
                  placeholder="e.g. Need 5,000 blocks of 6 inch for a site in Varanasi"
                />
              </div>
              <button type="submit" className="btn-primary w-full !bg-emerald-600 hover:!bg-emerald-700">
                <Send className="h-4 w-4" />
                Send on WhatsApp
              </button>
              <p className="text-xs text-slate-500 text-center">
                Opens WhatsApp with your message pre-filled to 88406 93544.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
