import { defineStore } from 'pinia'

export const useCollectionStore = defineStore('collections', () => {
    const collections = ref([
        {
            title: 'Arches',
            slug: 'arches',
            gid: 'gid://shopify/Collection/302115586214'
        },
        {
            title: 'Signage',
            slug: 'signage',
            gid: 'gid://shopify/Collection/302316322982'
        },
        {
            title: 'Walls',
            slug: 'walls',
            gid: 'gid://shopify/Collection/302316781734'
        },
        {
            title: 'Chairs',
            slug: 'chairs',
            gid: 'gid://shopify/Collection/302317076646'
        },
        {
            title: 'Tables',
            slug: 'tables',
            gid: 'gid://shopify/Collection/302317142182'
        },
        {
            title: 'Decor',
            slug: 'decor',
            gid: 'gid://shopify/Collection/302317207718'
        },
        {
            title: 'Games',
            slug: 'games',
            gid: 'gid://shopify/Collection/302317240486'
        },
    ])

    function getGidFromSlug(slug) {
        let collection = collections.value.find(collection => collection.slug === slug)
        return collection.gid
    }
  
    return { collections, getGidFromSlug }
  })