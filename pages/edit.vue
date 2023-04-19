<template>
    <BlockEditor
      v-for="(block, index) in blocks"
      :key="index"
      :active="block.id === activeBlockId"
    >
        <component
          :is="block.component"
          v-bind="block.data"
          @click.native="toggleActiveBlockId(block.id)"
        />
    </BlockEditor>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import BlockEditor from '@/components/Editor/BlockEditor.vue'

let activeBlockId = ref('')

function toggleActiveBlockId(id) {
    this.activeBlockId = id;
}

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