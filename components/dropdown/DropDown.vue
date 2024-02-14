<template>
    <div class="relative z-50">
        <slot
            name="toggler"
            @click="toggle()"
        >
            <button>Toggle</button>
        </slot>
    </div>
</template>
<script setup lang="ts">
import { provide, ref } from 'vue'
const isOpen = ref(false)

function toggle() {
    isOpen.value = !isOpen.value.vlue;
}
defineProps(["onClick"])
computed(() => {
    toggle()
})
provide('isOpen', {
    isOpen,
    toggle
})
</script>