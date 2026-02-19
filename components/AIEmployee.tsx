'use client'

import { motion } from 'framer-motion'
import { Check, MessageCircle, Bot } from 'lucide-react'

const features = [
  "Răspunde la 'Cât costă?' în mai puțin de 1s",
  'Verifică disponibilitatea pe orice dată',
  'Trimite automat portfolio și mix-uri',
  'Notifică-te doar pentru cereri serioase',
]

const chatMessages = [
  {
    from: 'client',
    text: 'Bună! Ești liber pe 15 august pentru o nuntă?',
    time: '23:42',
  },
  {
    from: 'ai',
    text: 'Bună! Da, 15 august este disponibil. Pentru câte persoane este evenimentul și ce locație aveți în vedere?',
    time: '23:42',
    fast: true,
  },
  {
    from: 'client',
    text: '~200 persoane, sala Timișoara',
    time: '23:43',
  },
  {
    from: 'ai',
    text: 'Perfect! Îți trimit detalii și prețuri. Stafie va reveni în curând cu o ofertă personalizată.',
    time: '23:43',
  },
]

export default function AIEmployee() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Purple glow background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-900/20 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-900/40 border border-purple-500/30 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span className="text-purple-300 text-xs tracking-[0.2em] uppercase font-medium">
                NOU &middot; AI Employee
              </span>
            </div>

            <h2 className="font-bebas text-6xl md:text-7xl tracking-[0.05em] text-white leading-none mb-6">
              AI ASSISTANT<br />
              <span className="text-purple-400">24 / 7</span>
            </h2>

            <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-md">
              Clienții te întreabă la miezul nopții dacă ești liber pe 15 august.
              AI Employee răspunde instant, califică cererea și îți trimite notificare
              doar când e serios.
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-10">
              {features.map((feat, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-purple-900/50 border border-purple-500/40 flex items-center justify-center flex-shrink-0">
                    <Check size={11} className="text-purple-400" />
                  </div>
                  <span className="text-zinc-300 text-sm">{feat}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="https://wa.me/40746892506?text=Vreau%20să%20activez%20AI%20Employee%20pentru%20DJ%20Stafie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-700 to-violet-600 hover:from-purple-600 hover:to-violet-500 text-white font-semibold text-sm tracking-[0.1em] uppercase rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_50px_rgba(124,58,237,0.6)] hover:scale-105"
            >
              <MessageCircle size={18} />
              Activează AI Employee
            </a>
          </motion.div>

          {/* Right: Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div
              className="relative w-[280px] h-[580px] bg-zinc-950 rounded-[44px] border border-zinc-800 shadow-[0_0_60px_rgba(124,58,237,0.25)] overflow-hidden"
              style={{ boxShadow: '0 0 0 1px rgba(124,58,237,0.2), 0 0 60px rgba(124,58,237,0.2), inset 0 0 0 1px rgba(255,255,255,0.03)' }}
            >
              {/* Status bar */}
              <div className="h-10 bg-[#075E54] flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center">
                    <Bot size={14} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold leading-none">AI Stafie</div>
                    <div className="text-[#25D366] text-[10px] leading-tight">răspuns în 0.6s</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-white/40" />
                  <div className="w-1 h-1 rounded-full bg-white/40" />
                  <div className="w-1 h-1 rounded-full bg-white/40" />
                </div>
              </div>

              {/* Chat area */}
              <div
                className="flex-1 p-3 space-y-3 overflow-hidden"
                style={{ background: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3C/svg%3E") #0b141a', height: 'calc(100% - 100px)' }}
              >
                {chatMessages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.2 }}
                    className={`flex ${msg.from === 'client' ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3 py-2 ${
                        msg.from === 'client'
                          ? 'bg-zinc-800 rounded-tl-sm'
                          : 'bg-[#005C4B] rounded-tr-sm'
                      }`}
                    >
                      <p className="text-white text-[11px] leading-snug">{msg.text}</p>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-zinc-500 text-[9px]">{msg.time}</span>
                        {msg.from === 'ai' && (
                          <span className="text-[#25D366] text-[9px]">✓✓</span>
                        )}
                      </div>
                      {msg.fast && (
                        <div className="mt-1 inline-flex items-center gap-1 bg-purple-900/40 rounded-full px-2 py-0.5">
                          <div className="w-1 h-1 rounded-full bg-purple-400" />
                          <span className="text-purple-300 text-[9px]">AI</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input bar */}
              <div className="absolute bottom-0 left-0 right-0 h-14 bg-[#1f2c34] flex items-center px-3 gap-2">
                <div className="flex-1 bg-zinc-800 rounded-full h-9 flex items-center px-3">
                  <span className="text-zinc-600 text-[11px]">Scrie un mesaj...</span>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#00a884] flex items-center justify-center">
                  <MessageCircle size={16} className="text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
