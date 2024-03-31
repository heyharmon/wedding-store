<template>
  <!-- <component 
    v-for="(block, index) in blocks" 
    :is="block.component"
    v-bind="block.data"
    :key="index"
  /> -->

  <!-- <Block v-for="(block, index) in store.page.blocks" :key="index" v-bind="block"/> -->
  <Block v-if="page" v-for="block in page.blocks" :key="block.id" v-bind="block"/>
  
  <!-- <pre v-if="page">Blocks: {{ page.blocks }}</pre> -->
  <!-- <pre>Page: {{ page }}</pre> -->

  <!-- <BaseButtonGroup>
      <BaseButton to="/">Homepage</BaseButton>
      <BaseButton to="/about">About</BaseButton>
      <BaseButton to="/about/contact">Contact</BaseButton>
  </BaseButtonGroup> -->
</template>

<script setup>
// import { defineAsyncComponent } from 'vue';
import Block from '@/components/Block/Block.vue'
import { usePageStore } from '@/store/pageStore.js'

const route = useRoute()
const store = usePageStore()

console.log('path', route.path)
console.log('fullPath', route.fullPath)

// let path = computed(() => {
//   return "/" + route.params.path.join("/");
// })

const { data: page, pending: pagePending, error: pageError } = await useAsyncData('page', () =>
    store.showPage(route.fullPath)
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
</script>~/store/pageStore.js