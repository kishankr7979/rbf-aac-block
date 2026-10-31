import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918840693544"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with RBF AAC Blocks on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 transition-colors"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
