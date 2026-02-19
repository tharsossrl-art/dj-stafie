'use client'

import { motion } from 'framer-motion'
import { Play, ExternalLink } from 'lucide-react'

const mixes = [
  {
    title: 'Club Set — No Name',
    subtitle: 'House & Tech House',
    bars: [30, 55, 40, 70, 45, 60, 35, 65, 50, 75, 38, 58, 42, 68, 52, 44, 62, 36, 56, 48],
  },
  {
    title: 'Wedding Vibes Vol. 1',
    subtitle: 'Romanian & International Hits',
    bars: [45, 35, 65, 50, 55, 40, 70, 30, 60, 45, 72, 38, 55, 62, 42, 58, 34, 66, 48, 52],
  },
  {
    title: 'Jazzissimo Lounge Set',
    subtitle: 'Deep & Melodic',
    bars: [25, 60, 38, 72, 42, 55, 30, 65, 48, 58, 35, 70, 44, 52, 66, 38, 56, 28, 62, 46],
  },
]

export default function MixPlayer() {
  return (
    <section id="mix-uri" className="py-24 px-4 relative bg-[#0a0a0a]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p className="text-purple-400 text-xs tracking-[0.3em] uppercase mb-3">Audio</p>
          <h2 className="font-bebas text-7xl md:text-8xl tracking-[0.1em] text-white">
            MIX-URI
          </h2>
          <div className="mt-4 w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto" />
          <p className="mt-6 text-zinc-500 text-sm tracking-wider">
            Ascultă câteva dintre seturile mele
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {mixes.map((mix, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className="group bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-purple-500/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,58,237,0.15)] cursor-pointer"
            >
              {/* Waveform */}
              <div className="flex items-end gap-[3px] h-14 mb-6">
                {mix.bars.map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-purple-600/40 group-hover:bg-purple-500/60 rounded-sm transition-colors duration-300"
                    style={{ height: `${h}%` }}
                    animate={{
                      height: [`${h}%`, `${h * 0.5}%`, `${h * 1.1}%`, `${h * 0.7}%`, `${h}%`],
                    }}
                    transition={{
                      duration: 2 + (i % 3) * 0.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: (i * 0.1) % 1.5,
                    }}
                  />
                ))}
              </div>

              {/* Play button + info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-700 hover:bg-purple-600 flex items-center justify-center transition-colors shadow-[0_0_20px_rgba(124,58,237,0.5)] flex-shrink-0">
                  <Play size={18} className="text-white ml-0.5" fill="white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-semibold text-sm truncate">{mix.title}</div>
                  <div className="text-zinc-500 text-xs mt-0.5">{mix.subtitle}</div>
                </div>
                <div className="text-zinc-600 text-xs font-mono">— : —</div>
              </div>

              {/* Mix number badge */}
              <div className="mt-4 pt-4 border-t border-zinc-800 flex items-center justify-between">
                <span className="text-zinc-600 text-xs tracking-widest uppercase">Mix #{index + 1}</span>
                <div className="w-2 h-2 rounded-full bg-purple-500/60 group-hover:bg-purple-400 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mixcloud link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.mixcloud.com/stafie-artist/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#D4A017] hover:text-amber-300 text-sm tracking-wider uppercase transition-colors group"
          >
            Urmărește toate mix-urile pe Mixcloud
            <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
