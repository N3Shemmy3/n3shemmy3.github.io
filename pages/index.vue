<template>
	<div
		class="w-full h-full select-none text-colorOnBackgroundLight dark:text-colorOnBackgroundDark bg-colorBackgroundLight dark:bg-colorBackgroundDark justify-center pt-14 px-4 pb-4 sm:pt-28 sm:px-6"
	>
		<div
			id="content"
			class="overflow-auto flex flex-col m-auto max-w-3xl justify-center"
		>
			<div id="about" class="flex flex-col space-y-4 justify-center">
				<div class="sm:flex sm:space-x-10 space-y-2">
					<img
						id="image"
						class="h-60 w-60 m-auto sm:m-0 rounded-full"
						src="https://avatars.githubusercontent.com/u/67279072?v=4"
						alt=""
					/>
					<div class="sm:space-y-2 flex flex-col justify-center">
						<div id="info" class="space-y-1">
							<h1 class="text-3xl text-center sm:text-[45px]"
								>Shemmy Nyirenda</h1
							>
							<p class="text-base text-center">
								A Front-End Software Developer based in Zambia
							</p>
						</div>
						<div id="languages" class="flex m-auto pt-4 space-x-10">
							<div class="flex-grow" />
							<Icon
								v-for="language in languages"
								:title="language.title"
								:name="language.src"
								size="30"
								class="transition-color noSelect duration-250 cursor-pointer hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark"
							/>
							<div class="flex-grow" />
						</div>
					</div>
				</div>
			</div>
			<div id="projects-title" class="mt-24">
				<h1 class="w-full text-start text-3xl m-0 sm:text-3xl">#Projects</h1>
				<p class="text-base mt-1">Projects iv'e worked on.</p>
			</div>
			<div class="h-[100px]"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
	const languages = ref([
		{ title: "Java", src: "nonicons:java-16", action: "" },
		{ title: "JavaScript", src: "nonicons:javascript-16", action: "" },
		{ title: "Html", src: "nonicons:html-16", action: "" },
		{ title: "Css", src: "nonicons:css-16", action: "" },
	]);
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
