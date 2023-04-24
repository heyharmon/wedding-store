<template>
    <BlockEditor
      v-for="(block, index) in blocks"
      :key="index"
      :active="block.id === activeBlockId"
      :total="blocks.length"
      :index="index"
      :block="block"
      @move="handleMove"
      @delete="handleDelete"
      @close="handleClose"
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
  activeBlockId.value = id;
}

function handleMove({index, block, direction} = {}) {
  console.log('moving...')
}

function handleDelete(block) {
  console.log('deleting...')
}

function handleClose() {
  activeBlockId.value = ''
}

const page = {
  blocks: [
      {
        id: 'aeg34w556t',
        name: 'NavNavbar',
        group: 'Navigation',
        data: {},
      },
      {
        id: 'v40j3854thg',
        name: 'Hero',
        group: 'Hero',
        data: {
            'paddingTop': '6xl',
            'paddingBottom': '6xl',
        },
      },
      {
        id: 'mip024wtf',
        name: 'Feature',
        group: 'Feature',
        data: {},
      },
      {
        id: 'af24tq3g5v',
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