import { useState } from 'react'
import { Phone, Menu, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#benefits', label: 'Why AAC' },
  { href: '#products', label: 'Products' },
  { href: '#compare', label: 'AAC vs Bricks' },
  { href: '#calculator', label: 'Calculator' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="container-site flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-brand-800 text-white font-display font-bold text-sm">
            RBF
          </span>
          <span className="font-display font-bold text-lg text-brand-900 leading-tight">
            RBF <span className="text-accent-500">AAC Blocks</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-slate-600 hover:text-brand-700 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="tel:+918840693544" className="btn-primary !px-4 !py-2 text-sm">
            <Phone className="h-4 w-4" />
            88406 93544
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-brand-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-slate-200 bg-white">
          <div className="container-site py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-brand-700"
              >
                {l.label}
              </a>
            ))}
            <a href="tel:+918840693544" className="btn-primary text-sm mt-2">
              <Phone className="h-4 w-4" />
              Call 88406 93544
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
