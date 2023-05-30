<template>
	<div
		id="content"
		class="select-none overflow-auto flex flex-col m-auto max-w-3xl justify-center"
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
						<h1 class="text-3xl text-center sm:text-[45px]">Shemmy Nyirenda</h1>
						<p class="text-base text-center">
							A Front-End Software Developer based in Zambia
						</p>
					</div>
					<div
						id="languages"
						class="flex mx-auto w-9/12 content-center pt-4 justify-between"
					>
						<Icon
							v-for="language in languages"
							:key="language.src"
							:title="language.title"
							:name="language.src"
							size="30"
							class="transition-color noSelect duration-250 cursor-pointer hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark"
						/>
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
