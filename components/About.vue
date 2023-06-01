<template>
	<div id="about" class="flex flex-col space-y-4 justify-center pt-14 sm:pt-28">
		<div class="sm:flex sm:space-x-10 space-y-2">
			<img
				id="image"
				class="h-60 w-60 m-auto mt-4 sm:m-0 rounded-full"
				src="https://avatars.githubusercontent.com/u/67279072?v=4"
				alt=""
			/>
			<div class="sm:space-y-2 flex flex-col justify-center">
				<div id="info" class="space-y-2">
					<h1 class="text-3xl text-center sm:text-[45px]">Shemmy Nyirenda</h1>
					<p class="text-base text-center">
						A Front-End Software Developer based in Zambia
					</p>
				</div>
				<div
					id="languages"
					class="flex mx-auto w-9/12 content-center pt-4 justify-between"
				>
					<div v-for="language in languages" v-bind:key="language.icon">
						<Icon
							:title="language.title"
							:name="language.icon"
							size="30px"
							class="transition-color noSelect duration-250 cursor-pointer hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark"
						/>
					</div>
				</div>
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
</script>
