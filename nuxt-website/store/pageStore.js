import pages from '~/server/pages'

export const usePageStore = defineStore('page', {
  state: () => ({
    page: {},
  }),
  
  actions: {
    async showPage(slug) {

      this.page = {}
      this.page = await pages.find((page) => page.slug === slug)
    },
  },

  getters: {},
})

// export const usePageStore = defineStore('page', () => {d
//   const page = ref()

//   return { store }
// })

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePageStore, import.meta.hot));
}