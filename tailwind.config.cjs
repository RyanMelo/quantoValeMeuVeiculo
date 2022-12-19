/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary-color': '#0E48D8',
      'secondary-color': '#D9D9D9',
      'white': '#ffffff',
      'black': '#000000'
    }
  },
  plugins: [],
}
