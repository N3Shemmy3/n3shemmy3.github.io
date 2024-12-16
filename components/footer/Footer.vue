<template>
  <footer
    class="w-full flex border-t-[1.5px] border-colorPrimaryLight dark:border-colorPrimaryDark border-opacity-10 dark:border-opacity-10"
  >
    <!--div that spaces it-->
    <div
      class="xl:max-w-6xl xl:m-auto w-full px-4 py-2 flex items-center justify-between *:flex *:items-center *:space-x-2"
    >
      <!--Start-->
      <div>
        <NuxtLink href="/" class="flex items-center space-x-2 highlight">
          <Icon name="ph:terminal-window" size="24" />
          <p>Home</p>
        </NuxtLink>
      </div>
      <div></div>

      <!--End-->
    </div>
  </footer>
</template>
<style scoped>
.highlight {
  @apply cursor-pointer transition-all  duration-[400ms] hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark;
}
</style>
