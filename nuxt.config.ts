export default defineNuxtConfig({
	app: {
		buildAssetsDir: "/app/",
		head: {
			link: [
				{
					rel: "icon",
					type: "image/png",
					href: "https://api.iconify.design/ph:terminal-window.svg?color=%23888888",
				},
			],
		},
	},
	modules: ["nuxt-icon", "@nuxtjs/tailwindcss", "@nuxt/content"],

	/* 
  imports: {
	dirs: ['./stores'],
  },
	*/
	plugins: ["@/plugins/vRipple.js"],

	css: ["@/assets/css/tailwind.css", "@/assets/fonts/product.css"],
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
	devtools: {
		enabled: true,
	},
});