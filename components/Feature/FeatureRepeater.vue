<template>
  <BaseSection v-bind="section" class="overflow-hidden">
    <!-- Block wrapper -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8">

      <!-- Content -->
      <div class="mx-auto max-w-2xl lg:mx-0">
        <BaseText v-bind="content.pretitle" class="text-primary-600 font-semibold mb-4" />
        <BaseHeading v-bind="content.title" class="mb-6"/>
        <BaseText v-bind="content.body" class="leading-9 text-gray-600 mb-10"/>
        <BaseButtonGroup>
          <BaseButton v-for="button in content.buttons" v-bind="button"/>
        </BaseButtonGroup>
      </div>
      
      <!-- Features -->
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="content in features" class="flex flex-col">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <BaseImage v-bind="content.image.file" class="h-6 w-6 fill-white"/>
              </div>
              <BaseHeading v-bind="content.title"/>
            </dt>
            <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <BaseText v-bind="content.body" class="flex-auto mb-6"/>
              <BaseButtonGroup>
                <BaseButton v-for="button in content.buttons" v-bind="button" variant="text"/>
              </BaseButtonGroup>
            </dd>
          </div>
        </dl>
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
  features: Array,
})
</script>
