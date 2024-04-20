/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    container : {
      center: true
    },
    screens: {
      '2xs': '384px',
      'xs': '512px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        current: 'currentcolor'
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 }
        }
      },
      animation: {
        blinking: "blink 1s step-end infinite"
      }
    },
  },
  plugins: [],
}

