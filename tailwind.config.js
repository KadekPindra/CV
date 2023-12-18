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
        geser : 'geser 1s ease-in-out',
      },
      keyframes : {
        geser : {
          '0%' : { transform : 'translateX(15rem)' },
          '100%' : { transform : 'translateX(0)'},
        },
      },
    },

    

  },

  plugins: [],
}
