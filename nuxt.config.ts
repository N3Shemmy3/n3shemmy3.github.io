// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['v-wave/nuxt'],
    css: ["@/assets/css/tailwind.css"],
    vite: {
        define: {
            'process.env.DEBUG': false
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    }
})
