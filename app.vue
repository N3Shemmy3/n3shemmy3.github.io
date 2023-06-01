<template>
	<ClientOnly>
		<div
			class="h-screen w-full select-none text-colorOnBackgroundLight dark:text-colorOnBackgroundDark bg-colorBackgroundLight dark:bg-colorBackgroundDark"
		>
			<div class="max-w-screen-md">
				<Navbar />
				<div class="justify-centerpt-14 pb-4 px-4 sm:px-6">
					<NuxtPage />
				</div>
				<FooterBar />
			</div>
		</div>
	</ClientOnly>
</template>

<script setup>
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
