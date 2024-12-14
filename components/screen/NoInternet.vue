<script setup>
const isOnline = ref(navigator.onLine); // Initialize with the current status

const updateOnlineStatus = () => {
  isOnline.value = navigator.onLine;
};

onMounted(() => {
  // Listen for connectivity changes
  window.addEventListener("online", updateOnlineStatus);
  window.addEventListener("offline", updateOnlineStatus);
});

onUnmounted(() => {
  // Cleanup event listeners
  window.removeEventListener("online", updateOnlineStatus);
  window.removeEventListener("offline", updateOnlineStatus);
});
</script>

<template>
  <div
    v-show="isOnline"
    class="fixed left-0 top-0 right-0 bottom-0 z-[100] flex flex-col space-y-2 items-center justify-center bg-colorBackgroundLight dark:bg-colorBackgroundDark text-colorOnBackgroundLight dark:text-colorOnBackgroundDark"
  >
    <Icon name="ic:outline-wifi-off" size="140" />
    <h4 class="text-lg">No Internet</h4>
    <p class="text-sm">Please check your internet connect</p>
  </div>
</template>
