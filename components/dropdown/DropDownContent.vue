<template>
    <transition name="dropdown-content">
        <div
            v-if="isOpen"
            class="origin-top-right mt-2 bg-colorSurfaceLight dark:bg-colorSurfaceDark text-colorOnSurfaceLight dark:text-colorOnSurfaceDark rounded-md py-2"
        >
            <slot />
        </div>
    </transition>
</template>

<script setup lang="ts">
import { inject } from 'vue'
const { isOpen, toggle } = inject('isOpen');

</script>

<style>
.dropdown-content-enter-active,
.dropdown-content-leave-active {
    transition: all 0.2s;
}

.dropdown-content-enter,
.dropdown-content-leave-to {
    opacity: 0;
    transform: translateY(-5px);
}
</style>
