'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, Phone, MapPin, Users, MessageSquare, ChevronDown, Clock, AlertCircle } from 'lucide-react'

export default function Booking() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    type: '',
    location: '',
    guests: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `*Cerere Rezervare DJ Stafie*

Nume: ${form.name}
Telefon: ${form.phone}
Data eveniment: ${form.date}
Tip eveniment: ${form.type}
Locație: ${form.location}
Nr. invitați: ${form.guests}
${form.message ? `Mesaj: ${form.message}` : ''}

Trimis de pe djstafie.ro`

    const encoded = encodeURIComponent(text)
    window.open(`https://wa.me/40746892506?text=${encoded}`, '_blank')
  }

  const inputClass =
    'w-full bg-zinc-900/80 border border-zinc-800 focus:border-purple-500/60 text-white placeholder-zinc-600 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 focus:shadow-[0_0_15px_rgba(124,58,237,0.15)]'
  const labelClass = 'block text-zinc-400 text-xs tracking-widest uppercase mb-2'
  const iconClass = 'absolute left-3 top-1/2 -translate-y-1/2 text-zinc-600'

  return (
    <section id="booking" className="py-24 px-4 relative bg-[#0a0a0a]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
      
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-purple-400 text-xs tracking-[0.3em] uppercase mb-3">Contactează-mă</p>
          <h2 className="font-bebas text-7xl md:text-8xl tracking-[0.1em] text-white">
            REZERVĂ O DATĂ
          </h2>
          <div className="mt-4 w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto" />
          <p className="mt-6 text-zinc-500 text-sm tracking-wider">
            Completează formularul — confirmare în maxim 2 ore
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 shadow-[0_0_60px_rgba(124,58,237,0.1)]"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Row 1: Nume + Telefon */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Nume complet *</label>
                <div className="relative">
                  <User size={15} className={iconClass} />
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Prenume Nume"
                    className={`${inputClass} pl-9`}
                  />
                </div>
              </div>
              <div>
                <label className={labelClass}>Telefon *</label>
                <div className="relative">
                  <Phone size={15} className={iconClass} />
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+40 7XX XXX XXX"
                    className={`${inputClass} pl-9`}
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Data + Tip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Data evenimentului *</label>
                <div className="relative">
                  <Calendar size={15} className={iconClass} />
                  <input
                    type="date"
                    name="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    className={`${inputClass} pl-9 [color-scheme:dark]`}
                  />
                </div>
              </div>
              <div>
                <label className={labelClass}>Tip eveniment *</label>
                <div className="relative">
                  <select
                    name="type"
                    required
                    value={form.type}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none cursor-pointer`}
                  >
                    <option value="" disabled>Alege tipul</option>
                    <option value="Nuntă">Nuntă</option>
                    <option value="Botez">Botez</option>
                    <option value="Majorat">Majorat</option>
                    <option value="Club Event">Club Event</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Altul">Altul</option>
                  </select>
                  <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Row 3: Locatie + Invitati */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClass}>Locație eveniment *</label>
                <div className="relative">
                  <MapPin size={15} className={iconClass} />
                  <input
                    type="text"
                    name="location"
                    required
                    value={form.location}
                    onChange={handleChange}
                    placeholder="Sala / Localitate"
                    className={`${inputClass} pl-9`}
                  />
                </div>
              </div>
              <div>
                <label className={labelClass}>Nr. invitați</label>
                <div className="relative">
                  <Users size={15} className={iconClass} />
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className={`${inputClass} pl-9 appearance-none cursor-pointer`}
                  >
                    <option value="">Aproximativ...</option>
                    <option value="sub 50">Sub 50</option>
                    <option value="50-100">50–100</option>
                    <option value="100-200">100–200</option>
                    <option value="200+">200+</option>
                  </select>
                  <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-600 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className={labelClass}>Mesaj / Detalii</label>
              <div className="relative">
                <MessageSquare size={15} className="absolute left-3 top-3.5 text-zinc-600" />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Orice detalii utile despre eveniment..."
                  rows={4}
                  className={`${inputClass} pl-9 resize-none`}
                />
              </div>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 shimmer-btn text-white font-bold text-sm tracking-[0.2em] uppercase rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] active:scale-[0.98]"
              >
                TRIMITE PE WHATSAPP
              </button>
            </div>

            {/* Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2 text-zinc-600 text-xs">
                <Clock size={13} className="text-purple-500/60" />
                Confirmare în maxim 2 ore
              </div>
              <div className="flex items-center gap-2 text-zinc-600 text-xs">
                <AlertCircle size={13} className="text-[#D4A017]/60" />
                Disponibilitate limitată — rezervă din timp
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
