<script setup>
defineEmits(["onSearchItemClick", "onGPSItemClick"]);
const colorMode = useColorMode();
const isDarkMode = ref(colorMode.value === "dark");

const toggleMode = () => {
  // Toggle between light and dark mode
  if (colorMode.preference === "system") {
    colorMode.preference = isDarkMode.value ? "light" : "dark";
  } else {
    colorMode.preference = "system";
  }

  // Toggle the isDarkMode state
  isDarkMode.value = !isDarkMode.value;
};
</script>
<template>
  <!--Toolbar header-->
  <header
    class="fixed left-0 top-0 right-0 z-50 w-full flex backdrop-filter bg-opacity-40 dark:bg-opacity-80 border-b-[1.5px] bg-colorSurfaceLight dark:bg-colorSurfaceDark dark:border-colorPrimaryDark border-colorPrimaryLight border-opacity-30 dark:border-opacity-30 firefox:bg-opacity-90 backdrop-blur-lg text-colorOnSurfaceLight dark:text-colorOnSurfaceDark"
  >
    <!--div that spaces it-->
    <div
      class="xl:max-w-6xl xl:m-auto w-full px-4 py-2 flex items-center justify-between *:flex *:items-center *:space-x-1"
    >
      <!--Items start-->
      <div>
        <NuxtLink
          href="/"
          class="text-lg duration-300 cursor-pointer rounded-full hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark"
        >
          N3Shemmy3</NuxtLink
        >
      </div>

      <!--Items end-->
      <div>
        <Tooltip text="Search">
          <IconButton
            size="24"
            icon="ic:outline-search"
            @click="$emit('onSearchItemClick')"
          />
        </Tooltip>
        <Tooltip text="Use Location">
          <IconButton
            size="24"
            icon="ic:outline-gps-fixed"
            @click="$emit('onGPSItemClick')"
          />
        </Tooltip>
        <Tooltip text="Change Theme">
          <IconButton
            size="24"
            :icon="
              isDarkMode ? 'ic:outline-dark-mode' : 'ic:outline-light-mode'
            "
            @click="toggleMode"
            class="theme-toggle-button"
          />
        </Tooltip>
      </div>
    </div>
  </header>
</template>
<style scoped>
.theme-toggle-button {
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.theme-toggle-button:active {
  transform: rotate(360deg);
}
</style>
