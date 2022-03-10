module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          primaryBlue01: '#95C3EA',
          secondaryBlue01: '#3056A3'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/typography')]
};
