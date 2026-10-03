// Усі дані в цьому файлі вигадані. Це демонстраційна студія, не реальний клієнт.
import type { SiteConfig } from './types';

export const demoBeauty = {
	id: 'demo-beauty',
	locale: 'uk',
	siteUrl: 'https://landing-engine-gamma.vercel.app',
	name: 'Mira Studio',
	tagline: "Манікюр, косметологія і масаж в одному місці",
	businessType: 'BeautySalon',
	contacts: {
		phone: '+380671234567',
		phoneDisplay: '+38 (067) 123-45-67',
		address: 'вул. Ярославів Вал, 12',
		city: 'Київ',
		geo: { lat: 50.4497, lng: 30.5097 },
		hours: 'Пн–Сб 9:00–20:00, Нд 10:00–18:00',
		hoursSchema: [
			{
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
				opens: '09:00',
				closes: '20:00',
			},
			{
				dayOfWeek: ['Sunday'],
				opens: '10:00',
				closes: '18:00',
			},
		],
		telegram: 'mirastudio_demo',
		viber: '+380671234567',
		instagram: 'mirastudio_demo',
	},
	booking: {
		web3formsKey: 'ЗАПОВНИТИ',
		timeFrom: '09:00',
		timeTo: '20:00',
		stepMinutes: 30,
		onlineService: null,
	},
	seo: {
		title: 'Mira Studio — манікюр, косметологія і масаж у Києві',
		description:
			'Манікюр, догляд за обличчям і масаж у центрі Києва. Стерильні інструменти, відкриті ціни, запис онлайн без дзвінків.',
		ogImage: '/og/demo-beauty.jpg',
	},
	rating: { value: 4.9, count: 236 },
	theme: {
		colors: {
			bg: '#FBF8F5',
			surface: '#FFFFFF',
			text: '#2B2522',
			muted: '#6F6560',
			primary: '#8C5A4A',
			primaryContrast: '#FFFFFF',
			accent: '#C9A27E',
			border: '#EADFD7',
		},
		fonts: {
			heading: 'Cormorant Garamond Variable',
			body: 'Manrope Variable',
		},
		radius: '14px',
	},
	portfolio: {
		enabled: true,
		author: 'Тетяна Дорош',
		contactUrl: 'ЗАПОВНИТИ',
	},
} satisfies SiteConfig;
