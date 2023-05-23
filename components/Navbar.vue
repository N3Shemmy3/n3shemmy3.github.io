<template>
    <div class="Toolbar mt-8">

        <div v-for="(i, index) in menuItems">
            <h6 class="Item sm:text-base">{{ i }}</h6>
        </div>
        <div class="flex-grow"></div>
    </div>
</template>

<script setup lang="ts">
import MenuIcon from 'vue-material-design-icons/Menu.vue';

const menuItems = ["About me", "Projects", "Blog", "Interests"];
function empty() {

}
</script>
<style scoped >
.Toolbar {
    @apply flex flex-row-reverse;
    @apply h-14;
    width: 100dvh;
    @apply p-4;
    @apply space-x-2;
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
    @apply p-2;
}

.Action {
    @apply cursor-pointer;
}

.Action::after {}

.Item:hover {
    transition: font-weight .1s ease-in-out;
    @apply transition-all;
    @apply p-2.5;
    @apply text-colorPrimaryDark;
    @apply font-semibold;
}
</style>
