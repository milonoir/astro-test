/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				abril: ["Abril", "serif"],
				lora: ["Lora", "serif"],
				myriad: ["MyriadPro", "sans-serif"],
				lovelyHome: ["LovelyHome", "sans-serif"],
			},
			fontSize: {
				"2xs": "0.625rem",
			},
			colors: {
				"cream": "#efebe0",
			},
		},
	},
	plugins: [],
}
