// const themes = require('./tailwind/themes-plugin.js') 
// const forms = require('@tailwindcss/forms')

module.exports = {
  theme: {
    fontFamily: {
      // 'header': ['Cheltenham', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      'header': ['Canela', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      // 'sans': ['"Sharp Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    }
  },

  content: [
    "./components/app/AppButton.vue"
    // "./components/**/*.{js,vue,ts}",
    // "./layouts/**/*.vue",
    // "./pages/**/*.vue",
    // "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",
    // "./app.vue",
  ],

  plugins: [
    // Our own themeing plugin
    // https://www.protailwind.com/workshops/multi-theme-strategy
    // themes,
    
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}