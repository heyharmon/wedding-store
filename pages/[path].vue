<template>
  <div>
    <Block v-if="page" v-for="block in page.blocks" :key="block.id" v-bind="block"/>
  </div>
</template>

<script setup>
import Block from '@/components/Block.vue'
import { usePageStore } from '@/store/pageStore.js'

const route = useRoute()
const store = usePageStore()

const { data: page, pending: pagePending, error: pageError } = await useAsyncData('page', () =>
    store.showPage(route.path)
);

// const { data } = await useAsyncData('page', () => store.showPage(route.fullPath))
// await useAsyncData('page', () => store.showPage(route.fullPath))
// const {data: page, pending, refresh} = await useAsyncData('page', () => $fetch(`/api/pages?slug=${route.params.slug}`))

// let blocks = store.page.blocks.map((block) => {
  // const {id, name, group, data} = block;
  
  // return {
  //   id: id,
  //   name: name,
  //   group: group,
  //   data: data,
  //   component: defineAsyncComponent(() => import(`@/client/components/${group}/${name}.vue`))
  // }
// })

// let blocks = computed(() => {
//   return store.page.blocks.map((block) => {
//     const {name, group, data} = block;
    
//     return {
//       name: name,
//       group: group,
//       data: data,
//       component: defineAsyncComponent(() => import(`../components/${group}/${name}.vue`))
//     }
//   })
// })

// useHead({
//   title: store.page.title
// })
</script>