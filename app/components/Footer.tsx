'use client'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-purple-500/15 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-[family-name:var(--font-bebas)] text-xl tracking-[0.3em] bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
            S T A F I E
          </span>

          <div className="flex gap-6 text-xs text-zinc-500 uppercase tracking-wider">
            <a href="#servicii" className="hover:text-white transition-colors">Servicii</a>
            <a href="#mixuri" className="hover:text-white transition-colors">Mix-uri</a>
            <a href="#booking" className="hover:text-white transition-colors">Booking</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <span className="text-zinc-600 text-xs">DJ Timișoara · Since 2013</span>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-2">
          <span className="text-zinc-700 text-xs">© 2025 S T A F I E. Toate drepturile rezervate.</span>
          <a href="https://apprapid.ro" target="_blank" rel="noopener noreferrer" className="text-zinc-600 text-xs hover:text-zinc-400 transition-colors">
            Powered by AppRapid · apprapid.ro
          </a>
        </div>
      </div>
    </footer>
  )
}
