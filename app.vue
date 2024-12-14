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
  </App>
</template>
