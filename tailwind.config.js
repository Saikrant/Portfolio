/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F2EB',
        white: '#FDFCF9',
        ink: '#0D0D0D',
        'ink-muted': '#4A4A4A',
        'ink-light': '#9A9A9A',
        accent: '#C8410A',
        'accent-light': '#F0724A',
        'accent-pale': '#FDF0EB',
        border: '#E0DDD6',
        'card-bg': '#EDEAE3',
        dark: '#0D0D0D',
        'dark-card': '#1A1A1A',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Outfit', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'float-delayed': 'float-delayed 5s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'pulse-green': 'pulse-green 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
