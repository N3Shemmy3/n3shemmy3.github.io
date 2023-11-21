<template>
	<div
		class="w-full select-none text-colorOnBackgroundLight dark:text-colorOnBackgroundDark bg-colorBackgroundLight dark:bg-colorBackgroundDark">
		<div class="max-w-screen-2xl">
			<Navbar />
			<div class="justify-center pt-14 pb-4 px-4 sm:px-6">
				<NuxtPage />
			</div>
			<FooterBar />
		</div>
	</div>
</template>

<script setup>
useListen("modal:event", (modal) => {
	switch (modal.name) {
		case "contact":
			var email = "n3shemmy3@gmail.com"
			var subject = "Job Offer"
			var body = "Hi Shem,"
			window.location.href = "mailto:" + email + "?" + "subject=" + subject + "&body=" + body;
			break;

		case "resume":
			window.open(
				"https://docs.google.com/document/d/1mJyOkuEVbRo7IoKJjB5NGdkQFmqOGVm9nkW2VJBZD9Y/edit?usp=sharing"
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
