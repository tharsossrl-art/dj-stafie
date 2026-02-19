'use client'

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Andreea & Mihai Popescu',
    event: 'Nuntă — Sala Exclusiv Timișoara',
    text: 'DJ Stafie a transformat nunta noastră într-o experiență de neuitat. Muzica a fost perfectă de la primul dans până la ultima melodie. Toți invitații au dansat, atmosfera a fost incredibilă. Recomandăm cu toată inima!',
    date: 'Septembrie 2024',
  },
  {
    name: 'Familia Ionescu',
    event: 'Botez — Restaurant Jazzissimo',
    text: 'Am ales DJ Stafie pentru botezul fiului nostru și a depășit orice așteptare. Muzica a fost adaptată perfect pentru toată lumea — de la bunici la tineri. Profesionalism total, selecție muzicală impecabilă.',
    date: 'Iulie 2024',
  },
  {
    name: 'Radu Constantin',
    event: 'Majorat — Club No Name Timișoara',
    text: 'Cel mai bun majorat din istoria grupului nostru! DJ Stafie a simțit exact ce vrem și energia din club a fost la maxim toată noaptea. Știe să citească publicul și să mențină vibe-ul incredibil de la început până la final.',
    date: 'Mai 2024',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-purple-900/20 border border-purple-500/20">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            <span className="text-purple-300 text-sm tracking-[0.15em] uppercase">
              150+ evenimente realizate cu succes
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-16"
        >
          <p className="text-purple-400 text-xs tracking-[0.3em] uppercase mb-3">Testimoniale</p>
          <h2 className="font-bebas text-7xl md:text-8xl tracking-[0.1em] text-white">
            CE SPUN CLIENȚII
          </h2>
          <div className="mt-4 w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-zinc-900/50 border border-zinc-800 hover:border-purple-500/30 rounded-2xl p-7 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]"
            >
              {/* Decorative quote mark */}
              <div
                className="absolute top-4 right-6 font-bebas text-7xl leading-none text-[#D4A017]/15 select-none pointer-events-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Stars — 5 purple squares */}
              <div className="flex gap-1.5 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 rounded-sm bg-purple-600"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-zinc-300 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-zinc-800 mb-5" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-700 to-violet-600 flex items-center justify-center flex-shrink-0">
                  <span className="font-bebas text-sm tracking-wider text-white">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-zinc-500 text-xs mt-0.5">{t.event}</div>
                </div>
              </div>

              {/* Date */}
              <div className="mt-4 text-zinc-600 text-xs tracking-widest">{t.date}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
