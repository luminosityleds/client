/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#eefdff',
        'footer-blue' : '#90E9EF'
      }, 
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      fontSize: {
        footerFontSize: ['32px']
      }
    },
  },
  plugins: [],
}