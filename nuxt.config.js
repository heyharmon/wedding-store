// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  devtools: { 
    enabled: true,
    vscode: {},
  },

  runtimeConfig: {
    shopifyHost: process.env.NUXT_SHOPIFY_STOREFRONT_HOST,
    shopifyAccessToken: process.env.NUXT_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  },

  nitro: {
    prerender: {
      // enabled by default with nuxt generate, not required
      crawlLinks: true,
      // add any routes to prerender
      routes: ['/']
    }
  },

  site: {
    indexable: false,
    url: 'https://rentcrafted.com',
    name: 'Crafted | Wedding Rentals in Salt Lake City',
    description: 'Wedding rentals in Salt Lake City trusted by Utah couples. We have wedding arches, signage, walls games and more.',
    defaultLocale: 'en',
  },

  robots: {
    UserAgent: 'SiteAuditBot',
    Allow: '/',
  },

  sitemap: {
    hostname: 'https://rentcrafted.com',
  },

  content: {
    watch: {
      ws: {
        hostname: 'localhost'
      }
    }
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