<template>
  <App>
    <template v-slot:header>
      <Navbar />
    </template>
    <template #default>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </template>
    <template v-slot:footer>
      <Footer />
    </template>
  </App>
</template>
