'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Camera } from 'lucide-react'

const galleryItems = [
  { height: 'h-56', label: 'Nuntă', gradient: 'from-purple-950 via-zinc-900 to-zinc-800' },
  { height: 'h-72', label: 'Club Events', gradient: 'from-violet-950 via-zinc-900 to-zinc-800' },
  { height: 'h-48', label: 'Majorat', gradient: 'from-indigo-950 via-zinc-900 to-zinc-800' },
  { height: 'h-64', label: 'Lounge', gradient: 'from-zinc-900 via-purple-950 to-zinc-800' },
  { height: 'h-48', label: 'Botez', gradient: 'from-zinc-900 via-violet-950 to-zinc-800' },
  { height: 'h-56', label: 'Corporate', gradient: 'from-zinc-900 via-indigo-950 to-zinc-800' },
]

export default function Gallery() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 text-xs tracking-[0.3em] uppercase mb-3">Galerie</p>
          <h2 className="font-bebas text-7xl md:text-8xl tracking-[0.1em] text-white">
            MOMENTE
          </h2>
          <div className="mt-4 w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto" />
          <p className="mt-6 text-zinc-500 text-sm tracking-wider">
            Fiecare eveniment, o poveste unică
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Card */}
              <div
                className={`${item.height} w-full bg-gradient-to-br ${item.gradient} relative flex items-center justify-center`}
              >
                {/* Subtle grid pattern */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `repeating-linear-gradient(0deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 40px),
                      repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 1px, transparent 1px, transparent 40px)`,
                  }}
                />

                {/* Camera icon placeholder */}
                <Camera size={28} className="text-zinc-700 group-hover:text-purple-400/60 transition-colors duration-300" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/50 transition-all duration-400 flex items-center justify-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100"
                  >
                    <span className="font-bebas text-2xl tracking-[0.15em] text-white drop-shadow-lg">
                      {item.label}
                    </span>
                  </motion.div>
                </div>

                {/* Corner label (always visible) */}
                <div className="absolute bottom-3 left-3">
                  <span className="text-zinc-600 text-xs tracking-widest uppercase group-hover:text-transparent transition-colors">
                    {item.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.instagram.com/stafie.artist/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#D4A017] hover:text-amber-300 text-sm tracking-wider uppercase transition-colors group"
          >
            Urmărește pe Instagram @stafie.artist
            <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
