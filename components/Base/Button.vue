<template>
  <NuxtLink
    :to="href"
    @click="$emit('click')"
    class="
      inline-flex items-center gap-x-2
      text-sm font-semibold
      text-white
      bg-primary-600 
      hover:bg-primary-700
      focus-visible:outline-primary-700
      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
      rounded-md 
      shadow-sm
      px-4 py-3
    "
  >
    <Icon v-if="icon" :name="icon" class="order-first h-5 w-5" aria-hidden="true" />
    <slot>{{ label || '' }}</slot>
  </NuxtLink>
</template>
  
<script setup>
// Button
// <AppButton @click="onClickButton">Button</AppButton>

// Button as nuxt-link
// <AppButton to="/en/blog" rel="next">Link</AppButton>

// Button as anchor 
// <AppButton href="google.com" target="_blank" rel="external">Link</AppButton>

const props = defineProps({
    // onClick: {
    //   type: Function,
    //   required: true
    // },
    label: {
        type: String,
        default: null
    },
    icon: {
        type: String,
        default: null
    },
    href: {
        type: String,
        default: null
    }
})
</script>
