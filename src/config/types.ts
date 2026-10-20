export type Locale = 'uk' | 'en';

/** Інтервал schema.org OpeningHoursSpecification без поля @type. */
export interface OpeningHours {
	dayOfWeek: string[];
	opens: string;
	closes: string;
}

/** Набір іконок: svg, png 48×48 і apple-touch 180×180. Шляхи від кореня сайту. */
export interface FaviconIcons {
	svg: string;
	png: string;
	apple: string;
}

export interface SiteConfig {
	id: string;
	locale: Locale;
	siteUrl: string;
	name: string;
	tagline: string;
	/** Тип schema.org, наприклад BeautySalon, NailSalon, Dentist. */
	businessType: string;
	/** Вилка цін для JSON-LD, наприклад «350–2000 ₴». Лише для реального клієнта. */
	priceRange?: string;
	contacts: {
		/** Формат +380XXXXXXXXX. */
		phone: string;
		phoneDisplay?: string;
		address?: string;
		postalCode?: string;
		city?: string;
		geo?: { lat: number; lng: number };
		/** Рядок для показу на сторінці. */
		hours?: string;
		/** Масив для JSON-LD. */
		hoursSchema?: OpeningHours[];
		telegram?: string;
		viber?: string;
		instagram?: string;
	};
	booking: {
		web3formsKey: string;
		timeFrom: string;
		timeTo: string;
		stepMinutes: number;
		onlineService: { name: string; url: string } | null;
	};
	seo: {
		title: string;
		description: string;
		/** Шлях від кореня сайту, наприклад /og/demo-beauty.jpg. */
		ogImage: string;
		/** Якщо не задано, сторінка бере спільний /favicon.svg. Рядок — один SVG. */
		favicon?: string | FaviconIcons;
	};
	rating: { value: number; count: number } | null;
	theme: {
		colors: {
			bg: string;
			surface: string;
			text: string;
			muted: string;
			primary: string;
			primaryContrast: string;
			accent: string;
			border: string;
		};
		fonts: {
			heading: string;
			body: string;
		};
		radius: string;
	};
	portfolio: {
		enabled: boolean;
		author: string;
		contactUrl: string;
	};
	/** Підпис спеціаліста у формі запису. Якщо не задано — «Майстер». */
	staffLabel?: string;
}
