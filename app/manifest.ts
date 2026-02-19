import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'S T A F I E — DJ Timișoara',
    short_name: 'STAFIE',
    description: 'DJ Stafie — Nunți, Botez, Majorat, Club Events în Timișoara',
    start_url: '/',
    display: 'standalone',
    background_color: '#070707',
    theme_color: '#7C3AED',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
