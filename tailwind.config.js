/** @type {import('tailwindcss').Config} */
import hero from './src/assets/bg-23.jpg'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
    "hero-img": `url("https://i.ibb.co/n7xLLDp/bg-23-1.jpg")`
      }
    },
  },
  plugins: [require("daisyui")],
}

