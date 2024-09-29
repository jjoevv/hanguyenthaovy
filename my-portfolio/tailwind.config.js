/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        'blue-dark': '#3b5cca',
        'cyan-light': '#80fff3',
        'cyan': '#bffff9',
        'black-light': '#333333',
        'blue-light': '#6a8abc',
        'cyan-dark': '#4ce1e4',
        'cyan-lighter': '#d5ffff',
      },
      rotate: {
        '270': '270deg',
      }
    },
  },
  plugins: [],
}
