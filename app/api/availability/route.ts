import { NextResponse } from 'next/server'

// 🔧 Stafie: înlocuiește cu calendar ID-ul tău public Google Calendar
// Mergi la Google Calendar → Settings → Calendar settings → "Calendar ID"
const CALENDAR_ID = 'stafie.dj@gmail.com'
const ICAL_URL = `https://calendar.google.com/calendar/ical/${encodeURIComponent(CALENDAR_ID)}/public/basic.ics`

interface CalendarEvent {
  start: string // YYYY-MM-DD
  end: string   // YYYY-MM-DD (exclusive for all-day events)
  summary: string
}

function parseIcalDate(value: string): string | null {
  // All-day: 20240315
  const allDay = value.match(/^(\d{4})(\d{2})(\d{2})$/)
  if (allDay) return `${allDay[1]}-${allDay[2]}-${allDay[3]}`

  // DateTime: 20240315T120000Z or 20240315T140000
  const dt = value.match(/^(\d{4})(\d{2})(\d{2})T/)
  if (dt) return `${dt[1]}-${dt[2]}-${dt[3]}`

  return null
}

function parseIcal(text: string): CalendarEvent[] {
  const events: CalendarEvent[] = []

  // Unfold lines (iCal spec: long lines wrapped with CRLF + space)
  const unfolded = text.replace(/\r\n[ \t]/g, '').replace(/\n[ \t]/g, '')
  const lines = unfolded.split(/\r?\n/)

  let inEvent = false
  let current: Partial<CalendarEvent> & { startRaw?: string; endRaw?: string } = {}

  for (const line of lines) {
    const trimmed = line.trim()

    if (trimmed === 'BEGIN:VEVENT') {
      inEvent = true
      current = {}
      continue
    }

    if (trimmed === 'END:VEVENT') {
      if (current.startRaw && current.endRaw) {
        const start = parseIcalDate(current.startRaw)
        const end = parseIcalDate(current.endRaw)
        if (start && end) {
          events.push({
            start,
            end,
            summary: current.summary || 'Ocupat',
          })
        }
      } else if (current.startRaw && !current.endRaw) {
        // Single-day event with only DTSTART
        const start = parseIcalDate(current.startRaw)
        if (start) {
          events.push({ start, end: start, summary: current.summary || 'Ocupat' })
        }
      }
      inEvent = false
      current = {}
      continue
    }

    if (!inEvent) continue

    // Parse properties (handle ;params:value format)
    const colonIdx = trimmed.indexOf(':')
    if (colonIdx === -1) continue

    const key = trimmed.substring(0, colonIdx).split(';')[0].toUpperCase()
    const value = trimmed.substring(colonIdx + 1)

    if (key === 'DTSTART') {
      current.startRaw = value
    } else if (key === 'DTEND') {
      current.endRaw = value
    } else if (key === 'SUMMARY') {
      current.summary = value
    }
  }

  return events
}

function getBusyDates(events: CalendarEvent[]): string[] {
  const busy = new Set<string>()

  for (const event of events) {
    const start = new Date(event.start + 'T00:00:00')
    const end = new Date(event.end + 'T00:00:00')

    // For all-day events in iCal, DTEND is exclusive (next day)
    // We mark from start up to (but not including) end
    const current = new Date(start)
    while (current < end) {
      busy.add(current.toISOString().split('T')[0])
      current.setDate(current.getDate() + 1)
    }

    // If start === end (single-day), mark that day
    if (event.start === event.end) {
      busy.add(event.start)
    }
  }

  return Array.from(busy).sort()
}

export async function GET() {
  try {
    const res = await fetch(ICAL_URL, {
      next: { revalidate: 3600 }, // cache for 1 hour
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; DJ-Stafie-Calendar/1.0)',
      },
    })

    if (!res.ok) {
      console.error('iCal fetch failed:', res.status, res.statusText)
      // Return empty (no events = all dates look free) rather than crashing
      return NextResponse.json({ busyDates: [], source: 'error', calendarId: CALENDAR_ID })
    }

    const text = await res.text()
    const events = parseIcal(text)
    const busyDates = getBusyDates(events)

    return NextResponse.json({
      busyDates,
      totalEvents: events.length,
      source: 'google-calendar',
      calendarId: CALENDAR_ID,
    })
  } catch (err) {
    console.error('Calendar fetch error:', err)
    return NextResponse.json({ busyDates: [], source: 'error' })
  }
}
