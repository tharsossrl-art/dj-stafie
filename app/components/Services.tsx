'use client'

import { motion } from 'framer-motion'
import { Heart, Star, Zap, Briefcase, Music } from 'lucide-react'

const services = [
  { icon: Heart, title: 'Nuntă', color: 'text-pink-400', bg: 'bg-pink-500/10 border-pink-500/20', desc: 'Seara perfectă pentru cel mai important moment din viața ta' },
  { icon: Star, title: 'Botez', color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20', desc: 'Atmosferă veselă pentru micul tău invitat de onoare' },
  { icon: Music, title: 'Majorat', color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/20', desc: 'O petrecere de neuitat pentru cei 18 ani' },
  { icon: Zap, title: 'Club Events', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20', desc: 'Energy non-stop pentru cluburi și baruri din Timișoara' },
  { icon: Briefcase, title: 'Corporate & Lounge', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20', desc: 'Muzică selectă pentru evenimente business și ambient lounge' },
]

export default function Services() {
  return (
    <section id="servicii" className="py-24 px-6 bg-[#070707]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-400 uppercase tracking-[0.4em] text-xs mb-3">Ce Ofer</p>
          <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-6xl tracking-wider text-white">
            Servicii
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={i}
                className={`${s.bg} border rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 cursor-default`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${s.bg}`}>
                  <Icon className={`w-6 h-6 ${s.color}`} />
                </div>
                <h3 className="font-[family-name:var(--font-bebas)] text-2xl tracking-wider text-white mb-2">{s.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
