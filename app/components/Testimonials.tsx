'use client'

import { motion } from 'framer-motion'

const reviews = [
  {
    name: 'Andreea & Mihai',
    event: 'Nuntă · Septembrie 2024',
    text: 'Stafie a transformat nunta noastră într-o seară de neuitat. A citit perfect atmosfera sălii și toată lumea a dansat până dimineața. Recomandare 100%!',
  },
  {
    name: 'Familia Ionescu',
    event: 'Botez · Iulie 2024',
    text: 'Profesionist, punctual, muzică perfectă pentru vârste mixte. Toți oaspeții ne-au felicitat pentru alegerea DJ-ului. Cu siguranță îl chemăm și la majorat!',
  },
  {
    name: 'Laura M.',
    event: 'Majorat · Mai 2024',
    text: 'Cele mai bune momente din petrecerea mea de 18 ani au fost cu muzica lui Stafie. A pus exact ce mi-am dorit și a improvizat genial când am cerut altceva.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-400 uppercase tracking-[0.4em] text-xs mb-3">Recenzii</p>
          <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-6xl tracking-wider text-white mb-2">
            Ce Spun Clienții
          </h2>
          <p className="text-zinc-400 text-sm">150+ evenimente realizate cu succes</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              className="bg-zinc-900/50 border border-zinc-800/50 hover:border-purple-500/30 rounded-2xl p-6 transition-colors relative"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Gold quote */}
              <div className="text-5xl font-serif text-[#D4A017]/30 leading-none mb-3 select-none">&ldquo;</div>
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({length: 5}).map((_, j) => (
                  <div key={j} className="w-3.5 h-3.5 bg-[#D4A017] rounded-sm" />
                ))}
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed mb-5 italic">{r.text}</p>
              <div>
                <div className="text-white font-semibold text-sm">{r.name}</div>
                <div className="text-zinc-500 text-xs mt-0.5">{r.event}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
