<template>
  <div class="margin-bottom-sm">
    <label v-if="label" class="block text-sm font-medium leading-6 text-gray-900" :for="label">{{ label }}</label>
    
    <div class="mt-2">
      <ImageField v-bind="image"/>
    </div>

    <div class="mt-2 group">
      <SwitchGroup as="div" class="flex items-center cursor-pointer">
        <SwitchLabel as="span" class="flex-1 text-xs font-medium text-gray-900 py-4">
          Overlay
        </SwitchLabel>

        <!-- https://simonkollross.de/posts/vuejs-using-v-model-with-objects-for-custom-components -->
        <Switch 
          v-bind="overlay" 
          :class="[overlay ? 'bg-indigo-600' : 'bg-gray-200']"
          class="group-hover:bg-indigo-400 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
        >
          <span 
            aria-hidden="true" 
            :class="[overlay ? 'translate-x-5' : 'translate-x-0']" 
            class="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
          />
        </Switch>
      </SwitchGroup>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'Background'
  },
  image: {
    type: Object,
  },
  overlay: {
    type: Boolean
  },
})
</script>
