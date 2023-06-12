// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: true, 
  
  modules: [
    'nuxt-icon',
    'nuxt-headlessui',
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
    ['@pinia/nuxt', {
      autoImports: ['defineStore', 'acceptHMRUpdate']
    }],
  ],

  components: [
    '~/nuxt-cms/editor/components',
    '~/nuxt-cms/editor/components/Fields',
    '~/nuxt-cms/editor/layouts',
    '~/nuxt-cms/dashboard/components',
    '~/nuxt-cms/designer/components',
    '~/nuxt-website/components/Base',
    '~/components',
    '~/components/base',
  ],

  imports: {
    dirs: [
      'composables',
      'store',
      'nuxt-cms/**/composables',
      'nuxt-cms/**/store',
      'nuxt-website/**/composables',
      'nuxt-website/**/store',
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
