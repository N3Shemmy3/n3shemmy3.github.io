<template>
    <div
        id="card"
        class="
            w-full 
            break-words 
            flex flex-col 
            rounded-md 
            shadow-sm 
            border border-colorOutlineLight 
            dark:border-colorOutlineDark"
    >
        <div
            id="text-content"
            class="p-4 space-y-2 flex-1"
        >
            <h6 class="text-2xl sm:text-[22px] font-medium">{{
                props.repo.name.charAt(0).toUpperCase() + props.repo.name.slice(1)
            }}</h6>

            <p class="text-sm font-light">{{ props.repo.description.replace("[pined]", '') }}</p>
        </div>
        <div class="flex p-4 pt-0 space-x-3">
            <NuxtLink
                v-if="props.repo.homepage"
                v-Ripple
                :to="props.repo.homepage"
                target="_blank"
            >
                <button
                    v-Ripple
                    class="
                        min-w-[33.3%] 
                        outline-none 
                        px-4 py-1.5 
                        rounded-lg 
                        bg-colorPrimaryLight 
                        text-colorOnPrimaryLight
                        text-sm
                        "
                >
                    <Icon
                        class="me-1"
                        name="ph:link"
                    />
                    live
                </button>
            </NuxtLink>
            <NuxtLink
                v-Ripple
                :to="props.repo.html_url"
                target="_blank"
            >
                <button
                    v-Ripple
                    class="
                        min-w-[33.3%] 
                        px-4 py-1.5 
                        border border-colorOutlineLight 
                        rounded-lg 
                        outline-none 
                        text-sm
                        hover:text-colorPrimaryLight hover:dark:text-colorPrimaryDark 
                        hover:border-colorPrimaryLight hover:dark:border-colorPrimaryDark"
                >
                    <Icon
                        class="me-1"
                        name="ph:github-logo"
                    />
                    code
                </button>
            </NuxtLink>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps(["repo"])

</script>
