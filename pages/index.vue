<script setup lang="ts">
interface Menu {
  icon: string;
  title: string;
  url: string;
}
const languages = ref([
  {
    title: "Java",
    icon: "nonicons:java-16",
  },
  {
    title: "JavaScript",
    icon: "nonicons:javascript-16",
  },
  {
    title: "Html",
    icon: "nonicons:html-16",
  },
  {
    title: "Css",
    icon: "nonicons:css-16",
  },
]);
</script>
<template>
  <div class="w-full h-full flex flex-col">
    <div ref="info" class="mt-20 select-text">
      <h1
        class="text-[55px] sm:text-[90px] text-center text-colorPrimaryLight dark:text-colorPrimaryDark"
      >
        Hello there,
      </h1>
      <p class="text-lg whitespace-normal sm:text-2xl text-center">
        I'm
        <span
          class="transition-all noSelect duration-[400ms] hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark"
        >
          Shemmy Nyirenda
        </span>
        a passionate web developer
      </p>
    </div>
    <div
      ref="languages-div"
      class="flex mx-auto mb-4 content-center p-4 space-x-8"
    >
      <div v-for="language in languages" v-bind:key="language.icon">
        <Icon
          :title="language.title"
          :name="language.icon"
          size="30px"
          class="transition-all noSelect duration-300 cursor-pointer hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark"
        />
      </div>
    </div>
  </div>
</template>
