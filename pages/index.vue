<template>
  <div
    class="w-full h-full select-none text-colorOnBackgroundLight dark:text-colorOnBackgroundDark bg-colorBackgroundLight dark:bg-colorBackgroundDark justify-center pt-14 px-4 pb-4 sm:pt-28 sm:px-6"
  >
    <div
      id="content"
      class="overflow-auto flex flex-col m-auto max-w-3xl justify-center"
    >
      <div
        id="about"
        class="flex flex-col space-y-4 justify-center [&>*]:mx-auto"
      >
      <div class="sm:flex sm:space-x-4">
        
        <img
        class="h-60 w-60 rounded-full"
        src="https://avatars.githubusercontent.com/u/67279072?v=4"
        alt=""
        />
        <div class="sm:space-y-1">
          <div>
            <h1 class="text-3xl text-center sm:text-[40px]">Shemmy Nyirenda</h1>
        <p class="text-base text-center">
          A Front-End Software Developer based in Zambia
        </p>
      </div>

        <div class="flex m-auto pt-4 space-x-10">
          <div class="flex-grow"/>
          <Icon
            title="Java"
            name="nonicons:java-16"
            size="30"
            class="transition-color noSelect duration-250 cursor-pointer hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark"
          />
          <Icon
            name="nonicons:javascript-16"
            size="30"
            class="transition-color noSelect duration-250 cursor-pointer hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark"
          />
          <Icon
            name="nonicons:html-16"
            size="30"
            class="transition-color noSelect duration-250 cursor-pointer hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark"
          />
          <Icon
            name="nonicons:css-16"
            size="30"
            class="transition-color noSelect duration-250 cursor-pointer hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark"
          />
           <div class="flex-grow"/>
        </div>
      
        </div>
      </div>
      </div>
      <div id="projects-title" class="mt-24">
        <h1 class="w-full text-start text-3xl m-0 sm:text-3xl">#Projects</h1>
        <p class="text-base mt-1">Projects iv'e worked on.</p>
      </div>
      <div class="h-[100px]"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import GithubIcon from "vue-material-design-icons/Github.vue";
</script>
<style scoped>
.noSelect {
  -webkit-tap-highdark-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.noSelect:focus {
  outline: none !important;
}
</style>