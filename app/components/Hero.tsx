'use client'

import { motion } from 'framer-motion'

const floatingCards = [
  { label: '150+', sub: 'Evenimente', delay: 0, x: '-5%', top: '30%' },
  { label: '10+', sub: 'Ani Experiență', delay: 0.4, x: '80%', top: '25%' },
  { label: 'TM', sub: 'Timișoara', delay: 0.8, x: '70%', top: '65%' },
]

const bars = Array.from({ length: 42 }, (_, i) => {
  const heights = [20, 35, 55, 70, 45, 80, 60, 90, 40, 65, 85, 50, 75, 30, 95, 55, 40, 70, 85, 60, 45, 90, 35, 75, 55, 80, 40, 65, 50, 85, 30, 70, 95, 45, 60, 75, 55, 40, 80, 65, 35, 50]
  return heights[i % heights.length]
})

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#070707]">
      {/* Purple ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-violet-700/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-purple-800/10 rounded-full blur-[80px]" />
      </div>

      {/* Floating cards */}
      {floatingCards.map((card, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:block bg-black/60 border border-purple-500/30 backdrop-blur-sm rounded-2xl px-4 py-3 text-center"
          style={{ left: card.x, top: card.top }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{ delay: card.delay, duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="font-[family-name:var(--font-bebas)] text-2xl text-purple-300 tracking-wider">{card.label}</div>
          <div className="text-[10px] text-zinc-400 uppercase tracking-widest">{card.sub}</div>
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xs text-purple-400 uppercase tracking-[0.4em] mb-6"
        >
          DJ · Timișoara · Since 2013
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="font-[family-name:var(--font-bebas)] text-[15vw] sm:text-[80px] md:text-[140px] lg:text-[160px] leading-none tracking-[0.12em] text-white whitespace-nowrap"
          style={{ textShadow: '0 0 80px rgba(124,58,237,0.6), 0 0 30px rgba(124,58,237,0.3)' }}
        >
          STAFIE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-zinc-400 uppercase tracking-[0.3em] text-xs md:text-sm mt-4 mb-10"
        >
          Nunți · Botez · Majorat · Club Events
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#booking" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-2xl font-bold text-white uppercase tracking-widest text-sm hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all">
            Rezervă o Dată
          </a>
          <a href="#mixuri" className="px-8 py-4 border border-purple-500/50 rounded-2xl font-bold text-purple-300 uppercase tracking-widest text-sm hover:bg-purple-500/10 transition-all">
            Ascultă Mix-urile
          </a>
        </motion.div>
      </div>

      {/* Waveform */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-[3px] h-24 px-4 opacity-30">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="bg-gradient-to-t from-purple-600 to-violet-400 rounded-t-sm flex-1 max-w-[8px]"
            style={{ height: `${h}%` }}
            animate={{ height: [`${h}%`, `${Math.min(h + 20, 95)}%`, `${h}%`] }}
            transition={{ duration: 1.2 + (i % 5) * 0.3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.04 }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-5 h-5 text-purple-400/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  )
}
