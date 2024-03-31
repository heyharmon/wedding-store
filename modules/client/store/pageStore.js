import pages from '~/server/pages'

export const usePageStore = defineStore('page', {
  state: () => ({
    page: {},
    blocks: {},
  }),
  
  actions: {
    showPage(path) {

    // this.page = {}
    return pages.find((page) => page.path == path)
    // this.blocks = page.blocks

    }
  },

  getters: {}
})

// export const usePageStore = defineStore('page', () => {d
//   const page = ref()

//   return { store }
// })

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePageStore, import.meta.hot));
}