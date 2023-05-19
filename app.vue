<template>
  <div class="noSelect">
    <div class="container flex-row">
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
  @apply absolute;
  @apply w-full h-full;
  @apply pl-16 pr-4;
  @apply py-2;
  @apply overflow-y-auto;
}
</style>