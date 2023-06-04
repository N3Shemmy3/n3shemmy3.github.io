import { createPinia, defineStore } from 'pinia';
import { createApp } from 'vue'
import App from './App.vue'

export const useAppStore = defineStore('app', () => {
  const isAppCreated = ref(false)

  function setAppCreated(state: boolean) {
    isAppCreated.value = state
  }
  return {
    isAppCreated,
  }
})