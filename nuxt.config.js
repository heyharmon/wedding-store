// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: true, 

  devtools: { 
    enabled: true
  },

  runtimeConfig: {
    shopifyHost: process.env.NUXT_SHOPIFY_STOREFRONT_HOST,
    shopifyAccessToken: process.env.NUXT_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  },

  site: {
    url: 'https://rentcrafted.com',
    name: 'Crafted | Wedding Rentals in Salt Lake City',
    description: 'Discover better wedding rentals in Salt Lake City using Crafted. We offer wedding arches, signage, walls, chairs, tables, decor, and games to make your special day unforgettable. Our inventory includes elegant and affordable options. Trusted by Utah couples, our dedicated team ensures your wedding is seamless and beautiful. Explore our selection and book today for the perfect Salt Lake City wedding experience.',
    defaultLocale: 'en',
  },

  modules: [
    'nuxt-icon',
    '@nuxtjs/seo',
    '@nuxt/image',
    '@vueuse/nuxt',
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