
export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
     '@pinia/nuxt',
  ],
  imports: {
    dirs: ['./stores'],
  },

  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  plugins: [
    '@/plugins/vRipple.js', // only in client side
  ],
  css: [
    "@/assets/css/tailwind.css",
    '@/assets/fonts/product.css'
  ],

  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    }
  },
})
