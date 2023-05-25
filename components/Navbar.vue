<template>
    <div id="Toolbar" class="
    fixed
    top-0
    z-50
    h-14
    w-full
    flex px-4 py-2 space-x-4
    items-center
    bg-colorSurfaceLight dark:bg-colorSurfaceDark
    text-colorOnSurfaceDark dark:text-colorOnSurfaceDark
 
     ">
        <div class="
                flex
                jsutify-center
                h-12 w-12
                rounded-full
                cursor-pointer
                hover:bg-colorPrimaryContainerLight dark:hover:bg-colorPrimaryContainerDark
             ">
            <Icon class="m-auto" name="ic:outline-code" size="30px" />
        </div>
        <div class="flex-grow" />
        <div class="flex space-x-1">
            <div class="
                flex
                jsutify-center
                h-12 w-12
                rounded-full
                hover:bg-colorPrimaryContainerLight dark:hover:bg-colorPrimaryContainerDark
             ">
                <Icon class="m-auto" name="grommet-icons:github" size="24px" />
            </div>
            <div class="
                flex
                jsutify-center
                h-12 w-12
                rounded-full
                [&>*]:hover:cursor-pointer
                hover:bg-colorPrimaryContainerLight dark:hover:bg-colorPrimaryContainerDark">
                <Icon class="m-auto" name="mdi:telegram" size="24px" />
            </div>
            <div class="
                flex
                jsutify-center
                h-12 w-12
                rounded-full
                hover:bg-colorPrimaryContainerLight dark:hover:bg-colorPrimaryContainerDark">
                <Icon class="m-auto" name="mdi:linkedin" size="24px" />
            </div>

        </div>
        <!--

            <div v-for="(i, index) in menuItems">
                <h6 class="
                invisible
                md:visible
                cursor-pointer
                py-2 px-3
                font-semibold
                text-sm inline-block
                sm:text-base
                transition-colors 
                duration-300
                rounded-full
                hover:bg-colorSecondaryContainerLight dark:hover:bg-colorSecondaryContainerDark 
                text-colorOnPrimaryContainerLight dark:text-colorOnPrimaryContainerDark
                ">{{ i }}</h6>
            </div>
        -->
    </div>
</template>

<script setup lang="ts">

const menuItems = ["About", "Projects", "BlogPost",];
function empty() {

}
</script>
