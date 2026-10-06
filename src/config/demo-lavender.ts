// Усі дані вигадані, демо.
import type { SiteConfig } from './types';

export const demoLavender = {
	id: 'demo-lavender',
	locale: 'uk',
	siteUrl: 'https://landing-engine-gamma.vercel.app',
	name: 'Lavo Nails',
	tagline: 'Манікюр і педикюр',
	businessType: 'NailSalon',
	contacts: {
		phone: '+380931112266',
		phoneDisplay: '+38 (093) 111-22-66',
		address: 'вул. Саксаганського, 40',
		city: 'Київ',
		geo: { lat: 50.4362, lng: 30.5101 },
		hours: 'Пн–Нд 10:00–20:00',
		hoursSchema: [
			{
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
				opens: '10:00',
				closes: '20:00',
			},
		],
		telegram: 'lavo_nails',
		viber: '+380931112266',
		instagram: 'lavo_nails',
	},
	booking: {
		web3formsKey: 'ЗАПОВНИТИ',
		timeFrom: '10:00',
		timeTo: '20:00',
		stepMinutes: 30,
		onlineService: null,
	},
	seo: {
		title: 'Lavo Nails — манікюр і педикюр у Києві за 2 години',
		description:
			'Манікюр і педикюр за один візит у студії Lavo Nails на Саксаганського. Близько 2 годин, без пів дня в салоні. Щодня з 10:00 до 20:00.',
		ogImage: '/og/demo-lavender.jpg',
	},
	rating: null,
	theme: {
		colors: {
			bg: '#F3F0F8',
			surface: '#FFFFFF',
			text: '#26213A',
			muted: '#675F7D',
			primary: '#5B4B8A',
			primaryContrast: '#FFFFFF',
			accent: '#B8A6E0',
			border: '#DDD5EA',
		},
		fonts: {
			heading: 'Unbounded Variable',
			body: 'Onest Variable',
		},
		radius: '20px',
	},
	portfolio: {
		enabled: true,
		author: 'Тетяна Дорош',
		contactUrl: 'https://t.me/DOROSH_TATIANA',
	},
} satisfies SiteConfig;
