'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, Instagram, Facebook, Music } from 'lucide-react'

const socials = [
  { icon: Instagram, label: 'Instagram', handle: '@stafie.artist', sub: '4.3K followers', href: 'https://instagram.com/stafie.artist', color: 'text-pink-400' },
  { icon: Facebook, label: 'Facebook', handle: '@djstafie', sub: '4.5K aprecieri', href: 'https://facebook.com/djstafie', color: 'text-blue-400' },
  { icon: Music, label: 'Mixcloud', handle: 'stafie-artist', sub: '2.5K followers', href: 'https://mixcloud.com/stafie-artist', color: 'text-amber-400' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#070707]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-400 uppercase tracking-[0.4em] text-xs mb-3">Hai să Vorbim</p>
          <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-6xl tracking-wider text-white">
            Contact
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact cards */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a href="tel:+40746892506" className="flex items-center gap-4 bg-zinc-900/60 border border-zinc-800/60 hover:border-purple-500/30 rounded-2xl p-5 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <div className="text-zinc-400 text-xs uppercase tracking-wider">Telefon / WhatsApp</div>
                <div className="text-white font-semibold group-hover:text-purple-300 transition-colors">+40 746 892 506</div>
              </div>
            </a>

            <a href="mailto:stafie.artist@gmail.com" className="flex items-center gap-4 bg-zinc-900/60 border border-zinc-800/60 hover:border-purple-500/30 rounded-2xl p-5 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <div className="text-zinc-400 text-xs uppercase tracking-wider">Email</div>
                <div className="text-white font-semibold group-hover:text-purple-300 transition-colors">stafie.artist@gmail.com</div>
              </div>
            </a>

            <div className="bg-purple-500/5 border border-purple-500/20 rounded-2xl p-5">
              <p className="text-zinc-400 text-sm leading-relaxed">
                Perioadele de vârf (mai–septembrie, Crăciun, Revelion) se ocupă rapid. <span className="text-purple-300 font-semibold">Rezervă cu minimum 3 luni înainte</span> pentru a asigura data.
              </p>
            </div>
          </motion.div>

          {/* Social grid */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {socials.map((s, i) => {
              const Icon = s.icon
              return (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-zinc-900/60 border border-zinc-800/60 hover:border-zinc-600 rounded-2xl p-5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center flex-shrink-0">
                    <Icon className={`w-5 h-5 ${s.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold text-sm">{s.handle}</div>
                    <div className="text-zinc-500 text-xs">{s.sub}</div>
                  </div>
                  <div className="text-zinc-600 text-xs uppercase tracking-wider">Urmărește</div>
                </a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
