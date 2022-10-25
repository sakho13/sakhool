/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        header: {
          dark: "#32332c",
          light: "#ffffff",
        },
        body: {
          dark: "#191919",
        },
      },
      fontFamily: {
        shirokuma: "shirokuma",
        yasashii: "yasashii",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
