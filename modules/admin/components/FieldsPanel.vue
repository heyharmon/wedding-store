<template>
  <nav class="w-[22rem] overflow-y-auto rounded-lg border drop-shadow-sm bg-white no-scrollbar ml-4">
    <!-- Panel top -->
    <div class="flex items-center justify-between border-b px-4 py-3">
      <p class="font-medium">{{ fields.title }}</p>
      <button @click="store.showDefault()" type="button" class="inline-flex items-center rounded-md border border-gray-300 p-[6px] hover:bg-gray-100 active:translate-y-px">
        <Icon name="heroicons:x-mark" class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </button>
    </div>

    <!-- Fields -->
    <div v-if="fields">
      <!-- Tabs -->
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex">
          <button 
            v-for="tab in ['content', 'style']" :key="tab"
            @click="activeTab = tab"
            :class="tab === activeTab ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'" 
            class="w-1/2 border-b-2 py-4 px-1 capitalize text-center text-xs font-medium"
          >
            {{ tab }}
          </button>
        </nav>
      </div>

      <!-- Fields -->
      <div class="flex flex-col gap-y-5 px-4 py-6">
        <Field 
          v-if="activeTab === 'content'"
          v-for="(field, index) in fields.content"
          :key="index"
          v-bind="field"
        />

        <Field 
          v-if="activeTab === 'style'"
          v-for="(field, index) in fields.style"
          :key="index"
          v-bind="field"
        />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useEditorStore } from '../store/editorStore'
import Field from '@/modules/admin/components/Field.vue'

const store = useEditorStore()
const activeTab = ref('content')
// const { fields } = await import(`~/modules/client/components/Hero/fields/index.js`)
import { fields } from '@/components/blocks/Hero/fields/index.js'
</script>