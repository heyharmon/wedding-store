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
    {path: '~/base/components'},
    {path: '~/cms/editor/components'},
    {path: '~/cms/editor/components/Fields'},
    {path: '~/cms/editor/layouts'},
    {path: '~/cms/dashboard/components'},
    {path: '~/cms/designer/components'},
    {path: '~/components/Base'},
    {path: '~/components/Block'},
    '~/components',
  ],

  imports: {
    dirs: [
      'base/**/store',
      'base/composables',
      'cms/**/composables',
      'cms/**/store',
      'stores',
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
