import pages from '~/server/pages'

export const useEditorStore = defineStore('editor', {
  state: () => ({
    page: {},
    activeBlockId: null,
    // activeBlockId: '34lkj4',
    show: {
      blocksPanel: true,
      designPanel: false,
      editorPanel: false,
      thumbnailsPanel: true,
    },
    buttonModal: {
      open: false,
    },
    filesModal: {
      open: false,
      selectMultiple: false,
      targetProp: ''
    },
  }),
  
  getters: {
    activeBlock: (state) => {
      if (!state.activeBlockId) return

      return state.page.blocks.find(
        block => block.id === state.activeBlockId
      )
    },
  },
  
  actions: {
    async showPage(slug) {
      const page = pages.find((page) => page.slug === slug);
      this.page = page
    },

    showDefault() {
      this.activeBlockId = null

      this.show = {
        blocksPanel: true,
        designPanel: false,
        editorPanel: false,
        thumbnailsPanel: true,
      }
    },

    showEditorPanel(blockId) {
      this.activeBlockId = blockId
      
      this.show = {
        blocksPanel: false,
        designPanel: false,
        editorPanel: true,
        thumbnailsPanel: false,
      }
    },

    showDesignPanel() {
      this.activeBlockId = null
      
      this.show = {
        blocksPanel: false,
        designPanel: true,
        editorPanel: false,
        thumbnailsPanel: false,
      }
    },
  },
})

// export const usePageStore = defineStore('page', () => {d
//   const page = ref()

//   return { store }
// })

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useEditorStore, import.meta.hot));
}