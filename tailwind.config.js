/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'wave-pattern': 'url(./assets/wave-white.png)',
        'wave-pattern-dots': 'url(./assets/pattern-white-dots.png)',
        'pattern-characters-red': 'url(./assets/pattern-characters-red.png)',
        'character-mario': 'url(./assets/character-l.png)',
        'wave-pink': 'url(./assets/wave-pink.png)',
        'yellow-pink': 'url(./assets/pattern-yellow-dots.png)',
      }),
      screens: {
        'xsm': '320px'
      }
    },
  },
  plugins: [],
}
