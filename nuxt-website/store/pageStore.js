import pages from '~/server/pages'

export const usePageStore = defineStore('page', {
  state: () => ({
    page: {},
  }),
  
  actions: {
    async showPage(slug) {
      const page = pages.find((page) => page.slug === slug);
      this.page = page
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