<template>
    <div class="
    h-screen w-screen
    text-colorOnBackgroundLight dark:text-colorOnBackgroundDark
    bg-colorBackgroundLight dark:bg-colorBackgroundDark
    justify-center
    pt-14 px-4 pb-4 sm:pt-28 sm:px-6
    
    ">
        <div class="">

            <div id="content" class="
            overflow-auto
        flex flex-col
        m-auto 
        max-w-3xl 
        justify-center
        space-y-4
        [&>*]:mx-auto
        ">
                <img class="h-60 w-60 rounded-full" src="https://avatars.githubusercontent.com/u/67279072?v=4" alt="">
                <h1 class="text-3xl sm:text-[40px]">Shemmy Nyirenda</h1>
                <p class="text-base text-center">A Front-End Software Developer based in Zambia</p>


                <div class="flex pt-4 space-x-10">
                    <Icon title="Java" name="nonicons:java-16" size="30" class="
                transition-color duration-250
                cursor-pointer
                hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark
                    " />
                    <Icon name="nonicons:javascript-16" size="30" class="
                transition-color duration-250
                cursor-pointer
                hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark
                    " />
                    <Icon name="nonicons:html-16" size="30" class="
                transition-color duration-250
                cursor-pointer
                hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark
                    " />
                    <Icon name="nonicons:css-16" size="30" class="
                transition-color duration-250
                cursor-pointer
                hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark
                    " />
                </div>
                <div class="h-[1000px]"></div>

                <div class="h-14 w-full">
                    <h6 class="m-auto h-fu text-center text-sm">Copyright © 2023 Shemmy Nyirenda. All rights reserved.</h6>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import GithubIcon from 'vue-material-design-icons/Github.vue';

</script>