/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          50: '#f5f6fa',
          900: '#0b0e1a',   // page background
          800: '#111527',   // panel background
          700: '#1a1f36',   // card background
          600: '#252b47',   // border/hover
          500: '#343c63',   // subtle border
        },
        accent: {
          DEFAULT: '#7c6cf6', // primary purple
          light: '#9d8cff',
          dark: '#5b4bd6',
        },
        cyan: {
          DEFAULT: '#3ddcd7',
        },
        success: '#3fd68c',
        warning: '#f5b855',
        danger: '#f2617a',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(124,108,246,0.15), 0 8px 24px -8px rgba(124,108,246,0.35)',
      },
      borderRadius: {
        xl2: '1rem',
      },
    },
  },
  plugins: [],
}
