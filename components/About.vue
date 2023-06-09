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
				class="flex mx-auto mb-4 content-center p-4 space-x-8"
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
			<div class="flex mx-auto">
				<button
					class="text-base sm:text-lg outline-none px-8 py-2 rounded-lg border hover:text-colorPrimaryLight hover:dark:text-colorPrimaryDark hover:border-colorPrimaryLight hover:dark:border-colorPrimaryDark"
					@click="dialog.showModal()"
					>Resume
				</button>
				<div class="w-4" />
				<button
					v-Ripple
					class="text-base sm:text-lg outline-none px-8 py-2 rounded-lg bg-colorPrimaryLight text-colorOnPrimaryLight"
					@click="dialog.showModal()"
					>Hire me
				</button>
			</div>
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
	const dialog = ref();
	function none() {}
</script>

<style scoped>
	dialog::backdrop {
		backdrop-filter: blur(8px);
		background: rgba(23, 22, 22, 0.469);
	}
</style>
