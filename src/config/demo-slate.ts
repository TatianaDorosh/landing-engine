// Усі дані вигадані, демо.
import type { SiteConfig } from './types';

export const demoSlate = {
	id: 'demo-slate',
	locale: 'uk',
	siteUrl: 'https://landing-engine-gamma.vercel.app',
	name: 'Nuvo Brow & Lash',
	tagline: 'Нарощення вій і ламінування брів',
	businessType: 'BeautySalon',
	contacts: {
		phone: '+380501234567',
		phoneDisplay: '+38 (050) 123-45-67',
		address: 'вул. Саксаганського, 41',
		city: 'Київ',
		geo: { lat: 50.4501, lng: 30.5234 },
		hours: 'Пн–Сб 10:00–19:00, Нд вихідний',
		hoursSchema: [
			{
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
				opens: '10:00',
				closes: '19:00',
			},
		],
		telegram: 'nuvo_brow_lash',
		viber: '+380501234567',
		instagram: 'nuvo_brow_lash',
	},
	booking: {
		web3formsKey: 'ЗАПОВНИТИ',
		timeFrom: '10:00',
		timeTo: '19:00',
		stepMinutes: 30,
		onlineService: { name: 'Altegio', url: '[ЗАПОВНИТИ]' },
	},
	seo: {
		title: 'Nuvo Brow & Lash — нарощення вій і ламінування брів у Києві',
		description:
			'Нарощення вій і ламінування брів у Києві. Підбираю ефект під форму очей — без ефекту ляльки. Запис онлайн.',
		ogImage: '/og/demo-slate.jpg',
		favicon: '/favicon-slate.svg',
	},
	rating: { value: 4.9, count: 86 },
	theme: {
		colors: {
			bg: '#E9EDF1',
			surface: '#FFFFFF',
			text: '#18212B',
			muted: '#55616E',
			primary: '#2F4057',
			primaryContrast: '#FFFFFF',
			accent: '#C08A5B',
			border: '#CBD3DB',
		},
		fonts: {
			heading: 'Tenor Sans',
			body: 'Golos Text',
		},
		radius: '6px',
	},
	portfolio: {
		enabled: true,
		author: 'Тетяна Дорош',
		contactUrl: 'https://t.me/DOROSH_TATIANA',
	},
} satisfies SiteConfig;
