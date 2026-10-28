import type { SiteConfig } from "../config/types";

/**
 * Спокійна шавлія для групи «Соло-експерти».
 * На сторінці її підхоплює Base.astro і записує в CSS-змінні, як BLUE у флагмані «Медицина».
 * Шрифти локальні: Onest і Literata вже з кирилицею, font-display: swap у файлах Fontsource.
 */
export const sageTheme = {
	colors: {
		bg: "#F5F4EF",
		surface: "#FFFFFF",
		text: "#28302B",
		muted: "#5F6A63",
		primary: "#3E6B57",
		primaryContrast: "#FFFFFF",
		accent: "#E1E9E2",
		border: "#D9E0DA",
	},
	fonts: {
		heading: "Literata Variable",
		body: "Onest Variable",
	},
	radius: "12px",
} satisfies SiteConfig["theme"];
