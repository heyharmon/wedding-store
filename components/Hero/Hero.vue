<template>
  <BlockWrapper :data-theme="theme" v-bind="padding">
    <!-- Bg image -->
    <BaseBackground v-bind="background"/>

    <div class="relative flex flex-col mx-auto max-w-3xl items-center px-6 text-center">
      <!-- Pretitle -->
      <BaseHeading v-if="pretitle" as="h2" size="base" class="pb-2">{{ pretitle }}</BaseHeading>

      <!-- <div v-if="pretitle" class="mb-8 flex justify-center">
        <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          {{ pretitle }}
        </div>
      </div> -->

      <!-- Title -->
      <BaseHeading as="h1">{{ title }}</BaseHeading>

      <!-- <InlineTextEditor id="034oj3h" @updated="" class="width-fit text-sm">
        <h1 class="text-5xl font-bold tracking-tight text-gray-900">{{ title }}</h1>
      </InlineTextEditor> -->

      <!-- <h1 class="text-5xl font-bold tracking-tight text-gray-900">
        <InlineTextEditor id="034oj3h" @updated="" class="width-fit text-sm">
          {{ title }}
        </InlineTextEditor>
      </h1> -->

      <!-- Subtitle -->
      <BaseText v-if="subtitle" size="xl" class="mt-6 leading-9 text-gray-600">{{ subtitle }}</BaseText>

      <!-- Button group -->
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <BaseButton to="/homepage" label="Homepage"/>
        <BaseButton variant="text" to="/page-1" label="Learn more" icon="heroicons:arrow-right"/>
      </div>
    </div>
  </BlockWrapper>
</template>

<script setup>
const props = defineProps({
  pretitle: String,
  title: String,
  subtitle: String,
  background: Object,
  theme: String,
  overlay: Boolean,
  padding: Object,
  // title: {
  //   type: String,
  //   default: 'The title'
  // },
  // subtitle: {
  //   type: String,
  //   default: 'The subtitle'
  // },
  // background: {
  //   type: Object,
  //   default: () => ({
  //     image: {},
  //     overlay: {}
  //   })
  // },
  // theme: String,
  // overlay: Boolean,
  // padding: Object,
})
</script>
