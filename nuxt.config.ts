// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: true, 
  
  modules: [
    'nuxt-icon',
    'nuxt-headlessui',
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
    '@formkit/nuxt',
    ['@pinia/nuxt', {
      autoImports: ['defineStore', 'acceptHMRUpdate']
    }],
  ],

  components: [
    {path: '~/app/components'},
    {path: '~/admin/editor/components'},
    {path: '~/admin/editor/components/Fields'},
    {path: '~/admin/editor/layouts'},
    {path: '~/admin/dashboard/components'},
    {path: '~/admin/designer/components'},
    {path: '~/components/Base'},
    {path: '~/components/Block'},
    '~/components',
  ],

  imports: {
    dirs: [
      'admin/**/composables',
      'admin/**/store',
      'app/**/store',
      'app/composables',
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
