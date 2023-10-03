/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Firacode: "Fira Code"
      },
      colors: {
        "PasteGreen":"#A5FFAF" ,
        "BalticSea": "#2A2630"
      }
    },
  },
  plugins: [],
}