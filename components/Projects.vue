<template>
	<div id="projects-title" class="mt-24">
		<h1 class="w-full text-start text-3xl m-0 sm:text-3xl">#Projects</h1>
		<p class="text-base mt-1">Projects iv'e worked on.</p>
		<div class="grid gap-4 grid-responsive py-4">
			<div
				v-for="n in 5"
				id="card"
				class="w-full sm:w-60 rounded-md shadow-sm border border-colorOutlineLight dark:border-colorOutlineDark"
			>
				<div id="img-content" class="h-52 w-full">
					<img src="/svg/undraw_floating_re_xtcj.svg" />
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
					<div class="flex pt-2 space-x-2">
						<div class="flex space-x-1">
							<Icon name="ph:star" />
							<h6 class="text-sm">200</h6>
						</div>
						<div class="flex-grow" />
						<Icon name="nonicons:javascript-16" />
						<Icon name="nonicons:html-16" />
						<Icon name="nonicons:css-16" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style>
	.grid-responsive {
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}
</style>
