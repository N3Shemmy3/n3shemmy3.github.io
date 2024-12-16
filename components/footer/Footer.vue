<script setup lang="ts">
const items = [
  {
    icon: "ph:terminal-window",
    title: "Home",
    url: "/",
  },
  {
    icon: "",
    title: "GitHub",
    url: links.github,
  },
  {
    icon: "",
    title: "Contact",
    url: links.telegram,
  },
];
</script>

<template>
  <footer
    class="w-full flex flex-col border-t-[1.5px] border-colorPrimaryLight dark:border-colorPrimaryDark border-opacity-10 dark:border-opacity-10"
  >
    <!--div that spaces it-->
    <div
      class="xl:max-w-6xl xl:m-auto w-full p-4 flex max-sm:flex-col max-sm:space-y-4 min-md:items-center justify-between *:flex *:items-center"
    >
      <!--Start-->
      <div class="max-sm:flex-col max-sm:items-start max-sm:space-y-2">
        <NuxtLink
          v-for="item in items"
          :key="item.url"
          :href="item.url"
          class="flex items-center space-x-2 m-0 highlight text-sm"
        >
          <div class="size-5">
            <Icon :name="item.icon" size="20" />
          </div>
          <p>{{ item.title }}</p>
        </NuxtLink>
      </div>

      <!--End-->
      <div id="copyright" class="flex items-center text-sm space-x-1">
        <Icon name="ic:outline-copyright" size="14" />
        <p>2024, Shemmy Nyirenda</p>
      </div>
    </div>
  </footer>
</template>
<style scoped>
.highlight {
  @apply cursor-pointer transition-all  duration-[400ms] hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark;
}
</style>
