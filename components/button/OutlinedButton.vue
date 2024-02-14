<template>
	<button
		v-Ripple
		class="text-base outline-none px-4 py-2 rounded-lg border border-colorPrimaryLight text-colorOnBackgroundLight dark:border-colorPrimaryDark dark:text-colorOnBackgroundDark"
	>
		<Icon
			v-if="icon"
			class="me-1 icon"
			:name="icon"
			:size="iconSize"
		/>
		{{ text }}
	</button>
</template>

<script setup lang="ts">
defineProps({
	type: String,
	icon: String,
	iconSize: String,
	text: String,
});
</script>
<style scoped>
.icon {
	pointer-events: none;
}
</style>
