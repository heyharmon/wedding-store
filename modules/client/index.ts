import { defineNuxtModule } from '@nuxt/kit'
import { resolve, join } from 'path'

export default defineNuxtModule({
  meta: {
    // Usually the npm package name of your module - in this case a local modal
    name: 'client-module',
    // // The key in `nuxt.config` that holds the
    // configKey: 'client-module',
    // // Compatibility constraints
    // compatibility: {
    //   // Semver version of supported nuxt versions
    //   nuxt: '^3.9.0',
    // },
  },
  setup(options, nuxt) {
    // Auto register components
    nuxt.hook('components:dirs', (dirs) => {
      dirs.push({
        path: join(__dirname, 'components'),
      })
    })

    // Auto register composables
    // nuxt.hook('imports:dirs', (dirs) => {
    //   dirs.push(resolve(__dirname, './composables'))
    // })

    // Auto register pages
    nuxt.hook('pages:extend', (pages) => {
    //   pages.push({
    //     name: 'homepage',
    //     path: '/',
    //     file: resolve(__dirname, './pages/homepage.vue'),
    //   })

      pages.push({
        name: 'pages',
        path: '/hello',
        file: resolve(__dirname, './pages/page.vue'),
      })
    })
  },
})
