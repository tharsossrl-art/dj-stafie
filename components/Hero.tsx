'use client'

import { motion } from 'framer-motion'

const waveHeights = [
  20, 45, 30, 60, 35, 70, 40, 55, 25, 65, 50, 38, 72, 28, 48, 62, 33, 58, 42, 68,
  22, 52, 37, 66, 44, 30, 56, 70, 26, 60, 40, 48, 64, 34, 50, 28, 72, 38, 54, 20,
]

const floatingCards = [
  { label: '150+', sub: 'Evenimente', delay: 0 },
  { label: '10+', sub: 'Ani Experiență', delay: 0.3 },
  { label: 'TMR', sub: 'Timișoara & Împrejurimi', delay: 0.6 },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[#070707]">
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(124,58,237,0.18) 0%, rgba(124,58,237,0.05) 50%, transparent 70%)',
          }}
          animate={{
            opacity: [0.6, 1, 0.6],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 50% 40% at 20% 70%, rgba(139,92,246,0.1) 0%, transparent 60%)',
          }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 40% 30% at 80% 30%, rgba(168,85,247,0.08) 0%, transparent 60%)',
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 4,
          }}
        />
      </div>

      {/* Waveform SVG at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 flex items-end overflow-hidden">
        <svg
          viewBox={`0 0 ${waveHeights.length * 18} 80`}
          preserveAspectRatio="none"
          className="w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          {waveHeights.map((h, i) => (
            <motion.rect
              key={i}
              x={i * 18 + 4}
              y={80 - h}
              width={10}
              height={h}
              rx={3}
              fill="url(#waveGrad)"
              animate={{
                height: [h, h * 0.4, h * 1.2, h * 0.6, h],
                y: [80 - h, 80 - h * 0.4, 80 - h * 1.2, 80 - h * 0.6, 80 - h],
              }}
              transition={{
                duration: 2 + (i % 5) * 0.4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: (i * 0.07) % 2,
              }}
            />
          ))}
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating stat cards */}
      <motion.div
        className="absolute top-32 left-6 md:left-16 hidden sm:block"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
      >
        <div className="bg-black/60 backdrop-blur-md border border-purple-500/30 rounded-2xl px-5 py-3 shadow-[0_0_30px_rgba(124,58,237,0.2)]">
          <div className="font-bebas text-3xl text-purple-400 tracking-wider">150+</div>
          <div className="text-zinc-400 text-xs tracking-widest uppercase">Evenimente</div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-40 right-6 md:right-16 hidden sm:block"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
      >
        <div className="bg-black/60 backdrop-blur-md border border-purple-500/30 rounded-2xl px-5 py-3 shadow-[0_0_30px_rgba(124,58,237,0.2)]">
          <div className="font-bebas text-3xl text-purple-400 tracking-wider">10+</div>
          <div className="text-zinc-400 text-xs tracking-widest uppercase">Ani Experiență</div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-48 right-8 md:right-24 hidden md:block"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
      >
        <div className="bg-black/60 backdrop-blur-md border border-purple-500/30 rounded-2xl px-5 py-3 shadow-[0_0_30px_rgba(124,58,237,0.2)]">
          <div className="font-bebas text-xl text-purple-400 tracking-wider">TMR</div>
          <div className="text-zinc-400 text-xs tracking-widest uppercase">Timișoara &amp; Împrejurimi</div>
        </div>
      </motion.div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-purple-400 text-xs tracking-[0.3em] uppercase mb-6"
        >
          DJ &middot; TIMIȘOARA &middot; SINCE 2013
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-bebas text-8xl md:text-[160px] leading-none tracking-[0.15em] text-white"
          style={{ textShadow: '0 0 60px rgba(124,58,237,0.6)' }}
        >
          S T A F I E
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-4 text-zinc-400 text-sm tracking-[0.2em] uppercase"
        >
          Nunți &middot; Botez &middot; Majorat &middot; Club Events
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="#booking"
            className="px-8 py-4 bg-gradient-to-r from-purple-700 to-violet-600 hover:from-purple-600 hover:to-violet-500 text-white font-semibold text-sm tracking-[0.15em] uppercase rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(124,58,237,0.5)] hover:shadow-[0_0_50px_rgba(124,58,237,0.7)] hover:scale-105"
          >
            REZERVĂ O DATĂ
          </a>
          <a
            href="#mix-uri"
            className="px-8 py-4 border border-purple-500/60 hover:border-purple-400 text-purple-300 hover:text-white font-semibold text-sm tracking-[0.15em] uppercase rounded-full transition-all duration-300 hover:bg-purple-500/10"
          >
            ASCULTĂ MIX-URILE
          </a>
        </motion.div>
      </div>
    </section>
  )
}
