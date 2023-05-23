<template>
  <div class="flex font-sans m-auto max-w-screen-lg noSelect">
    <div class="flex-row">
      <Navbar />
      <div class="content">
        <NuxtPage />
      </div>
    </div>
  </div>
</template>

<script setup>
import '@/assets/css/tailwind.css';
</script>
<style scoped>
.content {
  @apply max-w-screen-md h-full;
  @apply pl-16 pr-4;
  @apply py-2;
  @apply overflow-y-auto;
}
</style>