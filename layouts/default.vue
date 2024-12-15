<template>
  <div class="relative w-full h-full flex flex-col justify-center">
    <div
      class="absolute -z-10 top-1/2 left-1/2 w-48 h-48 rounded-full animate-pulse bg-gradient-to-br from-colorPrimaryLight dark:from-colorPrimaryDark to-colorPrimaryLight blur-[60px] md:blur-[90px] transform -translate-x-1/2 -translate-y-1/2"
    ></div>
    <main class="w-full xl:max-w-6xl xl:mx-auto px-4 py-2 md:p-4">
      <slot />
    </main>
  </div>
</template>
<style scoped>
@keyframes pulse {
  5% {
    opacity: 0.05;
  }
  25% {
    opacity: 0.15;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}
.animate-pulse {
  animation: pulse 3s ease-in-out cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
