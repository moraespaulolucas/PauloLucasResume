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
        current: 'currentcolor',
        'special-blue': '#0a1e5b',
        'special-red': '#cf2f3e',
        'special-white': '#f8f9fa',
        'special-black': '#3d3d3d'
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

