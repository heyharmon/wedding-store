/** @type {import('tailwindcss').Config} */
module.exports = {
  // mode: 'jit',
  darkMode: false,

  content: [
    // Content to be purged
    './safelist.txt',
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './validators/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  
  // safelist: [
  //   './validators/*.js'
  //   {pattern: '/pt-./'},
  //   {pattern: '/pb-./'}
  // ],

  theme: {
    // colors: {
    //   'color-white': '#ffffff',
    //   'color-black': '#000000',
    //   'color-primary': '#ff77e9',
    //   'color-secondary': '#3ab7bf',
    //   'color-accent-1': '#3f3cbb',
    //   'color-accent-2': '#121063',
    //   'color-accent-3': '#565584',
    //   'color-accent-4': '#ecebff',
    // },

    // fontFamily: {
    //   'font-primary': '',
    //   'font-secondary': '',
    // },

    fontSize: {
      xs:    ['var(--font-size-xs)', { lineHeight: '1' }],
      sm:    ['var(--font-size-sm)', { lineHeight: '1' }],
      base:  ['var(--font-size-base)', { lineHeight: '1' }],
      lg:    ['var(--font-size-lg)', { lineHeight: '1' }],
      xl:    ['var(--font-size-xl)', { lineHeight: '1' }],
      '2xl': ['var(--font-size-2xl)', { lineHeight: '1' }],
      '3xl': ['var(--font-size-3xl)', { lineHeight: '1' }],
      '4xl': ['var(--font-size-4xl)', { lineHeight: '1' }],
      '5xl': ['var(--font-size-5xl)', { lineHeight: '1' }],
      '6xl': ['var(--font-size-6xl)', { lineHeight: '1' }],
      '7xl': ['var(--font-size-7xl)', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    
    spacing: {
      0:   '0',
      px:  '1px',
      0.5: 'var(--spacing-05)',
      1:   'var(--spacing-1)',
      1.5: 'var(--spacing-05)',
      2:   'var(--spacing-2)',
      2.5: 'var(--spacing-25)',
      3:   'var(--spacing-3)',
      3.5: 'var(--spacing-35)',
      4:   'var(--spacing-4)',
      5:   'var(--spacing-5)',
      6:   'var(--spacing-6)',
      7:   'var(--spacing-7)',
      8:   'var(--spacing-8)',
      9:   'var(--spacing-9)',
      10:  'var(--spacing-10)',
      11:  'var(--spacing-11)',
      12:  'var(--spacing-12)',
      14:  'var(--spacing-14)',
      16:  'var(--spacing-16)',
      20:  'var(--spacing-20)',
      24:  'var(--spacing-24)',
      28:  'var(--spacing-28)',
      32:  'var(--spacing-32)',
      36:  'var(--spacing-36)',
      40:  'var(--spacing-40)',
      44:  'var(--spacing-44)',
      48:  'var(--spacing-48)',
      52:  'var(--spacing-52)',
      56:  'var(--spacing-56)',
      60:  'var(--spacing-60)',
      64:  'var(--spacing-64)',
      72:  'var(--spacing-72)',
      80:  'var(--spacing-80)',
      96:  'var(--spacing-96)',
    },
  },

  variants: {
    extend: {}
  },

  plugins: [
    // Generate safelist of classnames not to be purged
    // https://github.com/spatie/tailwind-safelist-generator
    require('tailwind-safelist-generator')({
      path: './safelist.txt',
      patterns: [
        'pt-{padding}',
        'pb-{padding}',
      ],
    }),
  ],
}

// export const getRGBColor = (hex, type) => {
//   let color = hex.replace(/#/g, "")
//   // rgb values
//   var r = parseInt(color.substr(0, 2), 16)
//   var g = parseInt(color.substr(2, 2), 16)
//   var b = parseInt(color.substr(4, 2), 16)

//   return `--color-${type}: ${r}, ${g}, ${b};`
// }