<template>
  <div>
    <NuxtLoadingIndicator/>
    <NuxtPage/>

    <!-- Setup primary, secondary and accent color css variables -->
    <component is="style">
      :root {
        --primary-50:  {{ color1[50] }};
        --primary-100: {{ color1[100] }};
        --primary-200: {{ color1[200] }};
        --primary-300: {{ color1[300] }};
        --primary-400: {{ color1[400] }};
        --primary-500: {{ color1[500] }};
        --primary-600: {{ color1[600] }};
        --primary-700: {{ color1[700] }};
        --primary-800: {{ color1[800] }};
        --primary-900: {{ color1[900] }};

        <!-- --secondary-50:  {{ color2[50] }};
        --secondary-100: {{ color2[100] }};
        --secondary-200: {{ color2[200] }};
        --secondary-300: {{ color2[300] }};
        --secondary-400: {{ color2[400] }};
        --secondary-500: {{ color2[500] }};
        --secondary-600: {{ color2[600] }};
        --secondary-700: {{ color2[700] }};
        --secondary-800: {{ color2[800] }};
        --secondary-900: {{ color2[900] }}; -->
      }
    </component>

    <!-- For each theme, apply the primary, secondary and accent variables to utility variables
         such as text color, background color, button background color, etc. -->
    <!-- <component is="style">
      :root {
        --text-heading-color:    var(--gray-500);
        --text-body-color:       var(--gray-500);
        --text-subtle-color:     var(--gray-500);
        --button-bg-color:       var(--primary-500);
        --button-bg-color-hover: var(--primary-600);
        --button-text-color:     var(--white);
      }
    </component> -->
  </div>
</template>

<script setup>
import { generatePalette } from '@/composables/useColors'

const color1 = computed(() => generatePalette('#84cc16'))
// const color2 = computed(() => generatePalette('#EBB02D'))
// const color3 = computed(() => generatePalette('#EA5455'))
</script>