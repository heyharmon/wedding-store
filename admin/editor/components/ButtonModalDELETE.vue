<template>
  <AppModal @close="emit('close')">
    <!-- Tabs -->
    <div class="border-b border-gray-200">
      <nav class="-mb-px flex space-x-8 pl-6" aria-label="Tabs">
        <button @click="currentTab = 'internal'" :class="currentTab === 'internal' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'" class="group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium">
          <Icon name="heroicons:photo-solid" :class="currentTab === 'internal' ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500'" class="-ml-0.5 mr-2 h-5 w-5" aria-hidden="true" />
          <span>Internal</span>
        </button>

        <button @click="currentTab = 'external'" :class="currentTab === 'external' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'" class="group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium">
          <Icon name="heroicons:arrow-up-on-square-solid" :class="currentTab === 'external' ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500'" class="-ml-0.5 mr-2 h-5 w-5" aria-hidden="true" />
          <span>External</span>
        </button>
      </nav>
    </div>

    <!-- Pages -->
    <div v-if="currentTab === 'internal'" class="p-6">
      Internal
    </div>

    <!-- Upload -->
    <div v-if="currentTab === 'external'" class="p-6">
      External
    </div>
  </AppModal>
</template>

<script setup>
const emit = defineEmits(['close'])
const editorStore = useEditorStore()

// if (!editorStore.pages.length) {
//   await useAsyncData('pages', () => editorStore.listPages())
// }

let currentTab = ref('internal')

// function saveButton(button) {
//   let prop = editorStore.buttonModal.targetBlockProp
//   editorStore.activeBlock.data[prop].file = file
//   editorStore.filesModal.open = false
// }
</script>