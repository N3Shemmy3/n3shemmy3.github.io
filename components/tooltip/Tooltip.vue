<template>
  <div class="tooltip-wrapper">
    <slot />
    <div class="tooltip borders">{{ text }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Props for tooltip text
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.tooltip-wrapper {
  position: unset;
  display: inline-block;
}

.tooltip {
  @apply absolute z-[1000]  bg-colorSurfaceLight dark:bg-colorSurfaceDark text-colorOnSurfaceLight dark:text-colorOnSurfaceDark rounded-sm px-4 py-2 whitespace-nowrap text-sm;
  position: absolute;
  bottom: 150%; /* Adjust as needed */
  left: 50%;
  transform: translateX(-50%);
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s, visibility 0.2s;
}

.tooltip-wrapper:hover .tooltip {
  visibility: visible;
  opacity: 1;
}
</style>
