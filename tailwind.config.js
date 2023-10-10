/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'blue': 'hsl(219, 85%, 26%)',
      'lightBlue': 'hsl(211, 68%, 94%)',
    },
  },
  plugins: [],
}

