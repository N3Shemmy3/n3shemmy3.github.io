<template>
	<div
		id="Toolbar"
		class="fixed top-0 z-50 h-14 w-full bg-colorSurfaceLight dark:bg-colorSurfaceDark text-colorOnSurfaceLight dark:text-colorOnSurfaceDark shadow-sm"
	>
		<div class="max-w-screen-xl m-auto flex px-4 py-2 space-x-4 items-center">
			<div
				class="flex noSelect justify-center h-12 w-12 rounded-full cursor-pointer hover:bg-colorPrimaryContainerLight dark:hover:bg-colorPrimaryContainerDark"
			>
				<Icon class="m-auto" name="ph:terminal-window" size="30px" />
			</div>
			<div class="flex-grow" />
			<div class="flex space-x-1">
				<div
					v-for="menu in menuItems"
					v-bind:key="menu.icon"
					class="flex cursor-pointer noSelect jsutify-center h-12 w-12 rounded-full hover:bg-colorPrimaryContainerLight dark:hover:bg-colorPrimaryContainerDark"
				>
					<Icon class="m-auto" :name="menu.icon" size="24px" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	const menuItems = ref([
		{ title: "GitHub", icon: "ph:github-logo", action: "" },
		{ title: "Linked-In", icon: "ph:linkedin-logo", action: "" },
		{ title: "Telegram", icon: "ph:telegram-logo", action: "" },
		{ title: "Email", icon: "ph:envelope", action: "" },
	]);
	function empty() {}
</script>

<style scoped>
	.noSelect {
		-webkit-tap-highdark-color: transparent;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}

	.noSelect:focus {
		outline: none !important;
	}
</style>
