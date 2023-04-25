<template>
  <component 
    v-for="(block, index) in blocks" 
    :is="block.component"
    v-bind="block.data"
    :key="index"
  />
</template>

<script setup>
import set from 'lodash/set';
import get from 'lodash/get';
import { defineAsyncComponent } from 'vue';

const route = useRoute()

const {data: page, pending, refresh} = await useAsyncData('page', () => $fetch('/api/page'))

// const pages = usePages()

// let page = computed(() => {
//   let slug = route.params.slug ?? 'homepage'

//   return pages.find((page) => {
//     return page.slug === slug
//   })
// })

let blocks = computed(() => {
  return page.value.blocks.map((block) => {
    const {name, group, data} = block;
    
    return {
      name: name,
      group: group,
      data: data,
      component: defineAsyncComponent(() => import(`../components/${group}/${name}.vue`))
    }
  })
})

// function getComponentProperty(component, path) {
//   return get(component, path, "");
// }

// function setComponentProperty(componentId, path, value) {
//   const componentIndex = page.components.findIndex(
//     c => c.props.id === componentId
//   );
//   const fullPath = `components[${componentIndex}].props.${path}`;
//   set(page, fullPath, value);
//   saveToLocalStorage();
//   return page;
// }

useHead({
  title: page.value.title
})
</script>