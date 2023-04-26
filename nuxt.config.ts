// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: true, 
  
  modules: [
    'nuxt-headlessui',
    'nuxt-icon',
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    ['@pinia/nuxt', {autoImports: ['defineStore', 'acceptHMRUpdate']}]
  ],

  components: [
    '~/components',
    {path: '~/components/Base'},
    {path: '~/components/Editor'},
  ],

  imports: {
    dirs: ['stores'],
  },

  devtools: {
    enabled: false,
  },

  headlessui: {
    prefix: 'Headless' // Change the default component prefix
  },

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
