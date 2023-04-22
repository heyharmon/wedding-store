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
    
    <!-- Is this too much or do we just need enough to theme blocks including header and footer?
         We should lean heavily on themes. Use these extra variables for specific design traits
         such as corner roundness? -->
    <component is="style">
      :root {
        <!-- theme instead
        --nav-links-color:                 var(--gray-900);
        --nav-links-color-hover:           var(--gray-900);
        --nav-bg-color:                    var(--primary-500); 
        -->

        --heading-h1-color:                var(--gray-900);
        --heading-h2-color:                var(--gray-900);
        --heading-h3-color:                var(--gray-900);
        --heading-h4-color:                var(--gray-900);
        --heading-h5-color:                var(--gray-900);
        --heading-h6-color:                var(--gray-900);

        --text-color:                      var(--gray-700);
        --text-highlight-color:            var(--gray-700);
        --text-subtle-color:               var(--gray-500);

        --button-primary-bg-color:         var(--primary-500);
        --button-primary-bg-color-hover:   var(--primary-600);
        --button-primary-text-color:       var(--white);
        --button-secondary-bg-color:       var(--primary-500);
        --button-secondary-bg-color-hover: var(--primary-600);
        --button-secondary-text-color:     var(--white);
        --button-tertiary-bg-color:        var(--primary-500);
        --button-tertiary-bg-color-hover:  var(--primary-600);
        --button-tertiary-text-color:      var(--white);

        --bg-color:                        var(--white);
        --bg-overlay-color:                var(--white);

        --card-bg-color:                   var(--white);
        --card-bg-color-hover:             var(--gray-100);

        <!-- theme instead
        --footer-links-color:              var(--gray-900);
        --footer-links-color-hover:        var(--gray-900);
        --footer-bg-color:                 var(--primary-500);
        -->
      }
    </component>
  </div>
</template>

<script setup>
import { generatePalette } from '@/composables/useColors'

const color1 = computed(() => generatePalette('#84cc16'))
// const color2 = computed(() => generatePalette('#EBB02D'))
// const color3 = computed(() => generatePalette('#EA5455'))
</script>