<template>
	<button
		v-Ripple
		class="text-base outline-none px-4 py-2 rounded-lg bg-colorPrimaryLight text-colorOnPrimaryLight dark:bg-colorPrimaryDark dark:text-colorOnPrimaryDark"
	>
		<Icon
			v-if="icon"
			class="me-1 icon"
			:size="iconSize"
			:name="icon"
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
