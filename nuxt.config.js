// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { 
    enabled: false 
  },

  runtimeConfig: {
    shopifyHost: process.env.NUXT_SHOPIFY_STOREFRONT_HOST,
    shopifyAccessToken: process.env.NUXT_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  },

  ssr: true, 

  modules: [
    'nuxt-icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/apollo',
    'nuxt-headlessui',
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
    ['@pinia/nuxt', {
      autoImports: ['defineStore', 'acceptHMRUpdate']
    }],
  ],

  plugins: [
    '~/plugins/shopify.js',
  ],

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },

  // apollo: {
  //   clients: {
  //     default: {
  //       httpEndpoint: process.env.SHOPIFY_STOREFRONT_HOST,
  //       httpLinkOptions: {
  //         headers: {
  //           'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  //         }
  //       }
  //     }
  //   },
  // },

  components: [
    '~/components/blocks',
    '~/components/app',
  ],

  // imports: {
  //   dirs: [
  //     // 'composables',
  //     // 'store',
  //     // 'cms/**/composables',
  //     // 'cms/**/store',
  //     // 'client/**/composables',
  //     // 'client/**/store',
  //   ],
  // },

  headlessui: {
    prefix: 'Headless' // Change the default component prefix
  },

  image: {
    domains: ['cdn.shopify.com']
  },

  // css: [
  //   '@/styles/client.css',
  // ],
})