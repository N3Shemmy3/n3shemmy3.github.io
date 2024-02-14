<template>
	<Transition name="slide-fade">
		<div
			v-show="isDrawerShown"
			ref="overlay"
			@click="
				$event.target == overlay
					? $emit('update:isShown', false)
					: $emit('update:isShown', isDrawerShown)
			"
			class="fixed z-[80] top-0 left-0 md:z-0 overflow-hidden md:relative h-full md:w-[250px] w-full bg-opacity-30 bg-black"
		>
			<div
				ref="drawer"
				class="fixed h-full pe-4 w-[250px] overflow-hidden shadow-md md:shadow-none bg-colorSurfaceLight text-colorOnSurfaceLight dark:bg-colorSurfaceDark dark:text-colorOnSurfaceDark"
			>
				<div ref="header" class="p-4">
					<h6 class="text-lg font-semibold">{{ props.title }}</h6>
				</div>
				<slot class="space-y-1">
					<div class="space-y-1">
						<div
							v-for="item in menuItems"
							v-Ripple
							@click="$router.push(item.route)"
							:class="
								item.name == 'Home'
									? 'bg-colorPrimaryContainerLight dark:bg-colorPrimaryContainerDark'
									: 'bg-transparent'
							"
							class="flex group cursor-pointer transition-all duration-300 w-full min-h-[48px] p-3 items-center py-2 space-x-4 rounded-e-full hover:bg-colorPrimaryContainerLight hover:dark:bg-colorPrimaryContainerDark hover:bg-opacity-30 dark:hover:bg-opacity-30"
						>
							<Icon
								:name="item.icon"
								size="24px"
								:class="
									item.name == 'Home'
										? 'text-colorOnPrimaryContainerLight dark:text-colorOnPrimaryContainerDark'
										: ''
								"
								class="icon group-hover:text-colorOnPrimaryContainerLight dark:group-hover:text-colorOnPrimaryContainerDark"
							/>
							<h1
								:class="
									item.name == 'Home'
										? 'font-semibold text-colorOnPrimaryContainerLight dark:text-colorOnPrimaryContainerDark'
										: ''
								"
								class="icon group-hover:font-semibold transition duration-300 group-hover:text-colorOnPrimaryContainerLight dark:group-hover:text-colorOnPrimaryContainerDark"
								>{{ item.name }}</h1
							>
						</div>
					</div>
				</slot>
			</div>
		</div>
	</Transition>
</template>
<script setup>
	const props = defineProps({
		title: String,
		isShown: Boolean,
	});
	const emit = defineEmits(["update:isShown"]);
	const menuItems = [
		{
			icon: "ic:outline-home",
			name: "Home",
			route: "/",
		},
		{
			icon: "ic:outline-settings",
			name: "Dumbbell",
			route: "",
		},
		{
			icon: "ic:outline-settings",
			name: "Barbell",
			route: "",
		},
		{
			icon: "ic:outline-settings",
			name: "Stability ball",
			route: "",
		},
		{
			icon: "ic:outline-settings",
			name: "Settings",
			route: "/settings",
		},
	];

	const overlay = ref();
	const drawer = ref();

	const isDrawerShown = computed(() => {
		return window.innerWidth > 600 ? true : props.isShown;
	});
	onMounted(() => {});
</script>
<style scoped>
	.slide-side-enter-active,
	.slide-side-leave-active {
		transition: all 0.3s ease-out;
	}

	.slide-fade-leave-active {
		transition: right 0.5s cubic-bezier(0.82, 0.085, 0.395, 0.895);
	}

	.slide-fade-enter-from,
	.slide-fade-leave-to {
		transform: translateX(-100%);
	}
</style>
