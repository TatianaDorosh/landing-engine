// Усі дані вигадані, демо.
import type { SiteConfig } from './types';

export const demoVerde = {
	id: 'demo-verde',
	locale: 'uk',
	siteUrl: 'https://landing-engine-gamma.vercel.app',
	name: 'VERDE',
	tagline: 'Лазерна епіляція і косметологія',
	businessType: 'BeautySalon',
	contacts: {
		phone: '+380501234567',
		phoneDisplay: '+38 (050) 123-45-67',
		address: 'вул. Ревуцького, 14',
		city: 'Київ',
		geo: { lat: 50.399, lng: 30.633 },
		hours: 'Щодня 9:00–21:00',
		hoursSchema: [
			{
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
				opens: '09:00',
				closes: '21:00',
			},
		],
		telegram: 'verde_demo',
		viber: '+380501234567',
		instagram: 'verde_demo',
	},
	booking: {
		web3formsKey: 'ЗАПОВНИТИ',
		timeFrom: '09:00',
		timeTo: '21:00',
		stepMinutes: 30,
		onlineService: null,
	},
	seo: {
		title: 'VERDE — лазерна епіляція і косметологія на Позняках',
		description:
			'Діодний лазер з охолодженням, лікар-дерматолог, ціни за кожну зону на сайті. Безкоштовна консультація і тест-спалах. Запис онлайн.',
		ogImage: '/og/demo-verde.jpg',
	},
	rating: { value: 4.9, count: 184 },
	theme: {
		colors: {
			bg: '#F6F4EF',
			surface: '#FFFFFF',
			text: '#1F2A26',
			muted: '#5F6B66',
			primary: '#2F5D50',
			primaryContrast: '#FFFFFF',
			accent: '#B9A47A',
			border: '#E3E0D6',
		},
		fonts: {
			heading: 'Playfair Display Variable',
			body: 'Inter Variable',
		},
		radius: '10px',
	},
	portfolio: {
		enabled: true,
		author: 'Тетяна Дорош',
		contactUrl: 'https://t.me/DOROSH_TATIANA',
	},
} satisfies SiteConfig;
