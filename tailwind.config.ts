import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        coppaPink: '#FF4FD8',
        coppaPurple: '#6A00FF',
        coppaDark: '#0B0B12'
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.12)'
      }
    }
  },
  plugins: []
} satisfies Config;
