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
				"old-cream": "#efebe0",
				"cream": "#edeec9",
				"cornsilk": "#fff3d6",
				"onyx": "#383d3b",
				"bittersweet": "#ee6352",
				"cambridge-blue": "#77bfa3",
			},
		},
	},
	plugins: [],
}
