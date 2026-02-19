'use client'

import { motion } from 'framer-motion'
import { Play, ExternalLink } from 'lucide-react'

const mixes = [
  { title: 'Club Set — No Name TM', genre: 'Commercial · House', duration: '1:12:34' },
  { title: 'Jazzissimo Lounge Session', genre: 'Lounge · Jazz · Chillout', duration: '58:17' },
  { title: 'Wedding Vibes Mix', genre: 'Pop · Romanian · International', duration: '1:34:22' },
]

const waveHeights = [30, 55, 80, 45, 70, 90, 50, 65, 40, 85, 60, 35, 75, 50, 95, 40, 70, 55, 80, 45]

export default function MixPlayer() {
  return (
    <section id="mixuri" className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-400 uppercase tracking-[0.4em] text-xs mb-3">Muzică</p>
          <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-6xl tracking-wider text-white">
            Mix-uri
          </h2>
          <p className="text-zinc-400 mt-3 text-sm">Câteva seturi din portofoliu</p>
        </motion.div>

        <div className="space-y-4 mb-10">
          {mixes.map((mix, i) => (
            <motion.div
              key={i}
              className="bg-zinc-900/60 border border-zinc-800/60 hover:border-purple-500/30 rounded-2xl p-5 flex items-center gap-5 transition-all group cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Play button */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all">
                <Play className="w-5 h-5 text-white fill-white" />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="text-white font-semibold text-sm md:text-base truncate">{mix.title}</div>
                <div className="text-zinc-500 text-xs mt-0.5 uppercase tracking-wider">{mix.genre}</div>
              </div>

              {/* Waveform */}
              <div className="hidden sm:flex items-end gap-[2px] h-8 opacity-40 group-hover:opacity-70 transition-opacity">
                {waveHeights.map((h, j) => (
                  <div
                    key={j}
                    className="bg-gradient-to-t from-purple-600 to-violet-400 rounded-t-sm w-1"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>

              {/* Duration */}
              <div className="text-zinc-500 text-xs flex-shrink-0">{mix.duration}</div>
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
            href="https://www.mixcloud.com/stafie-artist/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold text-sm transition-colors"
          >
            Toate mix-urile pe Mixcloud
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
