<template>
	<div
		id="projects-title"
		class="mt-24 content-center"
	>
		<h1 class="w-full text-start text-3xl m-0 sm:text-3xl">#Projects</h1>
		<p class="text-base mt-1">Projects i have worked on:</p>

		<div class="mx-auto grid gap-4 grid-responsive py-4">
			<Project
				v-if="repositories.length > 0"
				v-for="repository in repositories"
				:id="repository.repo"
				:key="repository.repo"
				:repo="repository"
			/>

			<ProjectSkeleton
				v-else
				v-for="n in 4"
				:key="n"
			/>

		</div>
	</div>
</template>
<script setup lang="ts">

interface Repository {
	owner: string;
	repo: string;
	link: string;
	image: string;
	language: string;
	languageColor: string;
	stars: string;
	forks: number;
	description?: string;
	website?: string;
}
const repositories = ref(new Array<Repository>());
const url = "https://gh-pinned-repos.egoist.dev/?username=N3Shemmy3";
async function getData(url: string) {
	try {
		const response = await fetch(url);
		const data = await response.json();
		repositories.value = data;
	} catch (error) { }
}
onMounted(() => {
	setTimeout(function () {
		getData(url);
	}, 2000);
});
</script>
<style scoped>
.grid-responsive {
	grid-area: span;
	grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
}
</style>
