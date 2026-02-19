'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#mix-uri', label: 'Mix-uri' },
    { href: '#servicii', label: 'Servicii' },
    { href: '#booking', label: 'Booking' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-black/80 border-b border-purple-500/20'
          : 'backdrop-blur-sm bg-black/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="font-bebas text-2xl tracking-[0.3em] bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent hover:from-purple-300 hover:to-violet-200 transition-all duration-300"
          >
            S T A F I E
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-400 hover:text-white text-sm tracking-wider uppercase transition-colors duration-200 hover:text-purple-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              className="px-5 py-2 bg-gradient-to-r from-purple-700 to-violet-600 hover:from-purple-600 hover:to-violet-500 text-white text-sm font-semibold tracking-widest uppercase rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(124,58,237,0.6)]"
            >
              REZERVĂ
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-purple-500/20">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-purple-300 text-sm tracking-wider uppercase transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-5 py-3 bg-gradient-to-r from-purple-700 to-violet-600 text-white text-sm font-semibold tracking-widest uppercase rounded-full text-center"
            >
              REZERVĂ
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
