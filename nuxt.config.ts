export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
  ],

  /* 
  imports: {
    dirs: ['./stores'],
  },
    */

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

  devtools: {
    enabled: true,
  },
})
