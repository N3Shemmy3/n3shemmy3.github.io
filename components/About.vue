<template>
	<div id="about" class="flex flex-col mb-2">
		<div class="sm:space-y-2 flex flex-col justify-center m-auto">
			<div ref="info" class="mt-20 sm:space-y-2">
				<h1
					class="text-[60px] sm:text-[80px] text-center text-colorPrimaryLight dark:text-colorPrimaryDark"
				>
					Hi,</h1
				>
				<h1 class="text-2xl text-center sm:text-start sm:text-[50px]">
					I'm Shemmy Nyirenda
				</h1>

				<p class="text-base sm:text-lg text-center"
					>A Passionate Web Developer
				</p>
			</div>
			<div
				ref="languages-div"
				class="flex mx-auto content-center p-4 space-x-8"
			>
				<div v-for="language in languages" v-bind:key="language.icon">
					<Icon
						:title="language.title"
						:name="language.icon"
						size="30px"
						class="transition-color noSelect duration-250 hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark"
					/>
				</div>
			</div>
			<NuxtLink
				to="mailto:n3Shemmy3@gmail.com?subject=Me&body=Hello!"
				target="_blank"
			>
				<button
					v-Ripple
					class="text-base sm:text-lg flex outline-none mx-auto my-4 px-8 py-2 rounded-lg border border-colorOutlineLight hover:text-colorPrimaryLight hover:dark:text-colorPrimaryDark hover:border-colorPrimaryLight hover:dark:border-colorPrimaryDark"
					>Hire me
				</button>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
	interface Menu {
		icon: string;
		title: string;
		url: string;
	}
	const languages = ref([
		{
			title: "Java",
			icon: "nonicons:java-16",
		},
		{
			title: "JavaScript",
			icon: "nonicons:javascript-16",
		},
		{
			title: "Html",
			icon: "nonicons:html-16",
		},
		{
			title: "Css",
			icon: "nonicons:css-16",
		},
	]);

	onMounted(() => {});
</script>

<style scoped></style>
