/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors:{
      'gray-dark': '#333',
      'gray': '#444',
      'gray-light': '#eee',
      'white-f': '#fff'
    },
    fontSize:{
      'm': '0.8em'
    },
    extend: {
      spacing:{
        '1.25': '5px',
        '2.25': '10px',
        '50': '200px',
        '25': '100px',
        '300': '1200px'
      },
      borderRadius:{
        '1.25': '5px'
      },
      maxWidth: {
        '9/10': '90%',
      }
    },
  },
  plugins: [],
}

