<template>
    <div class="Toolbar">
        <MenuIcon v-wave class="cursor-pointer" />
        <h6 class="Title">Toolbar</h6>
        <DotsVerticalIcon v-wave class="cursor-pointer" />
    </div>
</template>

<script setup lang="ts">
import VWave from 'v-wave'
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import DotsVerticalIcon from 'vue-material-design-icons/DotsVertical.vue';

</script>
<style scoped >
.Toolbar {
    @apply flex;
    @apply p-4;
    @apply h-14;
    @apply w-full;
    @apply space-x-3;
    @apply items-center;
    @apply text-colorOnBackgroundLight;
    backdrop-filter: blur(4px);
    position: fixed;
    z-index: 100;
    top: 0;
}

.Title {
    @apply text-xl;
    @apply select-none;
    @apply flex-grow;
}
</style>
