// Усі дані вигадані, демо.
import type { SiteConfig } from './types';

export const demoMokka = {
	id: 'demo-mokka',
	locale: 'uk',
	siteUrl: 'https://landing-engine-gamma.vercel.app',
	name: 'Soma Studio',
	tagline: 'Масаж',
	businessType: 'HealthAndBeautyBusiness',
	master: 'Марта Левченко',
	contacts: {
		phone: '+380931112244',
		phoneDisplay: '+38 (093) 111-22-44',
		address: 'вул. Велика Житомирська, 18',
		city: 'Київ',
		geo: { lat: 50.4542, lng: 30.5128 },
		hours: 'Пн–Сб 10:00–20:00, Нд вихідний',
		hoursSchema: [
			{
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
				opens: '10:00',
				closes: '20:00',
			},
		],
		telegram: 'soma_mokka',
		viber: '+380931112244',
		instagram: 'soma_mokka',
	},
	/** Прайс для наступного етапу. Суми в гривнях. */
	prices: [
		{ label: '60 хв', price: 1200 },
		{ label: '90 хв', price: 1700 },
	],
	booking: {
		// Форми на цій сторінці немає, ключ не використовується.
		web3formsKey: 'ЗАПОВНИТИ',
		timeFrom: '10:00',
		timeTo: '20:00',
		stepMinutes: 30,
		onlineService: null,
	},
	seo: {
		title: 'Soma Studio — масаж у Києві, сеанси 60 і 90 хвилин',
		description:
			'Класичний і розслаблювальний масаж у Soma Studio в центрі Києва. Майстриня Марта Левченко. Сеанси 60 і 90 хвилин, Пн–Сб з 10:00 до 20:00.',
		ogImage: '/og/demo-mokka.jpg',
	},
	rating: null,
	theme: {
		colors: {
			bg: '#1C1714',
			surface: '#2A221E',
			text: '#F3EBE3',
			muted: '#B8A99C',
			primary: '#D4A373',
			primaryContrast: '#1C1714',
			accent: '#8A5A3C',
			border: '#3A302A',
		},
		fonts: {
			heading: 'Jost Variable',
			body: 'Lora Variable',
		},
		radius: '4px',
	},
	portfolio: {
		enabled: true,
		author: 'Тетяна Дорош',
		contactUrl: 'https://t.me/DOROSH_TATIANA',
	},
} satisfies SiteConfig & {
	master: string;
	prices: { label: string; price: number }[];
};
