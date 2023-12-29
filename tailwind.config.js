/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "card-light-blue": "#eefdff",
        "card-sky-blue": "#88dbe1",
        "electric-blue": "#90e9ef",
        "card-dark-blue": "#0c0d49",
        "sapphire-blue": "#0005ff",
        "charcoal-black": "#131313",
        "duke-blue": "#000274",
        "suva-grey": "#8D8D8D",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      }, 
    },
  },
  plugins: [],
};
