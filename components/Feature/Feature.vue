<template>
  <BaseSection v-bind="section" class="overflow-hidden">
    <!-- Block wrapper -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8">

      <!-- Content -->
      <div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div class="lg:pr-8 lg:py-32">
          <div class="lg:max-w-lg">
            <BaseText v-bind="content.pretitle" class="text-primary-600 font-semibold mb-4" />
            <BaseHeading v-bind="content.title" class="mb-6"/>
            <BaseText v-bind="content.body" class="leading-9 text-gray-600 mb-10"/>
            <BaseButtonGroup>
              <BaseButton v-for="button in content.buttons" v-bind="button"/>
            </BaseButtonGroup>
          </div>
        </div>
        <BaseImage v-bind="content.image.file" class="w-[48rem] sm:w-[57rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"/>
      </div>

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
