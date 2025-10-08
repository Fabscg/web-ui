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
      },
      keyframes: {
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInRight: 'fadeInRight 0.6s ease-out forwards',
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
