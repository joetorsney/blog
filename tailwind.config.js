/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    colors: {
      'primary': '#14213D',
      'primary-light': '#E5E5E5',
      // 'secondary': '#E54B4B'
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
    require('@tailwindcss/typography')
  ],
}
