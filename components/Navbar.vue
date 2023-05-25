<template>
    <div class="Toolbar mt-8">
        <div class="pl-8 flex ">
            <p
                class="cursor-pointer rotate-90 h-12 w-12 bg-colorPrimaryContainerDark hover:bg-colorSecondaryContainerDark text-colorOnPrimaryContainerDark rounded-2xl text-[32px] text-center font-semibold">
                S</p>

        </div>
        <div v-for="(i, index) in menuItems">
            <h6 class="Item sm:text-base">{{ i }}</h6>
        </div>
        <div class="flex-grow"></div>
    </div>
</template>

<script setup lang="ts">

const menuItems = ["About", "Projects", "BlogPost",];
function empty() {

}
</script>
<style scoped >
.Toolbar {
    @apply flex flex-row-reverse;
    height: 56px;
    width: 100dvh;
    @apply p-4;
    @apply space-x-4;
    @apply items-center;
    @apply text-colorOnBackgroundDark;
    z-index: 100;
    top: 100%;
    position: fixed;
    transform-origin: top left;
    transform: rotate(-90deg);
}

.Item {
    @apply cursor-pointer;
    @apply font-semibold;
    @apply text-sm inline-block;
    @apply py-2 px-3;
}

.Action {
    @apply cursor-pointer;
}

.Action::after {}

.Item:hover {
    transition: font-weight .1s ease-in-out;
    @apply transition-colors duration-300;
    @apply rounded-lg;
    @apply bg-colorPrimaryContainerDark;
    @apply text-colorOnPrimaryContainerDark;
    @apply font-semibold;
}
</style>
