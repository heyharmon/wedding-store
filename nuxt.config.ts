// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: true, 
  
  modules: [
    'nuxt-icon',
    'nuxt-headlessui',
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    ['@pinia/nuxt', {
      autoImports: ['defineStore', 'acceptHMRUpdate']
    }],
    "@nuxt/image"
  ],

  components: [
    // '~/modules/admin/*',
    // '~/cms/components',
    // '~/cms/editor/components',
    // '~/cms/editor/components/Fields',
    // '~/cms/dashboard/components',
    // '~/cms/designer/components',
    // '~/client/components/Base',
    // '~/components',
    // '~/components/base',
  ],

  imports: {
    dirs: [
      // 'composables',
      // 'store',
      // 'cms/**/composables',
      // 'cms/**/store',
      // 'client/**/composables',
      // 'client/**/store',
    ],
  },

  devtools: {
    enabled: false,
  },

  headlessui: {
    prefix: 'Headless' // Change the default component prefix
  },

  css: [
    '@/modules/admin/styles/admin.css',
    '@/modules/client/styles/client.css'
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