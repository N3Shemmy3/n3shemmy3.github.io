import vRipple from 'plugins/vRipple'
export default defineNuxtConfig({

    
    plugins: [
        '~/plugins/vRipple.js', // only in client side
    ],
    css: ["@/assets/css/tailwind.css"],
    vite: {
        define: {
            'process.env.DEBUG': false
        }
    },
    postcss: {
        plugins: {
            'postcss-import': {},
            'tailwindcss/nesting': {},
            tailwindcss: {},
            autoprefixer: {},
        }
    },

})
