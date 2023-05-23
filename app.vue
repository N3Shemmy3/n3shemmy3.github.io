<template>
  <div class="max-w-screen-md noSelect">
    <div class="flex-row">
      <Navbar />
      <div class="content ">
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
  @apply absolute;
  @apply h-screen;
  @apply pl-16 pr-4;
  @apply py-2;
  @apply overflow-y-auto;
}
</style>