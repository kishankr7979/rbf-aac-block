import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Block Studio', href: '#studio' },
  { label: 'Why RBF', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:shadow-amber-500/50 transition-all">
                <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6">
                  <rect x="2" y="12" width="36" height="16" rx="3" fill="white" opacity="0.95"/>
                  <rect x="5" y="17" width="10" height="6" rx="1.5" fill="#b45309" opacity="0.6"/>
                  <rect x="19" y="17" width="10" height="6" rx="1.5" fill="#b45309" opacity="0.6"/>
                  <rect x="2" y="7" width="36" height="3" rx="1.5" fill="white" opacity="0.4"/>
                  <rect x="2" y="30" width="36" height="3" rx="1.5" fill="white" opacity="0.4"/>
                </svg>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse-slow"></div>
            </div>
            <div>
              <div className="font-display font-bold text-lg leading-tight text-white">RBF AAC Block</div>
              <div className="text-xs text-amber-400 font-medium tracking-wide">Premium Building Materials</div>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-slate-300 hover:text-amber-400 font-medium text-sm transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+918840693544"
              className="hidden lg:flex items-center gap-2 text-sm text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 88406 93544</span>
            </a>
            <a
              href="#contact"
              className="hidden md:inline-flex btn-primary text-sm px-5 py-2.5"
            >
              Get a Quote <ChevronRight className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-amber-400 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-1 border-t border-white/10">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-xl transition-all font-medium"
                  >
                    <ChevronRight className="w-4 h-4 text-amber-500" />
                    {link.label}
                  </a>
                ))}
                <div className="pt-3 px-4 flex flex-col gap-3">
                  <a href="tel:+918840693544" className="flex items-center gap-2 text-slate-400">
                    <Phone className="w-4 h-4 text-amber-500" />
                    +91 88406 93544
                  </a>
                  <a href="#contact" className="btn-primary justify-center text-sm">
                    Get a Quote <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
