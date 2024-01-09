import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './src/**/*.{ts,tsx}', "./node_modules/flowbite-react/lib/**/*.js"],
  theme: {
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
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    flowbite
  ],
}
