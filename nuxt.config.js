// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  components: [
    '~/components/blocks',
    '~/components/app',
  ],

  content: {
    watch: {
      ws: {
        hostname: 'localhost'
      }
    }
  },

  devtools: { 
    enabled: true,
    vscode: {},
  },

  headlessui: {
    prefix: 'Headless' // Change the default component prefix
  },

  image: {
    provider: 'netlify',
    domains: ['cdn.shopify.com'],
    netlify: {
      baseURL: '',
    },
  },

  modules: [
    'nuxt-icon',
    '@nuxtjs/seo',
    '@nuxt/image',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-headlessui',
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
    '@pinia-plugin-persistedstate/nuxt',
  ],

  nitro: {
    prerender: {
      // enabled by default with nuxt generate, not required
      crawlLinks: true,
      // add any routes to prerender
      routes: ['/']
    }
  },

  pinia: {
    storesDirs: ['./stores/**'],
  },

  plugins: [
    '~/plugins/shopify.js',
  ],

  runtimeConfig: {
    shopifyHost: process.env.NUXT_SHOPIFY_STOREFRONT_HOST,
    shopifyAccessToken: process.env.NUXT_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
  },

  site: {
    // indexable: false,
    url: 'https://rentcrafted.com',
    name: 'Crafted | Wedding Rentals in Salt Lake City',
    description: 'Wedding rentals in Salt Lake City trusted by Utah couples. We have wedding arches, signage, walls games and more.',
    defaultLocale: 'en',
  },

  sitemap: {
    hostname: 'https://rentcrafted.com',
  },

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
})