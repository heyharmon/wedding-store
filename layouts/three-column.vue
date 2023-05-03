<template>
  <div class="flex flex-col min-h-screen h-screen">
    <header>
      <slot name="top" />
    </header>

    <div class="flex-1 flex flex-row overflow-y-hidden no-scrollbar">
      <nav class="w-[24rem] overflow-y-auto">
        <slot name="left" />
      </nav>

      <main class="flex-1 overflow-y-auto rounded-lg border drop-shadow-lg no-scrollbar mx-4">
        <slot name="middle" />
      </main>

      <!-- <aside class="w-[8rem] overflow-y-auto no-scrollbar">
        <slot name="right" />
      </aside> -->
    </div>
  </div>
</template>