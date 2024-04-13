<template>
  <div class="flex flex-col min-h-screen h-screen">
    <header>
      <slot name="top" />
    </header>

    <div class="flex-1 flex flex-row overflow-y-hidden no-scrollbar mb-4">
      <nav class="overflow-y-auto no-scrollbar ml-4">
        <slot name="left" />
      </nav>

      <main class="relative flex-1 overflow-y-auto rounded-lg border drop-shadow-sm bg-white no-scrollbar mx-4">
        <slot name="middle" />
        <!-- <div id="headlessui-portal-root"></div> Modals are portalled here -->
      </main>

      <!-- <aside class="w-[10rem] overflow-y-auto no-scrollbar">
        <slot name="right" />
      </aside> -->
    </div>
  </div>
</template>