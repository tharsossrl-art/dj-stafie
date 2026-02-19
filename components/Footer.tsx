import { ExternalLink } from 'lucide-react'

export default function Footer() {
  const quickLinks = [
    { href: '#servicii', label: 'Servicii' },
    { href: '#mix-uri', label: 'Mix-uri' },
    { href: '#booking', label: 'Booking' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <footer className="relative bg-[#050505] border-t border-purple-500/20">
      {/* Purple top line accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: Logo */}
          <div>
            <div className="font-bebas text-2xl tracking-[0.3em] bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent mb-2">
              S T A F I E
            </div>
            <p className="text-zinc-600 text-xs tracking-wider">
              DJ Timișoara &nbsp;&middot;&nbsp; Since 2013
            </p>
            <p className="text-zinc-700 text-xs mt-2">
              Nunți &middot; Botez &middot; Majorat &middot; Club Events
            </p>
          </div>

          {/* Center */}
          <div className="text-center">
            <p className="text-zinc-600 text-xs tracking-widest uppercase">
              DJ Timișoara &nbsp;&middot;&nbsp; Since 2013
            </p>
            <div className="mt-3 flex items-center justify-center gap-2">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-purple-500/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-purple-500/60" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-purple-500/40" />
            </div>
            <p className="mt-3 text-zinc-700 text-xs">
              stafie.artist@gmail.com
            </p>
            <p className="text-zinc-700 text-xs">
              +40 746 892 506
            </p>
          </div>

          {/* Right: Quick links */}
          <div className="flex flex-wrap justify-end gap-x-6 gap-y-2">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-zinc-600 hover:text-purple-400 text-xs tracking-widest uppercase transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-700 text-xs">
            &copy; {new Date().getFullYear()} DJ Stafie — Toate drepturile rezervate
          </p>
          <a
            href="https://apprapid.ro"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-zinc-400 text-xs tracking-wider transition-colors group"
          >
            Powered by AppRapid &nbsp;&middot;&nbsp; apprapid.ro
            <ExternalLink size={10} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  )
}
