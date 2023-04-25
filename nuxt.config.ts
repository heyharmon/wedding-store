// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: true, 
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    'nuxt-headlessui',
    'nuxt-icon',
  ],

  components: [
    '~/components',
    {path: '~/components/Base'},
    {path: '~/components/Editor'},
  ],

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
