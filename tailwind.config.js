/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        ranchos:"'Rancho', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

