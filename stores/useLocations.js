import { defineStore } from 'pinia'

export const useLocationsStore = defineStore('locations', () => {
    const cities = ref([
        'Salt Lake City',
        'West Valley City',
        'Provo',
        'West Jordan',
        'Orem',
        'Sandy',
        'Ogden',
        'St. George',
        'Layton',
        'Taylorsville',
        'South Jordan',
        'Lehi',
        'Logan',
        'Murray',
        'Draper',
        'Bountiful',
        'Riverton',
        'Roy'
    ])
  
    return { cities }
})