<script setup lang="ts">
// in <script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: false,
    default: "24",
  },
});
</script>
<template>
  <button
    class="flex size-12 min-w-12 min-h-12 items-center justify-center transition-colors duration-300 cursor-pointer rounded-full hover:bg-colorPrimaryContainerLight dark:hover:bg-colorPrimaryContainerDark"
  >
    <Icon :name="icon" :size="size" />
  </button>
</template>
