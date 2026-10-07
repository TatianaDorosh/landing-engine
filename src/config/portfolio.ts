import type { SiteConfig } from './types';

export const terms = {
	warrantyDays: 60,
	revisionRounds: 2,
	deliveryDays: '5–7',
	prepaymentPercent: 50,
};

export const portfolio = {
	id: 'portfolio',
	locale: 'uk',
	siteUrl: 'https://landing-engine-gamma.vercel.app',
	name: 'Тетяна Дорош',
	tagline: 'Сайти для майстрів і малого бізнесу',
	businessType: 'ProfessionalService',
	contacts: {
		// Телефон на сторінці не показуємо.
		phone: '',
		hours: '[ЗАПОВНИТИ]',
		telegram: '[ЗАПОВНИТИ]',
		viber: '[ЗАПОВНИТИ]',
		instagram: '[ЗАПОВНИТИ]',
	},
	booking: {
		// Форми на цій сторінці немає, ключ не використовується.
		web3formsKey: '[ЗАПОВНИТИ]',
		timeFrom: '[ЗАПОВНИТИ]',
		timeTo: '[ЗАПОВНИТИ]',
		stepMinutes: 30,
		onlineService: null,
	},
	seo: {
		title: 'Сайти для малого бізнесу з фіксованою ціною | Тетяна Дорош',
		description:
			'Готові сайти для майстрів і малого бізнесу: оберіть приклад, а я підставлю ваші фото, ціни й контакти. Фіксована ціна, до 2 кіл правок, без сюрпризів.',
		// TODO: додати картинку прев’ю для соцмереж
		ogImage: '',
	},
	rating: null,
	theme: {
		colors: {
			bg: '#F5F7FA',
			surface: '#FFFFFF',
			text: '#1D2733',
			muted: '#5A6675',
			primary: '#2F4057',
			primaryContrast: '#FFFFFF',
			accent: '#E0A458',
			border: '#DDE3EA',
		},
		fonts: {
			heading: 'Montserrat Variable',
			body: 'Inter Variable',
		},
		radius: '12px',
	},
	portfolio: {
		enabled: false,
		author: 'Тетяна Дорош',
		contactUrl: '[ЗАПОВНИТИ]',
	},
} satisfies SiteConfig;
