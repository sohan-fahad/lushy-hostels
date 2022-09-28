/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "primary": "#FF4E89",
        "secondary": "#2E2E2E",
        "white": "#FFFFFF",
        "black": "#000000"
      }
    },
  },
  plugins: [],
}
