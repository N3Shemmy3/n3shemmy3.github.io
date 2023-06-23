<template>
	<ClientOnly>
		<div
			class="w-full select-none text-colorOnBackgroundLight dark:text-colorOnBackgroundDark bg-colorBackgroundLight dark:bg-colorBackgroundDark"
		>
			<div class="max-w-screen-2xl">
				<Navbar />

				<div class="justify-center pt-14 pb-4 px-4 sm:px-6">
					<dialog
						ref="dialog"
						style="padding: 0"
						@click="$event.target === dialog ? dialog.close() : none()"
						class="w-full sm:max-w-md mx-auto open:animate-fade-in open:backdrop:animate-fade-in rounded-lg shadow-md bg-colorSurfaceLight dark:bg-colorSurfaceDark text-colorOnSurfaceLight dark:text-colorOnSurfaceDark"
					>
						<Contact @onSubmit="dialog.close()" />
					</dialog>
					<NuxtPage />
				</div>
				<FooterBar />
			</div> </div
	></ClientOnly>
</template>

<script setup>
	const dialog = ref();
	const resume = ref();
	const isAppCreated = ref(false);

	onMounted(() => {
		setTimeout(() => {
			isAppCreated.value = true;
		}, 1000);
	});

	useListen("modal:event", (modal) => {
		console.log(modal.name);
		switch (modal.name) {
			case "contact":
				dialog.value.showModal();
				break;

			case "resume":
				window.open(
					"https://docs.google.com/document/d/1bXxIPboGQN6y2x7AhPei-7kb508BDu25biBhoF8EJXA/edit?usp=sharing"
				);
				break;
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
