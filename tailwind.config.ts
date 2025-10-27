import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        crm: {
          dark: '#0f172a',
          medium: '#1e293b',
          light: '#334155',
          accent: '#d4a574',
        },
        disc: {
          d: '#ef4444',
          i: '#f59e0b',
          s: '#10b981',
          c: '#3b82f6',
        },
      },
    },
  },
  plugins: [],
}

export default config
