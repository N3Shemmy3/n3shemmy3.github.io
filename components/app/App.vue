<template>
  <div
    class="w-full min-h-[100dvh] flex flex-col bg-colorBackgroundLight dark:bg-colorBackgroundDark text-colorOnBackgroundLight dark:text-colorOnBackgroundDark"
  >
    <div class="w-full xl:max-w-6xl xl:mx-auto px-4 py-2 md:p-4">
      <div class="h-16 md:h-20" />
      <slot />
    </div>
  </div>
</template>
