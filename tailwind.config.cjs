/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primary:"rgb(var(--color-primary))",
      bgWhite:"rgb(var(--color-white))",
      black:{
        100:"rgba(var(--color-black))",
        90:"rgba(var(--color-black), 0.9)",
        75:"rgba(var(--color-black), 0.75)",
        50:"rgba(var(--color-black), 0.5)",
        25:"rgba(var(--color-black), 0.25)",
        10:"rgba(var(--color-black), 0.1)"
      }
    }
  },
  plugins: [],
}
