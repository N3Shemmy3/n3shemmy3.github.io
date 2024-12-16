<script setup lang="ts"></script>
<template>
  <main class="w-full h-full flex flex-col space-y-10 cursor-default">
    <section
      id="hero-section"
      class="w-full md:aspect-[16/7] flex flex-col-reverse md:flex-row max-sm:mt-10"
    >
      <div
        ref="info"
        class="w-full h-full flex flex-col max-sm:my-10 justify-center space-y-2"
      >
        <h1
          class="text-[40px] sm:text-[75px] text-colorPrimaryLight dark:text-colorPrimaryDark"
        >
          Shemmy Nyirenda
        </h1>
        <p class="text-sm whitespace-normal sm:text-lg max-w-[600px]">
          I'm a Passionate and results-oriented software developer with a
          passion for crafting innovative and user-friendly
          <span class="highlight"> android </span>
          &

          <span class="highlight"> web </span>applications , Proficient in
          <span class="highlight"> Java </span>
          .
        </p>
        <div id="buttons" class="pt-4">
          <Button text="Contact me" :href="links.telegram" />
        </div>
      </div>
      <div
        ref="languages-div"
        class="w-full md:w-[45%] flex mx-auto content-center p-4 space-x-8"
      >
        <LanguagesGrid class="max-w-[300px] max-h-[300px]" />
      </div>
    </section>
    <section id="projects" class="w-full h-full flex flex-col">
      <div>
        <h4 class="w-full text-start text-3xl sm:text-3xl">Projects</h4>
        <p class="text-sm">Happy little accidents</p>
      </div>
    </section>
  </main>
</template>
<style scoped>
.highlight {
  @apply cursor-text transition-all  duration-[400ms] hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark;
}
</style>
