import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-200">
      <div className="container-site py-12 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent-500 text-white font-display font-bold text-sm">
              RBF
            </span>
            <span className="font-display font-bold text-lg text-white">
              RBF <span className="text-accent-400">AAC Blocks</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-brand-300">
            Future of Modern Construction. Lightweight, eco-friendly AAC blocks supplied
            directly from our plant in Rajatalab, Varanasi.
          </p>
          <p className="mt-4 text-sm font-medium text-white">Build Smart. Build Strong. Build with RBF.</p>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white">Quick links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ['#about', 'What is AAC Block?'],
              ['#benefits', 'Why AAC Blocks'],
              ['#products', 'Sizes & Specifications'],
              ['#compare', 'AAC vs Red Bricks'],
              ['#calculator', 'Block Calculator'],
              ['#contact', 'Contact'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-white transition-colors">{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-semibold text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-accent-400 shrink-0" />
              <a href="tel:+918840693544" className="hover:text-white">88406 93544 (Enquiry & Orders)</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-accent-400 shrink-0" />
              <a href="mailto:rbfaacblock@gmail.com" className="hover:text-white">rbfaacblock@gmail.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-accent-400 shrink-0" />
              <a
                href="https://maps.app.goo.gl/3hGTwc1PScFcqHtc9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Jamuni - Jakkhini Road, Rajatalab, Varanasi, Uttar Pradesh - 221305 (Google Maps)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-900">
        <div className="container-site py-4 text-center text-xs text-brand-400">
          © {new Date().getFullYear()} RBF AAC Blocks, Rajatalab, Varanasi. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
