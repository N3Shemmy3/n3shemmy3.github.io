<template>
    <div class="Toolbar">
        <MenuIcon class="ml-10" />
        <div v-for="(i, index) in 6">
            <h6 class="Item">Item {{ index }}</h6>
        </div>
        <div class="flex-grow"></div>
    </div>
</template>

<script setup lang="ts">
import MenuIcon from 'vue-material-design-icons/Menu.vue';
function empty() {

}
</script>
<style scoped >
.Toolbar {
    @apply flex flex-row-reverse;
    @apply h-14;
    width: 100vh;
    @apply p-4;
    @apply space-x-2;
    @apply items-center;
    @apply text-colorOnBackgroundDark;
    z-index: 100;
    left: 0;
    top: 100%;
    position: absolute;
    transform-origin: top left;
    transform: rotate(-90deg);
}

.Item {
    font-weight: 400;
    @apply text-base;
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
