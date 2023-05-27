<template>
  <div
    class="h-screen w-full select-none text-colorOnBackgroundLight dark:text-colorOnBackgroundDark bg-colorBackgroundLight dark:bg-colorBackgroundDark"
  >
    <Head>
      <Title>Shemmy Nyirenda</Title>
      <Meta
        name="description"
        content="A website i built with nuxt.js to showcase My skills and passions"
      />
      <meta name="theme-color" content="bg-colorBackgroundLight" />
      <Style
        type="text/css"
        children="body { @apply bg-colorBackgroundLight dark:bg-colorBackgroundDark;  }"
      />
    </Head>

    <div class="max-w-screen-md">
      <Navbar />
      <div class="justify-center pt-14 px-4 pb-4 sm:pt-20 sm:px-6">
        <NuxtPage />
      </div>
      <FooterBar />
    </div>
  </div>
</template>

<script setup>
</script>
<style src="assets/css/tailwind.css">
</style>