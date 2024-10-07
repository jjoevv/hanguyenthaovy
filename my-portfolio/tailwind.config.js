/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'night': '#01110A',
        'brunswick-green': '#134338',
        'dark-green': '#05220b',
        'spring-green': '#16f98a',

        'cambridge-blue': '#73ba9b',
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
      },
     
    },
  },
  plugins: [],
}

