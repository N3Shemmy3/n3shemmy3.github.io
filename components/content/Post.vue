<template>
    <NuxtLink
        id="card"
        :to="props.post._path"
        class="
            w-full 
            break-words 
            flex flex-col 
            rounded-md 
            shadow-sm
            cursor-pointer
            transition-all
            duration-300
            hover:bg-opacity-20
            dark:hover:bg-opacity-20
            hover:bg-colorPrimaryLight
            dark:hover:bg-colorPrimaryDark
            border border-colorOutlineLight 
            dark:border-colorOutlineDark"
    >
        <div id="image-wrapper">
            <NuxtImg
                class="w-full aspect-video rounded-t-md bg-colorPrimaryLight"
                :src="props.post.image.src"
                :alt="props.post.image.src.alt"
            />
        </div>
        <div
            id="text-wrapper"
            class="p-4 space-y-2 flex-1"
        >
            <h6 class="text-xl font-bold">{{
                props.post.title.charAt(0).toUpperCase() + props.post.title.slice(1)
            }}</h6>

            <p class="text-sm font-light">{{ props.post.description }}</p>
        </div>
        <div></div>

    </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps(["post"])

</script>

