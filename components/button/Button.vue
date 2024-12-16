<template>
  <button
    v-Ripple
    class="w-fit text-base outline-none px-4 py-2 rounded-lg transition-all duration-300 bg-colorPrimaryLight text-colorOnPrimaryLight dark:bg-colorPrimaryDark dark:text-colorOnPrimaryDark hover:bg-opacity-50 dark:hover:bg-opacity-50"
  >
    <Icon v-if="icon" class="me-1 icon" :size="iconSize" :name="icon" />
    <NuxtLink :href target="_blank" rel="noopener noreferrer">
      {{ text }}
    </NuxtLink>
  </button>
</template>

<script setup lang="ts">
defineProps({
  type: String,
  icon: String,
  iconSize: String,
  text: String,
  href: String,
});
</script>
