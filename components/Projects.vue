<template>
	<div id="projects-title" class="mt-24 content-center">
		<h1 class="w-full text-start text-3xl m-0 sm:text-3xl">#Projects</h1>
		<p class="text-base mt-1">Projects iv'e worked on.</p>
		<div class="grid gap-4 grid-responsive py-4">
			<div
				v-for="n in 12"
				id="card"
				class="w-full rounded-md shadow-sm border border-colorOutlineLight dark:border-colorOutlineDark"
			>
				<div id="img-content" class="h-36 w-full">
					<img
						class="h-full w-full object-fit"
						src="https://raw.githubusercontent.com/N3Shemmy3/n3shemmy3.github.io/82c1a302a560bfb92f118f026eb4f890bd6c469d/assets/images/svg/undraw_floating_re_xtcj.svg"
					/>
				</div>
				<div id="text-content" class="p-4 space-y-2">
					<NuxtLink
						class="cursor-pointer w-fit hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark"
					>
						<h6 class="text-2xl font-semibold">Project Name</h6>
					</NuxtLink>
					<p class="text-base"
						>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p
					>
					<div class="flex pt-2 space-x-3">
						<button
							v-Ripple
							class="text-base outline-none px-4 py-2 rounded-lg bg-colorPrimaryLight"
						>
							<Icon class="mr-1" name="ph:link" />
							live
						</button>
						<button
							v-Ripple
							class="text-base outline-none px-4 py-1 rounded-lg border border-colorOutlineLight hover:text-colorPrimaryLight hover:dark:text-colorPrimaryDark hover:border-colorPrimaryLight hover:dark:border-colorPrimaryDark"
						>
							<Icon class="mr-1" name="ph:github-logo" />
							code
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts"></script>
<style>
	.grid-responsive {
		grid-area: span;
		grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
	}
</style>
