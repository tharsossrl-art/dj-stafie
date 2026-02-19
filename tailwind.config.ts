import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['var(--font-bebas)', 'Bebas Neue', 'sans-serif'],
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      colors: {
        purple: {
          400: '#A855F7',
          500: '#9333EA',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
          950: '#2E1065',
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 6s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      boxShadow: {
        'purple-glow': '0 0 40px rgba(124,58,237,0.3)',
        'purple-glow-strong': '0 0 60px rgba(124,58,237,0.5)',
      },
    },
  },
  plugins: [],
}
export default config
