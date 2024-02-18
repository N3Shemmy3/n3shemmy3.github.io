<template>
    <AppContainer class="flex flex-col">
        <div
            id="heading-wrapper"
            class="pt-10 md:pt-20 space-y-1"
        >
            <h1 class="text-4xl font-bold">Blog Posts</h1>
            <p class="text-base">A small area where i share my thoughts.</p>
        </div>
        <main>
            <ul class="mx-auto grid gap-4 grid-responsive py-4">
                <Post
                    v-if="posts.length > 0"
                    v-for="post in posts"
                    :id="post.title"
                    :key="post.title"
                    :post="post"
                />

                <ProjectSkeleton
                    v-else
                    v-for="n in 4"
                    :key="n"
                />

            </ul>
        </main>
    </AppContainer>
</template>

<script setup>
const { data: posts } = await useAsyncData('posts', () => queryContent('/blog').find())
</script>
<style scoped>
.grid-responsive {
    grid-area: span;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
}
</style>