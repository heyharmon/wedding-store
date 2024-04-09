<template>
  <BlockSection v-bind="section" class="overflow-hidden">
    <!-- Block wrapper -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8">

      <!-- Content -->
      <div class="mx-auto max-w-2xl text-center">
        <BaseContent v-bind="content" />
      </div>

      <div class="mt-16 flow-root sm:mt-24">
        <BaseImage v-if="content.image" v-bind="content.image" class="mx-auto w-full rounded-md shadow-2xl"/>
      </div>
    </div>
  </BlockSection>
</template>

<script setup lang="ts">
const props = defineProps({
  section: Object,
  content: Object,
  // content: {
  //   type: Object,
  //   default: () => ({
  //     pretitle: Object, 
  //     title: Object,
  //     body: Object,
  //     buttons: Array,
  //     image: Object,
  //   }),
  // },
})
</script>