<template>
  <!-- Wrap -->
  <div class="flex-grow overflow-auto">
    <!-- Wrap inner -->
    <div class="flex h-full">

      <!-- Left -->
      <aside class="w-80 flex-shrink-0 overflow-auto bg-light-95 py-3 dark:bg-dark-16">
        <div class="border-b border-light-91 px-3 pb-2">
          <a class="mx-1 mb-4 block h-5 w-5 rounded p-1 text-wedges-gray-400 hover:bg-light-91" href="https://app.lemonsqueezy.com/dashboard">
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 fill-transparent stroke-current"><path d="M4.75 11.98h14.5M11.25 18.25 4.75 12l6.5-6.25" stroke="#25252D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </a>
          
          <div class="rounded hover:bg-light-91">
            <div class="flex items-center px-2 py-1">
              <label class="form-label mb-0 flex-grow">Enable your store</label>
            </div>
            <p class="form-input-desc m-0 px-2 pb-1"> Display your store or hide it and redirect to your website instead.</p>
          </div>
        </div>
      </aside>

      <!-- Right -->
      <section class="relative mx-auto w-full max-w-200 overflow-auto">
        <div class="relative min-h-screen px-5 pt-3 pb-16">
          <!-- Preview -->
          <!-- <div class="relative min-h-screen overflow-hidden rounded-xl border drop-shadow-lg">
            <div class="relative flex items-center justify-between z-20 h-[50px] border-b bg-white bg-opacity-70 backdrop-blur-md backdrop-filter">
              <div class="w-16 mx-4">
                <svg width="52" height="12" viewBox="0 0 52 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="6" r="5.75" fill="#ED6A5E" stroke="#CF594E" stroke-width="0.5"></circle>
                  <circle cx="26" cy="6" r="5.75" fill="#F4BD50" stroke="#D79F3E" stroke-width="0.5"></circle>
                  <circle cx="46" cy="6" r="5.75" fill="#61C355" stroke="#52A63D" stroke-width="0.5"></circle>
                </svg>
              </div>
              
              <div class="w-full min-w-xl truncate rounded-2xl bg-black bg-opacity-5 text-gray-600 text-center text-xs leading-7">https://heyharmon.lemonsqueezy.com</div>

              <div class="w-10 ml-4">
                <Icon name="heroicons:chevron-down" class="h-5 w-5" aria-hidden="true" />
              </div>
            </div>

            <div class="absolute inset-0 pt-[50px] z-10 bg-white">
              <Block 
                v-for="(block, index) in store.page.blocks" 
                :key="index" 
                v-bind="block" 
              />
            </div>
          </div> -->
          
          <DesignerPreview>
            <Block 
              v-for="(block, index) in store.page.blocks" 
              :key="index" 
              v-bind="block" 
            />
          </DesignerPreview>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const store = usePageStore()

await useAsyncData('page', () => store.showPage('page-1'))
</script>