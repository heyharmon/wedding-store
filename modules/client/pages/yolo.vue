<template>
  <!-- <component 
    v-for="(block, index) in blocks" 
    :is="block.component"
    v-bind="block.data"
    :key="index"
  /> -->

  <!-- <Block v-for="(block, index) in store.page.blocks" :key="index" v-bind="block"/> -->
  <Block v-if="store.blocks" v-for="block in store.blocks" :key="block.id" v-bind="block"/>
</template>

<script setup>
// import { defineAsyncComponent } from 'vue';
import Block from '@/client/components/Block/Block.vue'
// import { usePageStore } from '@/client/stores/pageStore.js'

const route = useRoute()
const store = usePageStore()

// const { data } = await useAsyncData('page', () => store.showPage(route.params.slug))
await useAsyncData('page', () => store.showPage(route.params.slug))
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