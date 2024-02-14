<template>
	<div
		id="Toolbar"
		:class="{ 'border-b-[0.5px] dark:border-opacity-20 border-colorOutlineDark shadow-sm': isScrolled, }"
		class="fixed top-0 z-50 h-min-[56px] w-full border-b dark:border-zinc-800 bg-colorSurfaceLight dark:bg-colorSurfaceDark border-gray-50 firefox:bg-opacity-90 backdrop-blur-lg text-colorOnSurfaceLight dark:text-colorOnSurfaceDark"
	>
		<div class="max-w-screen-xl m-auto flex px-4 md:px-8 py-2 md:py-4 space-x-8 items-center">
			<NuxtLink
				class="flex"
				to="/"
			>
				<div
					class="flex noSelect justify-center content-center items-center duration-200 hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark">
					<Icon
						v-if="$props.icon"
						:name="$props.icon"
						:size="$props.iconSize"
						class="my-auto"
					/>
					<h4 class="text-lg md:text-xl font-bold px-[8px] ">{{ props.title }}</h4>
				</div>
			</NuxtLink>
			<div class="flex flex-grow space-x-1">
				<div class="flex-grow md:hidden" />
				<IconButton
					class="md:hidden"
					icon="mynaui:menu"
				/>
				<NuxtLink
					v-for="item in  props.menu "
					v-bind:key="item.icon"
					:to="item.url"
					:class="{ 'active-link': isCurrentPage(item.url) }"
					class="hidden sm:flex cursor-pointer noSelect px-4 py-2 text-lg font-bold text-colorOnSurfaceLight dark:text-colorOnSurfaceDark hover:text-colorPrimaryLight dark:hover:text-colorPrimaryDark duration-200 "
				>{{ item.title }}
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { MenuItem } from "@/types/MenuItem";
const props = defineProps({
	icon: {
		type: String,
		required: true
	},

	iconSize: {
		type: String,
		required: false
	},
	title: {
		type: String,
		required: true
	}, menu: {
		type: Array as PropType<MenuItem[]>,
		required: false
	}
});
const isScrolled = ref(false)
const route = useRoute();
const router = useRouter();

function isCurrentPage(path: string) {
	return route.path.includes(path);
}
const navigateTo = (path: string) => {
	if (route.path !== path) {
		router.push(path);
	}
};

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
