import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './src/**/*.{ts,tsx}', "./node_modules/flowbite-react/lib/**/*.js"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1024px',
        '2xl': '1024px',
      },
    },
    colors: {
      'primary': '#14213D',
      'primary-light': '#E5E5E5',
      'secondary': '#FF4F4F'
    },
    extend: {
      fontFamily: {
        'sans': ['var(--font-ibm)'],
        'serif-italic': ['var(--font-libre-italic)'],
        'logo': ['var(--font-rubik)'],
      },
      keyframes: {
        blink: {
          '0%, 100%': {opacity: 1},
          '50%': {opacity: 0}
        }
      },
      animation: {
        blink: 'blink 0.5s infinite'
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("tailwind-gradient-mask-image"),
    flowbite
  ],
}
