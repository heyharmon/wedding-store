import pages from '~/server/pages'

export const useEditorStore = defineStore('editor', {
  state: () => ({
    page: {},
    // activeBlockId: null,
    activeBlockId: 'slsn4l4',
    buttonModal: {
      open: false,
    },
    filesModal: {
      open: false,
      selectMultiple: false,
      targetBlockProp: ''
    },
  }),
  
  getters: {
    activeBlock: (state) => {
      if (!state.activeBlockId) return

      return state.page.blocks.find(
        block => block.id === state.activeBlockId
      )
    }
  },
  
  actions: {
    async show(slug) {
      const page = pages.find((page) => page.slug === slug);
      this.page = page
    },

    setBlockProp(prop, data) {
      console.log(this.activeBlock.data[prop])
      this.activeBlock.data[prop] = data
    }
  },
})

// export const usePageStore = defineStore('page', () => {d
//   const page = ref()

//   return { store }
// })

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useEditorStore, import.meta.hot));
}