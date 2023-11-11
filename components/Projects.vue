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
				:id="repository.name"
				:key="repository.name"
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
	name: string;
	html_url: string;
	description?: string;
	stargazers_url: string;
	forks_url: number;
	homepage?: string;
}
const repositories = ref(new Array<Repository>());
const username = 'N3Shemmy3';
const accessToken = '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';

onMounted(() => {
	getUserReposWithAuth(username, accessToken)
		.then(repos => {
			if (repos) {
				const list = ref(new Array<Repository>());
				list.value = repos;
				list.value.forEach((item: Repository) => {
					if (item.description?.includes("[pined]")) {
						repositories.value.push(item);
					}
				});
			}
		});
});
async function getUserReposWithAuth(username: string, accessToken: string): Promise<any | null> {
	const apiUrl = `https://api.github.com/users/${username}/repos`;

	try {
		const headers = new Headers();
		headers.append('Authorization', `Bearer ${accessToken}`);

		const response = await fetch(apiUrl, { headers });

		if (response.status === 403) {
			const resetTime = parseInt(response.headers.get('X-RateLimit-Reset')!, 10) * 1000; // Convert to milliseconds
			const currentTime = new Date().getTime();
			const timeUntilReset = resetTime - currentTime;
			const warning = `Rate limit exceeded. Please wait for ${timeUntilReset / 1000} seconds before trying again.`
			console.warn(warning);
			window.alert(warning)
			return null;
		}

		if (!response.ok) {
			throw new Error(`Failed to fetch user repos. Status: ${response.status}`);
		}

		const repos = await response.json();
		return repos;
	} catch (error) {
		console.error(error.message);
		return null;
	}
}

</script>
<style scoped>
.grid-responsive {
	grid-area: span;
	grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
}
</style>
