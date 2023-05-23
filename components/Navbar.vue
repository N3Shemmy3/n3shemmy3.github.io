<template>
    <div class="Toolbar mt-8">
        <div class="pl-6 flex ">
            <h6
                class="m-auto text-[32px] text-center rotate-90 h-12 w-12 bg-colorPrimaryContainerDark text-colorOnPrimaryContainerDark rounded-xl">
                S
            </h6>
        </div>
        <div v-for="(i, index) in menuItems">
            <h6 class="Item sm:text-base">{{ i }}</h6>
        </div>
        <div class="flex-grow"></div>
    </div>
</template>

<script setup lang="ts">

const menuItems = ["About", "Projects", "BlogPost", "Interests"];
function empty() {

}
</script>
<style scoped >
.Toolbar {
    @apply flex flex-row-reverse;
    min-height: 56px;
    width: 100dvh;
    @apply p-4;
    @apply space-x-4;
    @apply items-center;
    @apply text-colorOnBackgroundDark;
    z-index: 100;
    top: 100%;
    position: absolute;
    transform-origin: top left;
    transform: rotate(-90deg);
}

.Item {
    font-weight: 500;
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
