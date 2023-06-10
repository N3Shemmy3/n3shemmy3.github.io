<template>
	<div
		class="w-full select-none text-colorOnBackgroundLight dark:text-colorOnBackgroundDark bg-colorBackgroundLight dark:bg-colorBackgroundDark"
	>
		<div class="max-w-screen-2xl">
			<Navbar />
			<div class="justify-center pt-14 pb-4 px-4 sm:px-6">
				<NuxtPage />
			</div>
			<div class="flex-1" />
			<FooterBar />
		</div>
		<dialog
			ref="dialog"
			style="padding: 0"
			@click="$event.target === dialog ? dialog.close() : none()"
			class="w-full mx-4 sm:max-w-md sm:mx-auto rounded-lg shadow-md bg-colorSurfaceLight dark:bg-colorSurfaceDark text-colorOnSurfaceLight dark:text-colorOnSurfaceDark"
		>
			<Contact @onSubmit="dialog.close()" />
		</dialog>
	</div>
</template>

<script setup>
	const dialog = ref();
	const isAppCreated = ref(false);

	onMounted(() => {
		setTimeout(() => {
			isAppCreated.value = true;
		}, 1000);
	});

	useListen("modal:toggle", (modal) => {
		if (modal.name == "contact") {
			if (modal.show) dialog.showModal();
			else dialog.hide();
		}
	});

	useSeoMeta({
		title: "Shemmy Nyirenda",
		ogTitle: "Shemmy Nyirenda",
		description:
			"A website i built with nuxt.js to showcase My skills and passions",
		ogDescription:
			"A website i built with nuxt.js to showcase My skills and passions",
		ogImage:
			"https://api.iconify.design/ph:terminal-window.svg?color=%23888888",
		twitterCard: "summary_large_image",
	});
</script>
<style scoped>
	dialog::backdrop {
		backdrop-filter: blur(8px);
		background: rgba(23, 22, 22, 0.469);
	}
</style>
