// Add opacity variations of color
// Alternative: https://tailwindcss.com/blog/tailwindcss-v3-1#easier-css-variable-color-configuration
// function withOpacity(variableName) {
//   return ({ opacityValue }) => {
//     if (opacityValue !== undefined) {
//       return `rgba(var(${variableName}), ${opacityValue})`
//     }
//     return `rgb(var(${variableName}))`
//   }
// }

module.exports = {
  // mode: 'jit',
  darkMode: false,

  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
          500: 'var(--primary-500)',
          600: 'var(--primary-600)',
          700: 'var(--primary-700)',
          800: 'var(--primary-800)',
          900: 'var(--primary-900)',
        }
        
        // primary: {
        //   // Tailwind violet
        //   DEFAULT: '#7c3aed',
        //   50: '#f5f3ff',
        //   100: '#ede9fe',
        //   200: '#ddd6fe',
        //   300: '#c4b5fd',
        //   400: '#a78bfa',
        //   500: '#8b5cf6',
        //   600: '#7c3aed',
        //   700: '#6d28d9',
        //   800: '#5b21b6',
        //   900: '#4c1d95',
        //   950: '#2e1065',

        //   // Tailwind teal
        //   // DEFAULT: '#0d9488',
        //   // 50: '#f0fdfa',
        //   // 100: '#ccfbf1',
        //   // 200: '#99f6e4',
        //   // 300: '#5eead4',
        //   // 400: '#2dd4bf',
        //   // 500: '#14b8a6',
        //   // 600: '#0d9488',
        //   // 700: '#0f766e',
        //   // 800: '#115e59',
        //   // 900: '#134e4a',
        //   // 950: '#042f2e',
        // },
        // gray: {
        //   // Tailwind slate
        //   DEFAULT: '#475569',
        //   50:  '#f8fafc',
        //   100: '#f1f5f9',
        //   200: '#e2e8f0',
        //   300: '#cbd5e1',
        //   400: '#94a3b8',
        //   500: '#64748b',
        //   600: '#475569',
        //   700: '#334155',
        //   800: '#1e293b',
        //   900: '#0f172a',
        //   950: '#020617',
        // }
      },
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
    // Tailwind form styles
    require("@tailwindcss/forms"),

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