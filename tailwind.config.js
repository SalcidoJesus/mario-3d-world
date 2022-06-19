/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'wave-pattern': 'url(./src/img/wave-white.png)',
        'wave-pattern-dots': 'url(./src/img/pattern-white-dots.png)',
        'pattern-characters-red': 'url(./src/img/pattern-characters-red.png)',
        'character-mario': 'url(./src/img/character-l.png)',
        'wave-pink': 'url(./src/img/wave-pink.png)',
        'yellow-pink': 'url(./src/img/pattern-yellow-dots.png)',
      }),
      screens: {
        'xsm': '320px'
      }
    },
  },
  plugins: [],
}
