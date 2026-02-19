'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock } from 'lucide-react'

export default function Booking() {
  const [form, setForm] = useState({ nume: '', telefon: '', data: '', tip: '', locatie: '', persoane: '', mesaj: '' })

  // Listen for date selection from Calendar component
  useEffect(() => {
    const handler = (e: CustomEvent<{ date: string }>) => {
      setForm(prev => ({ ...prev, data: e.detail.date }))
    }
    window.addEventListener('dj-select-date', handler as EventListener)
    return () => window.removeEventListener('dj-select-date', handler as EventListener)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Bună Stafie! Vreau să rezerv o dată.\n\nNume: ${form.nume}\nTelefon: ${form.telefon}\nData: ${form.data}\nTip eveniment: ${form.tip}\nLocație: ${form.locatie}\nNr. invitați: ${form.persoane}${form.mesaj ? `\nDetalii: ${form.mesaj}` : ''}`
    window.open(`https://wa.me/40746892506?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const inputClass = "w-full bg-zinc-900/60 border border-zinc-700/60 focus:border-purple-500/60 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors placeholder:text-zinc-600"

  return (
    <section id="booking" className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-400 uppercase tracking-[0.4em] text-xs mb-3">Disponibilitate</p>
          <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-6xl tracking-wider text-white mb-3">
            Rezervă o Dată
          </h2>
          <p className="text-zinc-400 text-sm">Perioadele de vârf se ocupă rapid — rezervă din timp.</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-zinc-900/40 border border-zinc-800/50 rounded-3xl p-6 md:p-8 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-zinc-500 uppercase tracking-wider mb-1.5 block">Nume *</label>
              <input required className={inputClass} placeholder="Nume complet" value={form.nume} onChange={e => setForm({...form, nume: e.target.value})} />
            </div>
            <div>
              <label className="text-xs text-zinc-500 uppercase tracking-wider mb-1.5 block">Telefon *</label>
              <input required className={inputClass} placeholder="+40 7XX XXX XXX" value={form.telefon} onChange={e => setForm({...form, telefon: e.target.value})} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-zinc-500 uppercase tracking-wider mb-1.5 block">Data evenimentului *</label>
              <div className="relative">
                <input required type="date" className={inputClass + ' pr-10'} value={form.data} onChange={e => setForm({...form, data: e.target.value})} />
                <Calendar className="absolute right-3 top-3.5 w-4 h-4 text-zinc-600 pointer-events-none" />
              </div>
            </div>
            <div>
              <label className="text-xs text-zinc-500 uppercase tracking-wider mb-1.5 block">Tip eveniment *</label>
              <select required className={inputClass} value={form.tip} onChange={e => setForm({...form, tip: e.target.value})}>
                <option value="">Selectează</option>
                <option>Nuntă</option>
                <option>Botez</option>
                <option>Majorat</option>
                <option>Club Event</option>
                <option>Corporate</option>
                <option>Altul</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-zinc-500 uppercase tracking-wider mb-1.5 block">Locație *</label>
              <input required className={inputClass} placeholder="Sala / Club / Locație" value={form.locatie} onChange={e => setForm({...form, locatie: e.target.value})} />
            </div>
            <div>
              <label className="text-xs text-zinc-500 uppercase tracking-wider mb-1.5 block">Nr. invitați</label>
              <select className={inputClass} value={form.persoane} onChange={e => setForm({...form, persoane: e.target.value})}>
                <option value="">Selectează</option>
                <option>Sub 50</option>
                <option>50 – 100</option>
                <option>100 – 200</option>
                <option>200+</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-xs text-zinc-500 uppercase tracking-wider mb-1.5 block">Detalii (opțional)</label>
            <textarea rows={3} className={inputClass + ' resize-none'} placeholder="Preferințe muzicale, cerințe speciale..." value={form.mesaj} onChange={e => setForm({...form, mesaj: e.target.value})} />
          </div>

          <motion.button
            type="submit"
            className="relative w-full py-4 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl font-bold text-white uppercase tracking-widest text-sm overflow-hidden group"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              Trimite pe WhatsApp
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          </motion.button>

          <p className="text-center text-zinc-600 text-xs">Confirmare în maxim 2 ore în timpul programului</p>
        </motion.form>
      </div>
    </section>
  )
}
