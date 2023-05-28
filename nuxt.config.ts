
export default defineNuxtConfig({
  modules: ['nuxt-icon'],
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
