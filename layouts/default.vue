<template>
  <div class="relative w-full h-full flex flex-col">
    <div
      class="absolute -z-10 top-1/2 left-1/2 w-48 h-48 rounded-full animate-pulse bg-gradient-to-br from-colorPrimaryLight dark:from-colorPrimaryDark to-colorBackgroundLight blur-[60px] md:blur-[90px] transform -translate-x-1/2 -translate-y-1/2"
    ></div>
    <slot />
  </div>
</template>
<style scoped>
@keyframes pulse {
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 0.7;
  }
}
.animate-pulse {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
