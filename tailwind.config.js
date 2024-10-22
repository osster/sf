/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/*.vue",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      'sf-white': '#ffffff',
      'sf-black': '#000000',
      'sf-gray': '#c9c9c9',
      'sf-light': '#ebebeb',
    },
    fontFamily: {
      'sans': ['Waldenburg', 'Helvetica', 'Arial', 'sans-serif']
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '2.5xl': '1.75rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '4.5xl': '2.45rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '7.5xl': '5rem',
      '8xl': '6rem',
      '9xl': '8rem'
    },
    screens: {
      'lg': '1440px'
    },
    extend: {},
  },
  plugins: [],
}

