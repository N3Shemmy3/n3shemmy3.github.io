<script setup lang="ts"></script>
<template>
  <main class="w-full h-full flex flex-col">
    <section class="w-full h-full flex flex-col max-sm:space-y-4 md:flex-row">
      <div ref="info" class="w-full mt-20 select-text">
        <h1
          class="text-[50px] sm:text-[90px] text-colorPrimaryLight dark:text-colorPrimaryDark"
        >
          Hello there,
        </h1>
        <p class="text-sm whitespace-normal sm:text-lg">
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
        class="w-full md:w-[45%] flex mx-auto mb-4 content-center p-4 space-x-8"
      >
        <LanguagesGrid />
      </div>
    </section>
  </main>
</template>
