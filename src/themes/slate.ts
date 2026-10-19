import type { SiteConfig } from "../config/types";

/**
 * Сіро-синя тема медичної групи.
 * На сторінці її підхоплює Base.astro і записує в CSS-змінні, як BLUE у флагмані «Медицина».
 * Шрифти ті самі, що в BLUE: вони вже підключені в global.css.
 */
export const slateTheme = {
	colors: {
		bg: "#F3F5F7",
		surface: "#FFFFFF",
		text: "#1C2530",
		muted: "#596673",
		primary: "#2F4057",
		primaryContrast: "#FFFFFF",
		accent: "#8FA6BD",
		border: "#DCE2E8",
	},
	fonts: {
		heading: "Onest Variable",
		body: "Source Sans 3",
	},
	radius: "10px",
} satisfies SiteConfig["theme"];

function cssFont(name: string) {
	return `"${name.replace(/["\\]/g, "")}"`;
}

/** Рядок для style, щоб показати тему на фрагменті сторінки, не змінюючи решту. */
export function slateThemeStyle() {
	const { colors, fonts, radius } = slateTheme;
	return [
		`--theme-bg: ${colors.bg}`,
		`--theme-surface: ${colors.surface}`,
		`--theme-text: ${colors.text}`,
		`--theme-muted: ${colors.muted}`,
		`--theme-primary: ${colors.primary}`,
		`--theme-primary-contrast: ${colors.primaryContrast}`,
		`--theme-accent: ${colors.accent}`,
		`--theme-border: ${colors.border}`,
		`--theme-font-heading: ${cssFont(fonts.heading)}`,
		`--theme-font-body: ${cssFont(fonts.body)}`,
		`--theme-radius: ${radius}`,
	].join("; ");
}
