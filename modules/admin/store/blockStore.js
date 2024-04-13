import blocks from '~/server/blocks'

export const useBlockStore = defineStore('blocks', {
  state: () => ({
    blocks: [],
  }),
  
  actions: {
    async list() {
      this.blocks = blocks
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBlockStore, import.meta.hot));
}