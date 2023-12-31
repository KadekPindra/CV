const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
        
      },
      animation : {
        geser : 'geser 500ms ease-in-out',
        putar : 'putar 700ms 1',
      },
      keyframes : {
        geser : {
          '0%' : { transform : 'translateX(23rem)' },
          '100%' : { transform : 'translateX(0)'},
        },
        putar : {
          'from' : {transform: 'rotate(0deg)'},
          'to' : {transform: 'rotate(360deg)'},
        }
      },
    },

    

  },

  plugins: [],
}
