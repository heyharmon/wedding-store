import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', () => {
    const isLoginModalOpen = ref(false)
  
    return { isLoginModalOpen }
  },
  {
    persist: true,
})