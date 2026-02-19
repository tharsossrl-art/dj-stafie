'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, Mail, Instagram, Facebook, Music, Youtube, Clock } from 'lucide-react'

const contactCards = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '+40 746 892 506',
    href: 'tel:+40746892506',
    sub: 'Apelează direct',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+40 746 892 506',
    href: 'https://wa.me/40746892506',
    sub: 'Răspuns rapid',
    highlight: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'stafie.artist@gmail.com',
    href: 'mailto:stafie.artist@gmail.com',
    sub: 'Pentru oferte detaliate',
  },
]

const socialCards = [
  {
    icon: Instagram,
    label: 'Instagram',
    handle: '@stafie.artist',
    href: 'https://www.instagram.com/stafie.artist/',
    color: 'from-purple-900/30 to-pink-900/20',
    border: 'border-purple-500/20',
  },
  {
    icon: Facebook,
    label: 'Facebook',
    handle: 'DJ Stafie',
    href: 'https://facebook.com/djstafie',
    color: 'from-blue-900/20 to-purple-900/20',
    border: 'border-blue-500/20',
  },
  {
    icon: Music,
    label: 'Mixcloud',
    handle: 'stafie-artist',
    href: 'https://www.mixcloud.com/stafie-artist/',
    color: 'from-purple-900/30 to-violet-900/20',
    border: 'border-purple-500/20',
  },
  {
    icon: Youtube,
    label: 'YouTube',
    handle: 'DJ Stafie',
    href: 'https://youtube.com',
    color: 'from-red-900/20 to-purple-900/20',
    border: 'border-red-500/20',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 relative bg-[#0a0a0a]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 text-xs tracking-[0.3em] uppercase mb-3">Hai să vorbim</p>
          <h2 className="font-bebas text-7xl md:text-8xl tracking-[0.1em] text-white">
            CONTACT
          </h2>
          <div className="mt-4 w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="font-bebas text-2xl tracking-[0.1em] text-zinc-500 mb-6">
              DATE DE CONTACT
            </h3>
            {contactCards.map((card, i) => {
              const Icon = card.icon
              return (
                <motion.a
                  key={i}
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 group ${
                    card.highlight
                      ? 'bg-purple-900/20 border-purple-500/40 hover:border-purple-400/60 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)]'
                      : 'bg-zinc-900/40 border-zinc-800 hover:border-purple-500/30'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      card.highlight ? 'bg-purple-700' : 'bg-zinc-800 group-hover:bg-purple-900/40'
                    } transition-colors`}
                  >
                    <Icon size={20} className={card.highlight ? 'text-white' : 'text-zinc-400 group-hover:text-purple-400'} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-zinc-500 text-xs tracking-widest uppercase mb-0.5">{card.label}</div>
                    <div className="text-white text-sm font-medium truncate">{card.value}</div>
                    <div className="text-zinc-600 text-xs">{card.sub}</div>
                  </div>
                  <div className="text-zinc-700 group-hover:text-purple-400 transition-colors text-lg">→</div>
                </motion.a>
              )
            })}

            {/* Availability note */}
            <div className="mt-6 flex items-start gap-3 p-4 rounded-2xl bg-amber-900/10 border border-[#D4A017]/20">
              <Clock size={16} className="text-[#D4A017]/60 mt-0.5 flex-shrink-0" />
              <p className="text-zinc-500 text-xs leading-relaxed">
                <span className="text-[#D4A017]/80">Rezervări anticipate recomandate</span> — perioadele de vârf
                (vară, sărbători) se ocupă rapid. Contactează-mă cât mai devreme pentru a-ți asigura data.
              </p>
            </div>
          </motion.div>

          {/* Right: Social grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bebas text-2xl tracking-[0.1em] text-zinc-500 mb-6">
              SOCIAL MEDIA
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {socialCards.map((social, i) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-gradient-to-br ${social.color} border ${social.border} hover:border-purple-500/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.15)] group`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-black/30 border border-white/5 flex items-center justify-center">
                      <Icon size={20} className="text-zinc-400 group-hover:text-purple-300 transition-colors" />
                    </div>
                    <div className="text-center">
                      <div className="text-white text-sm font-semibold">{social.label}</div>
                      <div className="text-zinc-500 text-xs mt-0.5">{social.handle}</div>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Collaborators */}
            <div className="mt-8 p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800">
              <div className="text-zinc-600 text-xs tracking-widest uppercase mb-3">Colaboratori</div>
              <div className="flex flex-wrap gap-3">
                <div className="px-3 py-1.5 rounded-full bg-zinc-800/80 border border-zinc-700/50">
                  <span className="text-zinc-400 text-xs">Andrei Cristea — Saxofon</span>
                </div>
                <div className="px-3 py-1.5 rounded-full bg-zinc-800/80 border border-zinc-700/50">
                  <span className="text-zinc-400 text-xs">Fabricio — Percuție</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
