/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fff9f1",
        matcha: "#a8c686",
        pink: "#f6caca",
        coffee: "#4b2e2e",
      },
      fontFamily: {
        almendra: ["Almendra SC", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};