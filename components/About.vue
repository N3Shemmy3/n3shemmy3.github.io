<template>
	<div id="about" class="flex flex-col mb-2">
		<div class="sm:space-y-2 flex flex-col justify-center m-auto">
			<div id="info" class="mt-20 sm:space-y-2">
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
			<div id="languages" class="flex mx-auto content-center p-4 space-x-8">
				<div v-for="language in languages" v-bind:key="language.icon">
					<Icon
						:title="language.title"
						:name="language.icon"
						size="30px"
						class="transition-color noSelect duration-250 hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark"
					/>
				</div>
			</div>
			<div>
				<dialog
					class="h-fit w-60 p-4 space-y-2 select-none rounded-lg bg-colorSurfaceLight dark:bg-colorSurfaceDark text-colorOnSurfaceLight dark:text-colorOnSurfaceDark"
					ref="dialog"
				>
					<h1 class="text-2xl"> Hello </h1>
					<p
						>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
						debitis voluptatibus tempore consequatur explicabo vero sequi earum.
						Officia alias quis reiciendis quaerat, nihil praesentium culpa,
						minus illo ducimus placeat dolorum!</p
					>
					<div class="pt-2">
						<button
							v-Ripple
							class="text-base px-4 py-1 outline-none rounded-md bg-colorPrimaryLight dark:bg-colorcDark"
							@click="dialog.close()"
							>Close
						</button>
						<div class="flex-grow" />
					</div>
				</dialog>
				<button
					v-Ripple
					class="text-base sm:text-lg flex outline-none mx-auto my-4 px-8 py-2 rounded-lg border border-colorOutlineLight hover:text-colorPrimaryLight hover:dark:text-colorPrimaryDark hover:border-colorPrimaryLight hover:dark:border-colorPrimaryDark"
					@click="dialog.showModal()"
					>Hire me
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
		{ title: "Java", icon: "nonicons:java-16" },
		{ title: "JavaScript", icon: "nonicons:javascript-16" },
		{ title: "Html", icon: "nonicons:html-16" },
		{ title: "Css", icon: "nonicons:css-16" },
	]);

	const dialog = ref();

	onMounted(() => {});
</script>
<style scoped>
	dialog {
		display: flex;
		display: block;
	}
	dialog[open] {
		animation: myFadeIn 2s ease-in-out;
	}

	@keyframes myFadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	dialog::backdrop {
		background-color: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(3px);
	}
</style>
