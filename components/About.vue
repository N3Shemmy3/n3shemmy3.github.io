<template>
	<div
		id="about"
		class="flex flex-col mb-2"
	>
		<div class="space-y-4 flex flex-col justify-center m-auto">
			<div
				ref="info"
				class="mt-20 select-text"
			>
				<h1 class="text-[55px] sm:text-[70px] text-center text-colorPrimaryLight dark:text-colorPrimaryDark">
					Hello there,</h1>
				<p class="text-lg whitespace-normal sm:text-2xl text-center">
					I'm Shemmy Nyirenda a passionate web developer
				</p>
			</div>
			<div
				ref="languages-div"
				class="flex mx-auto mb-4 content-center p-4 space-x-8"
			>
				<div
					v-for="language in languages"
					v-bind:key="language.icon"
				>
					<Icon
						:title="language.title"
						:name="language.icon"
						size="30px"
						class="transition-color noSelect duration-250 hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark"
					/>
				</div>
			</div>
			<div class="flex mx-auto ">
				<button
					v-if="false"
					class="text-base sm:text-lg outline-none px-8 py-2 rounded-lg border hover:text-colorPrimaryLight hover:dark:text-colorPrimaryDark hover:border-colorPrimaryLight hover:dark:border-colorPrimaryDark"
					@click="openLink('resume', true)"
				>Resume
				</button>
				<div class="w-4" />
				<button
					v-Ripple
					class="flex-1 md:w-30 text-base sm:text-lg outline-none px-8 py-2 rounded-lg bg-colorPrimaryLight text-colorOnPrimaryLight"
					@click="openLink('contact', true)"
				>Contact me
				</button>
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

function openLink(name: string, show: boolean) {
	useEvent("modal:event", { name: name, visible: show });
}
</script>

<style scoped></style>
