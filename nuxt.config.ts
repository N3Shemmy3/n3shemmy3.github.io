import vRipple from 'plugins/vRipple'
export default defineNuxtConfig({
  buildModules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Noto: {
            wght: [400, 600, 700],
          },
        },
        subsets: ['latin'],
        display: 'swap',
        prefetch: false,
        preconnect: false,
        preload: false,
        download: true,
        base64: false,
      },
    ],
  ],
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
