'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Mix-uri', href: '#mixuri' },
  { label: 'Servicii', href: '#servicii' },
  { label: 'Booking', href: '#booking' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-black/80 border-b border-purple-500/20' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-[family-name:var(--font-bebas)] text-2xl tracking-[0.3em] bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
          S T A F I E
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-zinc-400 hover:text-white tracking-wider uppercase transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#booking" className="px-5 py-2 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full text-sm font-semibold text-white tracking-wider uppercase hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all">
            Rezervă
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-black/95 border-b border-purple-500/20 px-6 py-4 flex flex-col gap-4"
          >
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-zinc-300 uppercase tracking-wider text-sm py-2">
                {l.label}
              </a>
            ))}
            <a href="#booking" onClick={() => setOpen(false)} className="mt-2 py-3 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl text-center text-sm font-bold tracking-wider text-white uppercase">
              Rezervă
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
