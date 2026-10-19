// Усі дані вигадані, демо.
import type { SiteConfig } from './types';
import { slateTheme } from '../themes/slate';

export const demoDoctor = {
	id: 'demo-doctor',
	locale: 'uk',
	siteUrl: 'https://landing-engine-gamma.vercel.app',
	name: 'Наталія Коваль',
	tagline: 'гінеколог',
	businessType: 'Physician',
	staffLabel: 'Лікарка',
	contacts: {
		phone: '+380440000000',
		phoneDisplay: '+38 (044) 000-00-00',
		address: 'вул. Прикладна, 8, Київ\nКабінет у клініці «Прикладна»',
		city: 'Київ',
		geo: { lat: 50.4501, lng: 30.5234 },
		hours: 'Вт, Чт 10:00–19:00; Сб 10:00–15:00\nТільки за записом',
		hoursSchema: [
			{
				dayOfWeek: ['Tuesday', 'Thursday'],
				opens: '10:00',
				closes: '19:00',
			},
			{
				dayOfWeek: ['Saturday'],
				opens: '10:00',
				closes: '15:00',
			},
		],
		telegram: 'natalia_koval_demo',
		viber: '+380440000000',
		instagram: 'natalia_koval_demo',
	},
	booking: {
		web3formsKey: 'ЗАПОВНИТИ',
		timeFrom: '10:00',
		timeTo: '19:00',
		stepMinutes: 30,
		onlineService: null,
	},
	seo: {
		title: 'Гінеколог Наталія Коваль у Києві — запис без дзвінка',
		description:
			'Приймаю за записом у Києві. Спокійно, без поспіху й осуду: пояснюю кожен крок, ціну називаю до початку. Запис у Telegram або Viber.',
		ogImage: '/og/demo-doctor.jpg',
		favicon: '/favicon-doctor.svg',
	},
	rating: null,
	theme: slateTheme,
	portfolio: {
		enabled: true,
		author: 'Тетяна Дорош',
		contactUrl: 'https://t.me/DOROSH_TATIANA',
	},
} satisfies SiteConfig;
