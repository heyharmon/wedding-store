import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', () => {
  const isLoginModalOpen = ref(false)
  const isCartModalOpen = ref(false)

  return { 
    isLoginModalOpen, 
    isCartModalOpen 
  }
})