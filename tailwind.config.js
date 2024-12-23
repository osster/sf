/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    // "./plugins/**/*.{js,ts}",
    "./app.vue",
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
    },
    // screens: {
    //   'lg': '1440px'
    // },
    extend: {
      screens: {
        '2xs': { min: '300px' },
        'imv12': { min: '375px', max: '389px' }, // iPhone 12/13 mini
        // 'ipv12': { min: '390px', max: '390px' }, // Mobile iPhone 12/13 Pro.
        // 'ipmv11': { min: '414px', max: '414px' }, // Mobile iPhone 11 Max.
        // 'ipmv12': { min: '428px', max: '428px' }, // Mobile (iPhone 3 - iPhone XS Max).
        'ipv14': { min: '430px', max: '430px' }, // Mobile (iPhone 3 - iPhone XS Max).
        
        xs: { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
        sm: { min: '576px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
        'imh12': { min: '780px' },
        md: { min: '898px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
        lg: { min: '1200px' }, // Desktop smallest.
        xl: { min: '1440px' }, // Desktop wide.
        'portrait': {
          'raw': '(orientation: portrait)'
        },
        'landscape': {
          'raw': '(orientation: landscape)'
        },
      },
      fontSize: {
        '8px': '0.5rem',
        '9px': '0.5625rem',
        '10px': '0.625rem',
        '11px': '0.6875rem',
        '14px': '0.875rem',
        '15px': '0.9375rem',
        '16px': '1rem',
        '17px': '1.0625rem',
        '18px': '1.125rem',
        '19px': '1.1875rem',
        '21px': '1.3125rem',
        '28px': '1.75rem',
        '39px': '2.4375rem',
        '48px': '48px',
        '80px': '5rem'
      },
      lineHeight: {
        '12px': '0.75rem',
        '14px': '0.875rem',
        '16px': '1rem',
        '17px': '1.0625rem',
        '18px': '1.125rem',
        '19px': '1.1875rem',
        '20px': '1.25rem',
        '24px': '1.5rem',
        '26px': '1.625rem',
        '28px': '1.75rem',
        '41px': '2.565rem',
        '44px': '2.75rem',
        '63px': '3.937rem',
      },
      padding: {
        '14px': '14px',
      },
      margin: {
        '1px': '1px',
        '14px': '14px',
      },
      height: {
        '1024px': '1024px',
      }
    },
  },
  plugins: [],
}

