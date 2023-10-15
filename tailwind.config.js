/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "card-light-blue": "#eefdff",
        "electric-blue": "#90e9ef",
        "card-dark-blue": "#0c0d49",
        "duke-blue": "#000274",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      }, 
    },
  },
  plugins: [],
};
