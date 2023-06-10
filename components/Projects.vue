<template>
	<div id="projects-title" class="mt-24 content-center">
		<h1 class="w-full text-start text-3xl m-0 sm:text-3xl">#Projects</h1>
		<p class="text-base mt-1">Projects iv'e worked on.</p>
		<div class="mx-auto grid gap-4 grid-responsive py-4">
			<div
				v-for="repository in repositories"
				:key="repository.repo"
				id="card"
				class="w-full break-words flex flex-col rounded-md shadow-sm border border-colorOutlineLight dark:border-colorOutlineDark"
			>
				<div id="text-content" class="p-4 space-y-2 flex-1">
					<h6 class="text-2xl sm:text-[22px] font-medium">{{
						repository.repo.charAt(0).toUpperCase() + repository.repo.slice(1)
					}}</h6>

					<p class="text-base font-light">{{ repository.description }}</p>
				</div>
				<div class="flex p-4 pt-0 space-x-3">
					<NuxtLink
						v-if="repository.website"
						v-Ripple
						:to="repository.website"
						target="_blank"
					>
						<button
							v-Ripple
							class="text-base outline-none px-4 py-2 rounded-lg bg-colorPrimaryLight text-colorOnPrimaryLight"
						>
							<Icon class="me-1" name="ph:link" />
							live
						</button>
					</NuxtLink>
					<NuxtLink v-Ripple :to="repository.link" target="_blank">
						<button
							v-Ripple
							class="text-base outline-none px-4 py-2 rounded-lg border border-colorOutlineLight hover:text-colorPrimaryLight hover:dark:text-colorPrimaryDark hover:border-colorPrimaryLight hover:dark:border-colorPrimaryDark"
						>
							<Icon class="me-1" name="ph:github-logo" />
							code
						</button>
					</NuxtLink>
				</div>
			</div>
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
		} catch (error) {}
	}
	onMounted(() => {
		getData(url);
	});
</script>
<style scoped>
	.grid-responsive {
		grid-area: span;
		grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
	}
</style>
