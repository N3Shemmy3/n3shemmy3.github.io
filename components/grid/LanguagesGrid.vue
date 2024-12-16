<script setup lang="ts">
interface Language {
  icon: string;
  title: string;
}

const languages = ref<Language[]>([
  { title: "Java", icon: "nonicons:java-16" },
  { title: "JavaScript", icon: "nonicons:javascript-16" },
  { title: "Html", icon: "nonicons:html-16" },
  { title: "Css", icon: "nonicons:css-16" },
]);

// Map 1-based grid indices to corresponding languages
const iconIndex = (index: number): Language => {
  const languageMap: { 2: number; 4: number; 6: number; 8: number } = {
    2: 0,
    4: 1,
    6: 2,
    8: 3,
  };

  // Use 'keyof typeof languageMap' to ensure the index is a valid key
  return languages.value[languageMap[index as keyof typeof languageMap]];
};
</script>

<template>
  <div
    class="fading-edges relative w-full h-full aspect-square m-auto grid gap-[1.5px] grid-cols-3 grid-rows-3 bg-blend-color-dodge rounded-full overflow-clip"
  >
    <!-- glowing bg-->
    <div
      class="absolute -z-10 top-1/2 left-1/2 w-48 h-48 rounded-full animate-pulse bg-gradient-to-br from-colorPrimaryLight dark:from-colorPrimaryDark to-colorPrimaryLight blur-[60px] transform -translate-x-1/2 -translate-y-1/2"
    ></div>

    <div
      v-for="index in 9"
      :key="index"
      class="w-full h-full flex bg-colorBackgroundLight dark:bg-colorBackgroundDark"
    >
      <!-- Check if the current index maps to an icon -->
      <Icon
        v-if="iconIndex(index)"
        :title="iconIndex(index).title"
        :name="iconIndex(index).icon"
        size="30"
        class="m-auto transition-all noSelect duration-300 cursor-pointer hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark"
      />
    </div>
  </div>
</template>
<style scoped>
@keyframes pulse {
  25% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.5;
  }
  75% {
    opacity: 0.75;
  }
  100% {
    opacity: 1;
  }
}
.animate-pulse {
  animation: pulse 3s ease-in-out cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
.fading-edges {
  position: relative;
  background-size: cover;
  mask-image: linear-gradient(
    to bottom,
    transparent,
    black 20%,
    black 80%,
    transparent
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent,
    black 20%,
    black 80%,
    transparent
  );
}
</style>
