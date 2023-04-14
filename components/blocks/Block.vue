<template>
  <section class="relative bg-white">
    <!-- Background image w/ overlay-->
    <!-- <div aria-hidden="true" class="absolute inset-0 overflow-hidden ">
      <img src="https://tailwindui.com/img/ecommerce-images/home-page-01-hero-full-width.jpg" alt="" class="h-full w-full object-cover object-center" />
    </div>
    <div aria-hidden="true" class="absolute inset-0 bg-white opacity-90" /> -->

    <!-- Background  -->
    <div aria-hidden="true" class="absolute inset-0 overflow-hidden bg-[url('~/assets/images/blurry-gradient-haikei.svg')] bg-cover bg-center opacity-30"></div>

    <div 
      :class="[
        PaddingTop[paddingTop], 
        PaddingBottom[paddingBottom]
      ]"  
      class="relative flex flex-col mx-auto max-w-3xl __items-center __px-6 text-center"
    >
      <slot/>
    </div>
  </section>
</template>

<script setup>
//   import { computed } from 'vue'
import { PaddingTop, PaddingBottom } from '@/dictionaries/Padding.js'

const props = defineProps({
  paddingTop: {
    type: String,
    default: 'lg',
    // validator: (value) => {
    //   return Object.keys(PaddingTop).includes(value)
    // }
  },
  paddingBottom: {
    type: String,
    default: 'lg',
    // validator: (value) => {
    //   return Object.keys(PaddingBottom).includes(value)
    // }
  },
})

// const PaddingTop = {
//     'sm': 'pt-10',
//     'md': 'pt-20',
//     'base': 'pt-32',
//     'lg': 'pt-36',
// }

// const PaddingBottom = {
//     'sm': 'pb-10',
//     'md': 'pb-20',
//     'base': 'pb-32',
//     'lg': 'pb-36',
// }

// const paddingTop = computed(() => {
//   return PaddingTop[props.padding_top]
// })

// const paddingBottom = computed(() => {
//   return PaddingBottom[props.padding_bottom]
// })

// const classBinds = computed(() => {
//   let classSet = ''

//   classSet = appendToSet('pt-' + props.paddingTop, classSet)
//   classSet = appendToSet('pb-' + props.paddingbottom, classSet)
  
//   return classSet
// })

// const classBinds = computed(() => {
//   let classSet = ''

//   classSet = appendToSet('pt-' + props.paddingTop, classSet)
//   classSet = appendToSet('pb-' + props.paddingbottom, classSet)
  
//   return classSet
// })

// const appendToSet = (str, set) => {
//   if (set.trim().length) {
//     set += ` ${str}`;
//   } else {
//     set = `${str}`;
//   }
//   return set;
// };

// const classNames = computed(() => {
//   return [
//     'pt-' + props.paddingTop,
//     'pb-' + props.paddingBottom
//   ]
// })
</script>
  