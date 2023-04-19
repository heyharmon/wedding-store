const themesPlugin = require('./tailwind/themes-plugin.js') 

module.exports = {
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

  plugins: [
    // Our own themeing plugin
    // https://www.protailwind.com/workshops/multi-theme-strategy
    themesPlugin,

    // Tailwind form styles
    require('@tailwindcss/forms'),

    // Generate safelist of classnames not to be purged
    // https://github.com/spatie/tailwind-safelist-generator
    // require('tailwind-safelist-generator')({
    //   path: './safelist.txt',
    //   patterns: [
    //     'pt-{padding}',
    //     'pb-{padding}',
    //   ],
    // }),
  ],
}