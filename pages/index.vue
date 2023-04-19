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
        id: 1,
        name: 'NavNavbar',
        group: 'Navigation',
        data: {},
      },
      {
        id: 2,
        name: 'Hero',
        group: 'Hero',
        data: {
            'paddingTop': '6xl',
            'paddingBottom': '6xl',
        },
      },
      {
        id: 3,
        name: 'Feature',
        group: 'Feature',
        data: {},
      },
      {
        id: 4,
        name: 'NavFooter',
        group: 'Navigation',
        data: {},
      },
  ]
}

let blocks = []

blocks = page.blocks.map((block) => {
  const {id, name, group, data} = block;
  
  return {
    id: id,
    name: name,
    group: group,
    data: data,
    component: defineAsyncComponent(() => import(`../components/${group}/${name}.vue`))
  }
})
</script>