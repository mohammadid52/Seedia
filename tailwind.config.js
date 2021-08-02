// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
    textColor: ['dark', 'responsive', 'hover', 'focus'],
    backgroundColor: ['dark', 'responsive', 'hover', 'focus'],
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
