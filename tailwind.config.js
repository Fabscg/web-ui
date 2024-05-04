/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "/images/**/*.{png,jpg,jpeg,gif,svg}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'mono': [ 'Cutive Mono', 'monospace'],
        'display': ['Grechen Fuemen', 'cursive']
      }
    },
  },
  plugins: [],
}
