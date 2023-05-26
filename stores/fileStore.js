import files from '~/server/files'

export const useFileStore = defineStore('files', {
  state: () => ({
    files: [],
  }),
  
  actions: {
    async index() {
      this.files = files
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFileStore, import.meta.hot));
}