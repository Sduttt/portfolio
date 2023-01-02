/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    screens: {
      "md": "770px",
      "sm": "420px"
    },
    fontFamily: {
      'zen': ['Zen Dots', 'cursive'],
      'body': ['Secular One', 'sans-serif'],
      'nav': ['Michroma', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
