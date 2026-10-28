// Усі дані вигадані, демо.
import type { SiteConfig } from "./types";
import { sageTheme } from "../themes/sage";

export const demoPsycholog = {
	id: "demo-psycholog",
	locale: "uk",
	siteUrl: "https://landing-engine-gamma.vercel.app",
	name: "Ірина Савчук",
	tagline: "Психолог",
	businessType: "Psychologist",
	priceRange: "800–5400 ₴",
	contacts: {
		phone: "",
		city: "Київ",
		hours: "Пн–Сб, 10:00–19:00",
		hoursSchema: [
			{
				dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				opens: "10:00",
				closes: "19:00",
			},
		],
		telegram: "demo_psycholog",
		viber: "[ЗАПОВНИТИ номер]",
		instagram: "demo_psycholog",
	},
	booking: {
		web3formsKey: "ЗАПОВНИТИ",
		timeFrom: "10:00",
		timeTo: "19:00",
		stepMinutes: 30,
		onlineService: null,
	},
	seo: {
		title: "Ірина Савчук — психолог онлайн і в Києві для дорослих",
		description:
			"Ірина Савчук, психолог. Дорослі й пари, онлайн і в Києві. Знайомство 50 хвилин — 800 грн. Запис у месенджері, без дзвінків. Пн–Сб, 10:00–19:00.",
		ogImage: "",
	},
	rating: null,
	theme: sageTheme,
	portfolio: {
		enabled: true,
		author: "Тетяна Дорош",
		contactUrl: "https://t.me/DOROSH_TATIANA",
	},
} satisfies SiteConfig;
