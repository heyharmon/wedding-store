<template>
  <component 
    v-for="(block, index) in blocks" 
    :is="block.component"
    v-bind="block.data"
    :key="index"
  />
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const route = useRoute()
const pages = usePages()

let page = computed(() => {
  let slug = route.params.slug ?? 'homepage'

  return pages.find((page) => {
    return page.slug === slug
  })
})

let blocks = computed(() => {
  return page.value.blocks.map((block) => {
    const {id, name, group, data} = block;
    
    return {
      id: id,
      name: name,
      group: group,
      data: data,
      component: defineAsyncComponent(() => import(`../components/${group}/${name}.vue`))
    }
  })
})
</script>