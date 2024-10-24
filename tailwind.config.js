/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./components/**/*.{js,vue,ts}",
    // "./layouts/**/*.vue",
    // "./pages/**/*.vue",
    // "./plugins/**/*.{js,ts}",
    // "./app.vue",
    // "./error.vue",
    // './**/*.{js,ts,jsx,tsx,html}',
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
      '3xs': '0.5625rem', // 9px
      '2xs': '0.6875rem', // 11px
      xs: '0.75rem',      //
      sm: '0.875rem',     //
      base: '1rem',       // 16px
      lg: '1.1875rem',    // 19px
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
      '9xl': '8rem',
      
      '9px': '9px',
      '11px': '11px',
      '16px': '16px',
      '21px': '21px',
      '28px': '28px',
      '48px': '48px',
    },
    screens: {
      'lg': '1440px'
    },
    extend: {
      padding: {
        '14px': '14px',
      },
      height: {
        '1024px': '1024px',
      }
    },
  },
  plugins: [],
}

