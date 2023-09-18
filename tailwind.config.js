/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#90E9EF',
      },
      fontFamily: {
        'inter': ['Inter']
      },
      fontSize: {
        'footer-textSize': '1.66rem'
        
      },
      variants:{
        fill: ['hover', 'focus'],
      }


    },
  },
  plugins: [],
}