const themesPlugin = require('@/tailwind/themes-plugin.js') 


module.exports = {
  // mode: 'jit',
  darkMode: false,

  theme: {
    extend: {
      colors: {
        primary: {
          50:  'rgb( var(--primary-50)  / <alpha-value>)',
          100: 'rgb( var(--primary-100) / <alpha-value>)',
          200: 'rgb( var(--primary-200) / <alpha-value>)',
          300: 'rgb( var(--primary-300) / <alpha-value>)',
          400: 'rgb( var(--primary-400) / <alpha-value>)',
          500: 'rgb( var(--primary-500) / <alpha-value>)',
          600: 'rgb( var(--primary-600) / <alpha-value>)',
          700: 'rgb( var(--primary-700) / <alpha-value>)',
          800: 'rgb( var(--primary-800) / <alpha-value>)',
          900: 'rgb( var(--primary-900) / <alpha-value>)',
        }
      }
    },

    fontSize: {
      xs:    ['var(--font-size-xs)', { lineHeight: '1' }],
      sm:    ['var(--font-size-sm)', { lineHeight: '1.25' }],
      base:  ['var(--font-size-base)', { lineHeight: '1.25' }],
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

    // padding: {
    //   0:   '0',
    //   0.5: 'var(--spacing-05)',
    //   1:   'var(--spacing-1)',
    //   2:   'var(--spacing-2)',
    //   3:   'var(--spacing-3)',
    //   4:   'var(--spacing-4)',
    //   6:   'var(--spacing-6)',
    //   9:   'var(--spacing-9)',
    //   14:  'var(--spacing-14)',
    //   28:  'var(--spacing-28)',
    //   32:  'var(--spacing-32)',
    //   40:  'var(--spacing-40)',
    //   44:  'var(--spacing-44)',
    //   52:  'var(--spacing-52)',
    //   56:  'var(--spacing-56)',
    //   60:  'var(--spacing-60)',
    // },
    
    padding: {
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

    // fontFamily: {
    //   'font-primary': '',
    //   'font-secondary': '',
    // },
  },

  variants: {
    extend: {}
  },

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

  plugins: [
    // Our own themeing plugin
    // require('@/tailwind/themes-plugin'),
    themesPlugin,

    // Tailwind form styles
    require('@tailwindcss/forms'),

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