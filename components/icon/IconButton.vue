<template>
	<button
		ref="button"
		v-if="icon"
		:aria-label="name"
		v-Ripple
		class="flex cursor-pointer outline-none noSelect p-2 rounded-full bg-transparent duration-300 hover:bg-opacity-30 dark:hover:bg-opacity-30 hover:bg-colorPrimaryContainerLight dark:hover:bg-colorPrimaryContainerDark"
	>
		<Icon
			type="button"
			class="m-auto icon"
			:name="icon"
			:size="size"
		/>
	</button>
</template>

<script setup lang="ts">
defineProps({
	icon: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: false
	},
	color: String,
	size: {
		type: String,
		default: "24px",
	},
});
const button = ref();
</script>
<style scoped>
.icon {
	pointer-events: none;
}
</style>
