// Усі дані вигадані, демо.
import type { SiteConfig } from './types';

export const demoDental = {
	id: 'demo-dental',
	locale: 'uk',
	siteUrl: 'https://landing-engine-gamma.vercel.app',
	name: 'Спокій',
	tagline: 'Стоматологія',
	businessType: 'Dentist',
	staffLabel: 'Лікар',
	contacts: {
		phone: '+380440000000',
		phoneDisplay: '+38 (044) 000-00-00',
		address: 'вул. Прикладна, 12',
		city: 'Київ',
		geo: { lat: 50.4501, lng: 30.5234 },
		hours: 'Пн–Сб 09:00–20:00, Нд 10:00–16:00',
		hoursSchema: [
			{
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
				opens: '09:00',
				closes: '20:00',
			},
			{
				dayOfWeek: ['Sunday'],
				opens: '10:00',
				closes: '16:00',
			},
		],
		telegram: 'svetla_demo',
		viber: '+380440000000',
		instagram: 'svetla_demo',
	},
	booking: {
		web3formsKey: 'ЗАПОВНИТИ',
		timeFrom: '09:00',
		timeTo: '20:00',
		stepMinutes: 30,
		onlineService: null,
	},
	seo: {
		title: 'Стоматологія «Спокій» — лікування з планом і ціною',
		description:
			'Стоматологія «Спокій» в Києві: огляд, письмовий план і кошторис ще до початку лікування. Анестезія, запис на сьогодні. вул. Прикладна, 12. Пн–Сб 09:00–20:00.',
		ogImage: '/og/demo-dental.jpg',
		favicon: {
			svg: '/favicons/flagship-medicine/favicon.svg',
			png: '/favicons/flagship-medicine/favicon-48.png',
			apple: '/favicons/flagship-medicine/apple-touch-icon.png',
		},
	},
	rating: { value: 4.9, count: 120 },
	theme: {
		colors: {
			bg: '#F4F8FC',
			surface: '#FFFFFF',
			text: '#12263A',
			muted: '#4F6275',
			primary: '#1B6CB5',
			primaryContrast: '#FFFFFF',
			accent: '#8CC0EA',
			border: '#D5E4F2',
		},
		fonts: {
			heading: 'Onest Variable',
			body: 'Source Sans 3',
		},
		radius: '10px',
	},
	portfolio: {
		enabled: true,
		author: 'Тетяна Дорош',
		contactUrl: 'https://t.me/DOROSH_TATIANA',
	},
} satisfies SiteConfig;
