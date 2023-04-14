// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: true, 
  
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-icon',
  ],

  css: [
    '@/assets/css/main.css'
  ],
  
  // build: {
  //   postcss: {
  //     postcssOptions: {
  //       plugins: {
  //         tailwindcss: {},
  //         autoprefixer: {},
  //       },
  //     },
  //   },
  // }
})
