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
          I'm a passionate and results-oriented software developer with a
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
        class="w-full md:w-[45%] flex mx-auto mt-20 content-center p-4 space-x-8"
      >
        <LanguagesGrid class="max-w-[300px] max-h-[300px]" />
      </div>
    </section>
    <section id="projects" class="w-full h-full flex flex-col space-y-4">
      <div>
        <h4 class="w-full text-start text-3xl sm:text-3xl">Projects</h4>
        <p class="text-sm">Happy little accidents</p>
      </div>
      <ul class="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <li
          v-for="n in 10"
          :key="n"
          class="w-full h-full flex flex-col rounded-md overflow-clip backdrop-blur transition-all duration-300 border-[1.5px] cursor-pointer hover:bg-colorPrimaryContainerLight dark:hover:bg-colorPrimaryContainerDark dark:hover:hover:bg-opacity-10 border-colorOutlineLight dark:border-colorOutlineDark border-opacity-20 dark:border-opacity-5"
        >
          <!--Header card-->
          <div class="w-full h-fit flex space-x-2 p-4">
            <div class="w-1/2">
              <Icon name="devicon:vuejs" class="size-12" />
              <h6 class="text-base">App name</h6>
            </div>
            <div class="w-1/2 flex p-4">
              <Button text="View" class="hidden w-full m-auto" />
            </div>
          </div>
          <div class="w-full h-fit">
            <p class="px-4 pb-4 text-sm text-pretty">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
              molestias est non nihil voluptas! Soluta adipisci illum magni
              deleniti, iusto molestias numquam, eveniet ea neque voluptas saepe
              eligendi corporis exercitationem!
            </p>
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>
<style scoped>
.highlight {
  @apply cursor-text transition-all duration-[400ms] hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark;
}
</style>
