import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'S T A F I E — DJ Timișoara',
  description: 'DJ Stafie — Nunți, Botez, Majorat, Club Events în Timișoara. Experiență din 2013, evenimente de neuitat.',
  keywords: ['DJ Timișoara', 'DJ nuntă', 'DJ botez', 'DJ majorat', 'DJ club', 'Stafie', 'evenimente Timișoara'],
  openGraph: {
    title: 'S T A F I E — DJ Timișoara',
    description: 'DJ Stafie — Nunți, Botez, Majorat, Club Events în Timișoara',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#7C3AED',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className={`${inter.className} bg-[#070707] text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
