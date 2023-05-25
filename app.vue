<template>
  <div class="m-auto w-full h-full max-w-screen-lg noSelect">
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
  @apply h-screen w-full;
  @apply pl-16 pr-4;
  @apply py-2;
  @apply overflow-y-auto;
}
</style>