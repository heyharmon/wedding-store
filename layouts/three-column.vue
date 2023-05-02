<template>
  <div class="flex flex-col min-h-screen h-screen">
    <header>
      <slot name="top" />
    </header>

    <div class="flex-1 flex flex-row overflow-y-hidden no-scrollbar pt-3">
      <nav class="w-[18rem] overflow-y-auto">
        <slot name="left" />
      </nav>

      <main class="flex-1 overflow-y-auto no-scrollbar">
        <slot name="middle" />
      </main>

      <aside class="w-[8rem] overflow-y-auto no-scrollbar">
        <slot name="right" />
      </aside>
    </div>
  </div>
</template>