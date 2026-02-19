'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Zap } from 'lucide-react'

const features = [
  'Răspunde la "Cât costă?" în mai puțin de 1 secundă',
  'Verifică disponibilitatea pe orice dată instant',
  'Trimite automat portfolio și mix-uri',
  'Notifică-te doar pentru cereri serioase',
]

const messages = [
  { from: 'client', text: 'Bună! Ești liber pe 15 august pentru o nuntă?', time: '23:12' },
  { from: 'ai', text: 'Bună! Da, 15 august este disponibil! Pentru câte persoane este evenimentul și ce locație aveți în vedere?', time: '23:12' },
  { from: 'client', text: '~180 persoane, Restaurant Timișoara', time: '23:13' },
  { from: 'ai', text: 'Perfect! Stafie va reveni cu o ofertă personalizată în curând. Îți trimit și câteva mix-uri ca să îți faci o idee despre stilul lui muzical.', time: '23:13' },
]

export default function AIEmployee() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-[#070707]">
      {/* Purple glow bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-700/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-xs font-bold text-purple-300 uppercase tracking-wider mb-6">
              <Zap className="w-3 h-3" />
              NOU · AI Employee
            </div>

            <h2 className="font-[family-name:var(--font-bebas)] text-4xl md:text-5xl tracking-wider text-white mb-4 leading-tight">
              Nu pierde nicio rezervare
            </h2>

            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
              Clienții te întreabă la miezul nopții dacă ești liber pe 15 august. AI Employee răspunde instant, califică cererea și îți trimite notificare doar când e serios.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-zinc-300">
                  <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { v: '< 1s', l: 'timp răspuns' },
                { v: '24/7', l: 'disponibil' },
                { v: '60%', l: 'mai puțin pierdut' },
              ].map((s, i) => (
                <div key={i} className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-3 text-center">
                  <div className="font-[family-name:var(--font-bebas)] text-2xl text-purple-300 tracking-wider">{s.v}</div>
                  <div className="text-[10px] text-zinc-500 mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>

            <motion.a
              href={`https://wa.me/40746892506?text=${encodeURIComponent('Bună! Vreau mai multe detalii despre AI Employee pentru DJ-ul meu.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl font-bold text-white text-sm uppercase tracking-wider"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Activează AI Employee
            </motion.a>
          </motion.div>

          {/* Right — Phone mockup */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative" style={{ width: 300, height: 600 }}>
              <div className="absolute inset-0 bg-zinc-900 rounded-[44px] border-[5px] border-zinc-700 shadow-2xl shadow-purple-900/30 overflow-hidden">
                {/* Dynamic island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />
                {/* Status bar */}
                <div className="absolute top-0 left-0 right-0 h-12 flex items-end justify-between px-5 pb-1 z-10">
                  <span className="text-white text-[10px] font-semibold">09:41</span>
                  <div className="flex items-center gap-1">
                    <div className="flex items-end gap-0.5">
                      {[2,3,4,5].map(h => <div key={h} className="w-0.5 bg-white rounded-sm" style={{ height: h * 3 }} />)}
                    </div>
                    <div className="w-5 h-2.5 border border-white rounded-sm relative ml-1">
                      <div className="absolute left-0.5 top-0.5 bottom-0.5 bg-white rounded-sm" style={{ width: '75%' }} />
                    </div>
                  </div>
                </div>
                {/* Chat header */}
                <div className="absolute top-12 left-0 right-0 h-12 bg-[#1a1a2e] border-b border-white/10 flex items-center px-4 gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center">
                    <span className="text-white text-[9px] font-bold">AI</span>
                  </div>
                  <div>
                    <div className="text-white text-xs font-semibold">AI Stafie</div>
                    <div className="text-green-400 text-[9px]">online · răspunde în 0.6s</div>
                  </div>
                </div>
                {/* Messages */}
                <div className="absolute top-24 left-0 right-0 bottom-14 overflow-hidden px-3 py-3 space-y-3">
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.3 }}
                      className={`flex ${msg.from === 'client' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[75%] px-3 py-2 rounded-2xl text-[10px] leading-relaxed ${
                        msg.from === 'client'
                          ? 'bg-purple-600 text-white rounded-br-sm'
                          : 'bg-zinc-800 text-zinc-200 rounded-bl-sm'
                      }`}>
                        {msg.text}
                        <div className="text-[8px] opacity-50 mt-1 text-right">{msg.time}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* Input bar */}
                <div className="absolute bottom-0 left-0 right-0 h-14 bg-[#1a1a2e] border-t border-white/10 flex items-center px-3 gap-2">
                  <div className="flex-1 bg-zinc-800 rounded-full px-3 py-1.5 text-[10px] text-zinc-500">Scrie un mesaj...</div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-violet-600 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                  </div>
                </div>
                {/* Home indicator */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/20 rounded-full" />
              </div>
              {/* Glow */}
              <div className="absolute inset-0 rounded-[44px] shadow-[0_0_60px_rgba(124,58,237,0.25)] pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
