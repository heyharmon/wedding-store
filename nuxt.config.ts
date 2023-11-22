// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: true, 
  
  modules: [
    'nuxt-icon',
    'nuxt-headlessui',
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
    // '@vueuse/nuxt',
    ['@pinia/nuxt', {
      autoImports: ['defineStore', 'acceptHMRUpdate']
    }],
  ],

  components: [
    '~/cms/editor/components',
    '~/cms/editor/components/Fields',
    '~/cms/editor/layouts',
    '~/cms/dashboard/components',
    '~/cms/designer/components',
    '~/client/components/Base',
    '~/components',
    '~/components/base',
  ],

  imports: {
    dirs: [
      'composables',
      'store',
      'cms/**/composables',
      'cms/**/store',
      'client/**/composables',
      'client/**/store',
    ],
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
