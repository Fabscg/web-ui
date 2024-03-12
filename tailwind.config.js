/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
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
