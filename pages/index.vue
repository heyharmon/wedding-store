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

const page = {
  blocks: [
      {
        id: 'j4l2tnl',
        name: 'NavNavbar',
        group: 'Navigation',
        data: {},
      },
      {
        id: 'slsn4l4',
        name: 'Hero',
        group: 'Hero',
        data: {
          'theme': 'theme-2',
          'paddingTop': '5xl',
          'paddingBottom': '5xl',
        },
      },
      {
        id: 'akl24jl5l',
        name: 'Feature',
        group: 'Feature',
        data: {},
      },
      {
        id: 'akjh245r',
        name: 'FeatureOffsetTwoColGrid',
        group: 'Feature',
        data: {},
      },
      {
        id: 'nmva3e4r',
        name: 'HeroVertical',
        group: 'Hero',
        data: {
          'theme': 'theme-1',
          'paddingTop': '5xl',
          'paddingBottom': 'none',
        },
      },
      {
        id: 'aklkh23l45',
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