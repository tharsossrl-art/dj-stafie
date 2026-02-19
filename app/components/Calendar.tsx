'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, CalendarDays, RefreshCw } from 'lucide-react'

const DAYS_RO = ['Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ', 'Du']
const MONTHS_RO = [
  'Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie',
  'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie',
]

function toDateStr(year: number, month: number, day: number): string {
  return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate()
}

// Monday-first: 0=Mon … 6=Sun
function getFirstDayOffset(year: number, month: number): number {
  const jsDay = new Date(year, month, 1).getDay() // 0=Sun
  return (jsDay + 6) % 7
}

export default function AvailabilityCalendar() {
  const today = new Date()
  const [viewDate, setViewDate] = useState({ year: today.getFullYear(), month: today.getMonth() })
  const [busyDates, setBusyDates] = useState<Set<string>>(new Set())
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [hoveredDate, setHoveredDate] = useState<string | null>(null)

  const fetchAvailability = useCallback(async () => {
    setLoading(true)
    setError(false)
    try {
      const res = await fetch('/api/availability')
      if (!res.ok) throw new Error('fetch failed')
      const data = await res.json()
      setBusyDates(new Set(data.busyDates || []))
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchAvailability()
  }, [fetchAvailability])

  const navigateMonth = (dir: -1 | 1) => {
    setViewDate(prev => {
      let m = prev.month + dir
      let y = prev.year
      if (m < 0) { m = 11; y-- }
      if (m > 11) { m = 0; y++ }
      return { year: y, month: m }
    })
  }

  const handleDayClick = (dateStr: string, isBusy: boolean, isPast: boolean) => {
    if (isBusy || isPast) return

    setSelectedDate(dateStr)

    // Pre-fill the booking form date via custom event
    window.dispatchEvent(new CustomEvent('dj-select-date', { detail: { date: dateStr } }))

    // Scroll to booking form
    setTimeout(() => {
      const booking = document.getElementById('booking')
      if (booking) {
        booking.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 150)
  }

  const todayStr = toDateStr(today.getFullYear(), today.getMonth(), today.getDate())
  const { year, month } = viewDate
  const daysInMonth = getDaysInMonth(year, month)
  const firstOffset = getFirstDayOffset(year, month)

  // Build calendar grid (nulls = empty cells before first day)
  const cells: (number | null)[] = [
    ...Array(firstOffset).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ]
  // Pad to full weeks
  while (cells.length % 7 !== 0) cells.push(null)

  const canGoBack = year > today.getFullYear() || month > today.getMonth()

  return (
    <section id="calendar" className="py-24 px-4 sm:px-6 bg-[#070707] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-900/10 blur-[120px]" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-400 uppercase tracking-[0.4em] text-xs mb-3">Disponibilitate</p>
          <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-6xl tracking-wider text-white mb-3">
            Calendar
          </h2>
          <p className="text-zinc-400 text-sm max-w-sm mx-auto">
            Alege o dată liberă pentru evenimentul tău. Click pe zi → formular rezervare.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          className="flex items-center justify-center gap-6 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
            <span className="text-zinc-400 text-xs uppercase tracking-wider">Liber</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
            <span className="text-zinc-400 text-xs uppercase tracking-wider">Ocupat</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-zinc-700" />
            <span className="text-zinc-400 text-xs uppercase tracking-wider">Trecut</span>
          </div>
        </motion.div>

        {/* Calendar card */}
        <motion.div
          className="bg-zinc-900/40 border border-zinc-800/50 rounded-3xl p-5 sm:p-7 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          style={{ boxShadow: '0 0 60px rgba(124,58,237,0.08), 0 0 1px rgba(124,58,237,0.3)' }}
        >
          {/* Month navigation */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigateMonth(-1)}
              disabled={!canGoBack}
              className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800/60 disabled:opacity-20 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${year}-${month}`}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
                className="text-center"
              >
                <h3 className="font-[family-name:var(--font-bebas)] text-2xl tracking-widest text-white">
                  {MONTHS_RO[month]} {year}
                </h3>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={() => navigateMonth(1)}
              className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 mb-2">
            {DAYS_RO.map(d => (
              <div key={d} className="text-center text-zinc-600 text-xs uppercase tracking-wider py-1.5 font-medium">
                {d}
              </div>
            ))}
          </div>

          {/* Days grid */}
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
              >
                <RefreshCw className="w-6 h-6 text-purple-500" />
              </motion.div>
              <span className="ml-3 text-zinc-500 text-sm">Se încarcă disponibilitatea...</span>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${year}-${month}`}
                className="grid grid-cols-7 gap-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {cells.map((day, idx) => {
                  if (day === null) {
                    return <div key={`empty-${idx}`} />
                  }

                  const dateStr = toDateStr(year, month, day)
                  const isBusy = busyDates.has(dateStr)
                  const isPast = dateStr < todayStr
                  const isToday = dateStr === todayStr
                  const isSelected = dateStr === selectedDate
                  const isHovered = dateStr === hoveredDate

                  let cellClass =
                    'relative flex items-center justify-center aspect-square rounded-xl text-sm font-medium transition-all duration-200 select-none '

                  if (isPast) {
                    cellClass += 'text-zinc-700 cursor-not-allowed'
                  } else if (isBusy) {
                    cellClass +=
                      'bg-red-950/40 text-red-400 border border-red-900/40 cursor-not-allowed '
                    cellClass += isHovered ? 'shadow-[0_0_12px_rgba(239,68,68,0.2)]' : ''
                  } else {
                    // Free date
                    cellClass +=
                      'cursor-pointer border border-transparent '
                    if (isSelected) {
                      cellClass +=
                        'bg-purple-600/30 border-purple-500/60 text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]'
                    } else if (isHovered) {
                      cellClass +=
                        'bg-emerald-950/50 border-emerald-700/40 text-emerald-300 shadow-[0_0_16px_rgba(52,211,153,0.2)]'
                    } else {
                      cellClass += 'text-emerald-400 hover:bg-emerald-950/40'
                    }
                  }

                  return (
                    <motion.button
                      key={dateStr}
                      className={cellClass}
                      onClick={() => handleDayClick(dateStr, isBusy, isPast)}
                      onMouseEnter={() => setHoveredDate(dateStr)}
                      onMouseLeave={() => setHoveredDate(null)}
                      whileTap={!isBusy && !isPast ? { scale: 0.88 } : {}}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.008, duration: 0.2 }}
                    >
                      {/* Today indicator */}
                      {isToday && (
                        <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-purple-400" />
                      )}
                      {/* Busy dot */}
                      {isBusy && !isPast && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-red-500" />
                      )}
                      <span>{day}</span>
                    </motion.button>
                  )
                })}
              </motion.div>
            </AnimatePresence>
          )}

          {/* Error state */}
          {error && !loading && (
            <div className="mt-4 text-center">
              <p className="text-zinc-500 text-xs mb-2">Nu s-a putut încărca calendarul public</p>
              <button
                onClick={fetchAvailability}
                className="text-purple-400 text-xs hover:text-purple-300 underline transition-colors"
              >
                Încearcă din nou
              </button>
            </div>
          )}
        </motion.div>

        {/* Selected date info + CTA */}
        <AnimatePresence>
          {selectedDate && (
            <motion.div
              className="mt-5 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <div className="inline-flex items-center gap-3 bg-purple-900/20 border border-purple-700/30 rounded-2xl px-5 py-3">
                <CalendarDays className="w-4 h-4 text-purple-400" />
                <span className="text-white text-sm font-medium">
                  {new Date(selectedDate + 'T00:00:00').toLocaleDateString('ro-RO', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
                <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider px-2 py-0.5 bg-emerald-900/30 rounded-full">
                  Liber
                </span>
              </div>
              <p className="text-zinc-500 text-xs mt-2">↓ Formular pre-completat mai jos</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
