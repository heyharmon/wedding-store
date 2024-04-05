// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: true, 
  hooks: {
    'pages:extend': (pages) => {
      pages.push({
        name: 'pages',
        path: '/:path*',
        file: '@/pages/[path].vue',
      })
    },
  },

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
    // '~/modules/admin/components/*',
    // '~/cms/components',
    // '~/cms/editor/components',
    // '~/cms/editor/components/Fields',
    // '~/cms/dashboard/components',
    // '~/cms/designer/components',
    // '~/modules/client/components/Base',
    '~/components',
    '~/dictionaries',
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

  // image: {
  //   dir: 'public/images'
  // },

  css: [
    '@/styles/client.css',
    '@/modules/admin/styles/admin.css',
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