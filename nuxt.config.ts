// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

import "./lib/env";

// This is the first thing that loads

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	modules: ["@nuxt/eslint", "@nuxt/icon", "@nuxtjs/color-mode"],
	eslint: {
		config: {
			standalone: false,
		},
	},
	vite: {
		plugins: [
			tailwindcss(),
		],
	},
	srcDir: ".",
	colorMode: {
		dataValue: "theme",
	},
});
