<template>
	<div
		id="Toolbar"
		class="fixed top-0 z-50 h-14 w-full backdrop-filter bg-opacity-30 border-b dark:border-zinc-800 border-gray-50 firefox:bg-opacity-90 backdrop-blur-lg text-colorOnSurfaceLight dark:text-colorOnSurfaceDark"
	>
		<div class="max-w-screen-xl m-auto flex px-4 py-2 space-x-4 items-center">
			<NuxtLink
				class="flex"
				to="/"
			>
				<div
					class="flex noSelect justify-center content-center hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark">
					<Icon
						class="sm:inline hidden me-1"
						name="ph:terminal-window"
						size="28px"
					/>
					<h4 class="text-lg"> N3Shemmy3</h4>
				</div>
			</NuxtLink>
			<div class="flex-grow" />
			<div class="flex space-x-1">
				<div
					v-for="menu in menuItems"
					v-bind:key="menu.icon"
					@click="onMenuItemCliked(menu)"
					class="flex cursor-pointer noSelect jsutify-center h-12 w-12 rounded-full hover:bg-colorPrimaryContainerLight dark:hover:bg-colorPrimaryContainerDark"
				>
					<Icon
						class="m-auto"
						:name="menu.icon"
						size="24px"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
interface Menu {
	icon: string;
	title: string;
	url: string;
}
const menuItems = ref([
	{
		title: "GitHub",
		icon: "ph:github-logo",
		url: "https://github.com/N3Shemmy3",
	},
	{
		title: "Linked-In",
		icon: "ph:linkedin-logo",
		url: "https://zm.linkedin.com/in/shemmy-nyirenda-7a3681259",
	},
	/*
	 
	{
		title: "Telegram",
		icon: "ph:telegram-logo",
		url: "https://t.me/n3shemmy3",
	},
	*/
	{ title: "Email", icon: "ph:envelope", url: "n3Shemmy3@gmail.com" },
]);
function contactViaEmail(menu: Menu) {
	return menu.title != "Email"
		? menu.url
		: "mailto:" + menu.url + "?subject=Me&body=Hello!";
}
function onMenuItemCliked(menu: Menu) {
	switch (menu.title.toLowerCase()) {
		case "email":
			useEvent("modal:event", { name: "contact", visible: true });
			break;

		default:
			window.open(menu.url);
			break;
	}
}
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
