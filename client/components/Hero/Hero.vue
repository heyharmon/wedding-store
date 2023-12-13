<template>
  <BaseSection v-bind="section">
    <div class="flex flex-col gap-16 sm:gap-24 relative mx-auto max-w-7xl px-6 lg:px-8">
        <div :class="`${InvertStyles[invert]}`" class="mx-auto max-w-3xl text-center">
          <BaseText v-if="pretitle" v-bind="pretitle" class="text-primary-600 font-semibold mb-3" />
          <BaseHeading v-bind="title" class="mb-6"/>
          <BaseText v-if="subtitle" v-bind="subtitle" class="leading-9 text-gray-600"/>
          <BaseButtonGroup class="mt-10">
            <BaseButton v-for="button in buttons" v-bind="button"/>
          </BaseButtonGroup>
        </div>

        <BaseImage v-bind="image" class="flow-root mx-auto rounded-md shadow-2xl"/>
      </div>
  </BaseSection>
</template>

<script setup>
import BaseSection from '~/client/components/Base/BaseSection.vue'
import BaseText from '~/client/components/Base/BaseText.vue'
import BaseHeading from '~/client/components/Base/BaseHeading.vue'
import BaseButtonGroup from '~/client/components/Base/BaseButtonGroup.vue'
import BaseButton from '~/client/components/Base/BaseButton.vue'
import BaseImage from '~/client/components/Base/BaseImage.vue'

import { InvertStyles } from '~/client/dictionaries/InvertStyles.js'

const props = defineProps({
  
  pretitle: Object,
  title: Object,
  subtitle: Object,
  buttons: Array,
  image: Object,
  
  section: Object,

  invert: {
    type: Boolean,
    default: false,
  },
})

// const props = defineProps({
//   theme: String,
//   pretitle: Object,
//   title: Object,
//   subtitle: Object,
//   buttons: Array,
//   image: Object,
//   background: Object,
//   padding: Object,
//   invert: {
//     type: Boolean,
//     default: false,
//   },
// })
</script>
