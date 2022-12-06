/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {},
		colors: {
			transparent: {
				DEFAULT: "transparent",
			},
			colorPrimary: {
				light: "#376a1f",
				dark: "#9cd67e",
			},
			colorOnPrimary: {
				light: " #ffffff",
				dark: "#0c3900",
			},
			colorError: {
				light: " #B3261E",
				dark: "#F2B8B5",
			},
			colorOnError: {
				light: "#FFFFFF",
				dark: "#601410",
			},
			colorOutline: {
				light: "#79747E",
				dark: " #938F99",
			},
			colorBackground: {
				light: " #ffffff",
				dark: "#111111",
			},
			colorOnBackground: {
				light: "#1a1c17",
				dark: "#e3e3dc",
			},
			colorSurface: {
				light: "#fdfdf5",
				dark: "#1a1c17",
			},
			colorOnSurface: {
				light: " #1a1c17",
				dark: "#e3e3dc",
			},
		},
	},
	plugins: [],
};
