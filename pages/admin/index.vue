<template>
  <NuxtLayout name="two-column">
    <template #left>
      <DashboardSidebar/>
    </template>

    <template #top>
      <DashboardTopBar/>
    </template>

    <template #right>
      <div class="px-4 sm:px-6 lg:px-8">
        The right side...
      </div>
    </template>
  </NuxtLayout>
</template>