'use client'

import { motion } from 'framer-motion'
import { Instagram } from 'lucide-react'

const photos = [
  { label: 'Nuntă', gradient: 'from-purple-900/60 to-zinc-900', height: 'h-64' },
  { label: 'Club Event', gradient: 'from-violet-900/60 to-zinc-900', height: 'h-48' },
  { label: 'Majorat', gradient: 'from-purple-800/50 to-zinc-900', height: 'h-56' },
  { label: 'Jazzissimo Lounge', gradient: 'from-indigo-900/60 to-zinc-900', height: 'h-48' },
  { label: 'Botez', gradient: 'from-violet-800/50 to-zinc-900', height: 'h-64' },
  { label: 'No Name Club', gradient: 'from-purple-900/70 to-zinc-900', height: 'h-56' },
]

export default function Gallery() {
  return (
    <section id="galerie" className="py-24 px-6 bg-[#070707]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-400 uppercase tracking-[0.4em] text-xs mb-3">Momente</p>
          <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-6xl tracking-wider text-white">
            Galerie
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          {photos.map((p, i) => (
            <motion.div
              key={i}
              className={`${p.height} bg-gradient-to-br ${p.gradient} border border-zinc-800/40 rounded-2xl relative overflow-hidden group cursor-pointer`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'linear-gradient(rgba(124,58,237,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.3) 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }} />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/20 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-semibold text-sm uppercase tracking-widest">
                  {p.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://www.instagram.com/stafie.artist/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors"
          >
            <Instagram className="w-4 h-4" />
            Urmărește pe Instagram @stafie.artist
          </a>
        </motion.div>
      </div>
    </section>
  )
}
