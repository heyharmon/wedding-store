<template>
  <BaseSection v-bind="section" class="overflow-hidden">
    <!-- Block wrapper -->
    <div class="mx-auto max-w-3xl px-6 lg:px-8">

      <!-- Content -->
      <div class="text-center">
        <BaseText v-bind="content.pretitle" class="text-primary-600 font-semibold mb-3" />
        <BaseHeading v-bind="content.title" class="mb-6"/>
        <BaseText v-bind="content.body" class="leading-9 text-gray-600"/>
        <BaseButtonGroup v-bind="content.buttons" class="mt-10"/>
        <!-- <BaseButtonGroup class="mt-10">
          <BaseButton v-for="button in content.buttons" v-bind="button"/>
        </BaseButtonGroup> -->
      </div>

      <BaseImage v-bind="content.image" class="flow-root mx-auto rounded-md shadow-2xl"/>
    </div>
  </BaseSection>
</template>

<script setup lang="ts">
const props = defineProps({
  section: Object,
  content: {
    type: Object,
    default: () => ({
      pretitle: Object, 
      title: Object,
      body: Object,
      buttons: Array,
      image: Object,
    }),
  },
})
</script>