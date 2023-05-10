import pages from '~/server/pageData'

export const usePageStore = defineStore('page', {
  state: () => ({
    page: {},
    activeBlockId: null
  }),
  
  actions: {
    async show(slug) {
      
      const page = pages.find(
        (page) => page.slug === slug
      );
      
      this.page = page

      // await $fetch(`/api/pages?slug=${slug}`)
      //   .catch((e) => {
      //     console.log('Error...', e.data.message)
      //   })
      //   .then((response) => {
      //     console.log('Got page...', response)
      //   })
    }
  },
  getters: {
    activeBlock: (state) => {
      if (!state.activeBlockId) return

      return state.page.blocks.find(
        block => block.id === state.activeBlockId
      )
    }
  },
})

// export const usePageStore = defineStore('page', () => {d
//   const page = ref()

//   return { store }
// })

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePageStore, import.meta.hot));
}