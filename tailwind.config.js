/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      out: ["Outfit"],
      young: ["Young Serif"],
    },
    extend: {
      colors: {
        black: "#312E2C",
        "dark-gray": "#5F564D",
        "cream": "#F3E5D7",
        "light-pink": "#FFF7FB",
        "purple": "#7A284E",
        "broun": "#854632",
      },
    },
  },
  plugins: [],
};
