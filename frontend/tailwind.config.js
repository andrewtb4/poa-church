/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'poa-black': '#000000',
        'poa-dark': '#0E1E2B', // dark blue background on giving page
        'poa-white': '#FFFFFF',
        'poa-gray': '#F5F5F5',
        'poa-blue': '#2563EB',
        'poa-gold': '#D4AF37',
      },
      fontFamily: {
        'seasons': ['Seasons', 'serif'],
        'ppneue': ['"PP Neue Montreal"', 'sans-serif'],
        'sans': ['"PP Neue Montreal"', 'ui-sans-serif', 'system-ui'],
        'serif': ['Seasons', 'ui-serif', 'Georgia'],
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '3.5rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
      },
      letterSpacing: {
        'tight': '-0.02em',
        'wide': '0.05em',
      },
      lineHeight: {
        'tight': '1.1',
        'normal': '1.6',
      },
    },
  },
  plugins: [],
};