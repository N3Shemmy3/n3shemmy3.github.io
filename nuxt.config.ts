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
	modules: ["nuxt-icon"],

	/* 
  imports: {
	dirs: ['./stores'],
  },
	*/
	ugins: ["@/plugins/vRipple.js', // "],

	css: ["@/assets/css/tailwind.css", "@/assets/fonts/product.css"],

	postcss: {
		plugins: {
			"postcss-import": {},
			"tailwindcss/nesting": {},
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	devtools: {
		enabled: true,
	},
});
