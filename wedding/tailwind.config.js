/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Helvetica Neue', 'Helvetica', 'sans-serif'],
      serif: ['Abril Fatface', 'serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
