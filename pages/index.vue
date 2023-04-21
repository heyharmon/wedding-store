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
        group: 'Navigation',
        name: 'NavNavbar',
        data: {},
      },
      {
        id: 'slsn4l4',
        group: 'Hero',
        name: 'Hero',
        data: {
          'paddingTop': '5xl',
          'paddingBottom': '5xl',
        },
      },
      {
        id: 'akl24jl5l',
        group: 'Feature',
        name: 'Feature',
        data: {},
      },
      {
        id: 'akjh245r',
        group: 'Feature',
        name: 'FeatureOffsetTwoColGrid',
        data: {},
      },
      // {
      //   id: 'nmva3e4r',
      //   group: 'Hero',
      //   name: 'HeroVertical',
      //   data: {
      //     'theme': 'theme-2',
      //     'paddingTop': '5xl',
      //     'paddingBottom': 'none',
      //   },
      // },
      {
        id: 'aklkh23l45',
        group: 'Navigation',
        name: 'NavFooter',
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