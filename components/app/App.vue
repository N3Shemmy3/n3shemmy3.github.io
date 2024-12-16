<script setup lang="ts">
useSeoMeta({
  title: "Shemmy Nyirenda",
  ogTitle: "Shemmy Nyirenda",
  description:
    "A website i built with nuxt.js to showcase My skills and passions",
  ogDescription:
    "A website i built with nuxt.js to showcase My skills and passions",
  ogImage: "https://api.iconify.design/ph:terminal-window.svg?color=%23888888",
  twitterCard: "summary_large_image",
});
</script>
<template>
  <div class="w-full h-dvh flex flex-col">
    <slot name="header" />
    <div class="h-16 md:h-20" />
    <div class="w-full xl:max-w-6xl xl:mx-auto px-4 py-2 md:p-4">
      <slot />
    </div>
    <slot name="footer" />
  </div>
</template>
<style>
body {
  @apply bg-colorBackgroundLight dark:bg-colorBackgroundDark text-colorOnBackgroundLight dark:text-colorOnBackgroundDark font-sans;
}
</style>
