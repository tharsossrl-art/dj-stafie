'use client'

import { motion } from 'framer-motion'
import { Heart, Star, Sparkles, Zap, Briefcase } from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'Nuntă',
    description: 'Seara perfectă pentru cel mai important moment din viața ta.',
    color: 'from-rose-900/20 to-purple-900/20',
  },
  {
    icon: Star,
    title: 'Botez',
    description: 'Atmosferă veselă pentru micul tău invitat de onoare.',
    color: 'from-blue-900/20 to-purple-900/20',
  },
  {
    icon: Sparkles,
    title: 'Majorat',
    description: 'O petrecere de neuitat la 18 ani.',
    color: 'from-amber-900/20 to-purple-900/20',
  },
  {
    icon: Zap,
    title: 'Club Events',
    description: 'Energy non-stop pentru cluburi și baruri.',
    color: 'from-purple-900/30 to-violet-900/20',
  },
  {
    icon: Briefcase,
    title: 'Lounge & Corporate',
    description: 'Muzică selectă pentru evenimente business și corporate.',
    color: 'from-teal-900/20 to-purple-900/20',
  },
]

export default function Services() {
  return (
    <section id="servicii" className="py-24 px-4 relative">
      {/* subtle divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-purple-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 text-xs tracking-[0.3em] uppercase mb-3">Servicii</p>
          <h2 className="font-bebas text-7xl md:text-8xl tracking-[0.1em] text-white">
            CE OFER
          </h2>
          <div className="mt-4 w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative"
              >
                <div
                  className={`relative h-full bg-zinc-900/50 bg-gradient-to-br ${service.color} border border-zinc-800 group-hover:border-purple-500/50 rounded-2xl p-6 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] cursor-default`}
                >
                  {/* Icon */}
                  <div className="mb-4 w-12 h-12 rounded-xl bg-purple-900/30 border border-purple-500/20 flex items-center justify-center group-hover:border-purple-400/40 transition-colors">
                    <Icon
                      size={22}
                      className="text-purple-400 group-hover:text-purple-300 transition-colors"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-bebas text-2xl tracking-[0.05em] text-white mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-xs leading-relaxed group-hover:text-zinc-300 transition-colors">
                    {service.description}
                  </p>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-3 right-3 w-1.5 h-1.5 rounded-full bg-purple-400" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Venues note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-zinc-600 text-xs tracking-widest uppercase">
            Club No Name Timișoara &nbsp;&middot;&nbsp; Jazzissimo Lounge Timișoara &nbsp;&middot;&nbsp; și altele
          </p>
        </motion.div>
      </div>
    </section>
  )
}
