<template>
    <!-- <Hero padding-top="6xl" padding-bottom="6xl"/> -->
    <!-- <Feature/> -->

    <div>
        <component 
            v-for="(block, index) in blocks" 
            :is="block.component"
            v-bind="block.data"
            :key="index"
        />
    </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const page = {
  blocks: [
      {
          "component": "NavNavbar",
          "group": "Navigation",
          "data": {},
      },
      {
          "component": "Hero",
          "group": "Hero",
          "data": {
              "paddingTop": "6xl",
              "paddingBottom": "6xl",
          },
      },
      {
          "component": "Feature",
          "group": "Feature",
          "data": {},
      },
      {
          "component": "NavFooter",
          "group": "Navigation",
          "data": {},
      },
  ]
}

let blocks = []

blocks = page.blocks.map((block) => {
  const {component, group, data} = block;
  
  return {
    data: data,
    component: defineAsyncComponent(() => import(`../components/${group}/${component}.vue`))
  }
})
</script>