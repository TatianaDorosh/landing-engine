// Усі дані вигадані, демо.
import type { SiteConfig } from './types';

/** Та сама тема BLUE, що у флагмані «Медицина». */
const blueTheme = {
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
} satisfies SiteConfig['theme'];

export const demoUrgent = {
	id: 'demo-urgent',
	locale: 'uk',
	siteUrl: 'https://landing-engine-gamma.vercel.app',
	name: '«Лікар Поруч»',
	tagline: 'Лікар Поруч',
	businessType: 'MedicalClinic',
	staffLabel: 'Лікар',
	contacts: {
		phone: '+380440000001',
		phoneDisplay: '+38 (044) 000-00-01',
		address: 'просп. Прикладний, 21, Київ',
		city: 'Київ',
		geo: { lat: 50.4501, lng: 30.5234 },
		hours: 'щодня 8:00–21:00',
		hoursSchema: [
			{
				dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
				opens: '08:00',
				closes: '21:00',
			},
		],
		telegram: 'poruch_demo',
		viber: '+380440000001',
		instagram: 'poruch_demo',
	},
	booking: {
		web3formsKey: 'ЗАПОВНИТИ',
		timeFrom: '08:00',
		timeTo: '21:00',
		stepMinutes: 30,
		onlineService: null,
	},
	seo: {
		title: 'Терміновий прийом лікаря в Києві — сьогодні, щодня до 21:00',
		description:
			'Терапевт, педіатр і травматолог у день звернення. Щодня з 8:00 до 21:00. Подзвоніть або запишіться в Telegram чи Viber.',
		ogImage: '/og/demo-urgent.jpg',
		favicon: {
			svg: '/favicons/template-urgent/favicon.svg',
			png: '/favicons/template-urgent/favicon-48.png',
			apple: '/favicons/template-urgent/apple-touch-icon.png',
		},
	},
	rating: null,
	theme: blueTheme,
	portfolio: {
		enabled: true,
		author: 'Тетяна Дорош',
		contactUrl: 'https://t.me/DOROSH_TATIANA',
	},
} satisfies SiteConfig;
