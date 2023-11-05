/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      animation:{
        'spin-slow': 'spin 3s linear infinite',
        'myani': 'mykeyone 5s linear infinite alternate',
        'myrotate': 'mykeytwo 5s linear infinite',
        'yourani': 'mykeythree 5s linear infinite'
      },
      keyframes:{
        mykeyone:{
          '0%':{transfrom:'translate(0)'},
          '50%':{transfrom:'translate(300px)'},
          '100%':{transfrom:'translate(300px,300px)'}
        },
        mykeytwo:{
          'from':{transfrom:'rotate(0deg)'},
          'to':{transfrom:'rotate(360deg)'}
        },
        mykeythree:{
          '0%,100%':{transfrom:'rotate(0deg)'},
          '50%':{transfrom:'rotate(-1turn)'}
        }
      },

      colors:{
        primary:"blue",
        secondary:"silver",
        info:"skyblue",
        success:"lime",
        danger:"red"
      },

      fontFamily:{
        aria:["Arial",'sans-serif'],
        times:"Times New Roman",
        mono:"monospace"
      }

    },
  },
  plugins: [],
}