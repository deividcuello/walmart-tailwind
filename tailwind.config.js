/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors:{
      primary: '#0071DC',
      white: '#FFFFFF',
      yellow: '#FFC220',
      black: '#000000',
      gray: '#777777',
      green: '#2A8703',
      lightBlue: '#E6F1FC'
    },
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

