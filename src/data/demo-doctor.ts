// Усі дані вигадані, це демо.
import { demoDoctor } from '../config/demo-doctor';
import { getUi } from '../i18n';

const ui = getUi(demoDoctor.locale);

export const footerNote =
	'Інформація на сайті має ознайомчий характер і не замінює консультацію лікаря. Діагноз і план лікування визначає лікар після огляду.';

export const header = {
	name: 'Наталія Коваль',
	nav: [
		{ label: 'Послуги', href: '#services' },
		{ label: 'Ціни', href: '#prices' },
		{ label: 'Про лікарку', href: '#doctor-about' },
		{ label: 'Відгуки', href: '#reviews' },
		{ label: 'Питання', href: '#faq' },
		{ label: 'Контакти', href: '#contacts' },
	],
	ctaLabel: ui.buttons.book,
	ctaHref: '#booking',
};

export const hero = {
	title: 'Прийом без поспіху: пояснюю кожен крок',
	text: 'Приймаю за записом, одну пацієнтку за раз. Запишіться в Telegram або Viber, телефонувати не обов’язково.',
	points: ['Спокійно й без осуду', 'Конфіденційно', 'Запис у месенджері'],
	primaryCta: { label: ui.buttons.book, href: '#booking' },
	secondaryCta: { label: 'Дивитись ціни', href: '#prices' },
	imageLabel: '',
	image: {
		src: '/images/demo-doctor/doctor-hero.webp',
		alt: 'Розмова на прийомі (демо)',
		width: 1200,
		height: 1013,
		position: 'center',
	},
};

export const trust = {
	items: [
		{ value: '14 років', label: 'досвіду' },
		{ value: '4,9 ★', label: 'рейтинг у Google (демо)' },
		{ value: 'Ліцензія МОЗ', label: '№ 000000 (демо)' },
	],
};

export const about = {
	sectionId: 'doctor-about',
	heading: 'Про лікарку',
	name: 'Наталія Коваль',
	role: 'лікар-гінеколог',
	experienceText: '14 років практики',
	photo: {
		src: '/images/demo-doctor/doctor-about.webp',
		alt: 'Наталія Коваль, лікар-гінеколог (демо)',
		width: 800,
		height: 1000,
	},
	story: [
		'Після університету працювала в міській лікарні, потім у приватній клініці. Три роки тому відкрила власну практику, щоб приймати без черг і без поспіху.',
		'Бачу, що жінки відкладають візит через сором і страх. Тому на першому прийомі ми спершу просто розмовляємо, і я пояснюю, що буде далі.',
	],
	principles: [
		'Пояснюю кожну дію до того, як її зроблю',
		'Не засуджую й не тисну',
		'Обговорюємо ціну разом, до початку',
		'Зупиняюсь, якщо вам некомфортно',
	],
};

export const services = {
	title: 'Чим допомагаю',
	currency: ui.currency,
	groupThousands: true,
	items: [
		{
			title: 'Консультація',
			text: 'Розмова, огляд за потреби, домовляємось про подальші кроки. Без поспіху.',
			priceFrom: 1200,
			linkLabel: ui.buttons.book,
			href: '#booking',
			service: 'Консультація',
			imageLabel: 'Фото: консультація',
			image: {
				src: '/images/demo-doctor/doctor-service-consult.webp',
				alt: 'Світлий кабінет прийому',
				width: 1200,
				height: 750,
			},
		},
		{
			title: 'УЗД органів малого таза',
			text: 'Дослідження в день прийому, результат пояснюю одразу.',
			priceFrom: 900,
			linkLabel: ui.buttons.book,
			href: '#booking',
			service: 'УЗД органів малого таза',
			imageLabel: 'Фото: УЗД',
			image: {
				src: '/images/demo-doctor/doctor-service-uzd.webp',
				alt: 'УЗД: кабінет з апаратом',
				width: 1200,
				height: 750,
			},
		},
		{
			title: 'Контрацепція і планування вагітності',
			text: 'Допомагаю підібрати метод і підготуватися до вагітності.',
			priceFrom: 1200,
			linkLabel: ui.buttons.book,
			href: '#booking',
			service: 'Контрацепція і планування вагітності',
			imageLabel: 'Фото: планування',
			image: {
				src: '/images/demo-doctor/doctor-service-plan.webp',
				alt: 'Планування: усміхнена жінка',
				width: 1200,
				height: 750,
			},
		},
	],
};

export const steps = {
	title: 'Як проходить перший прийом',
	items: [
		{
			title: 'Запис',
			text: 'Напишіть у Telegram чи Viber або залиште контакт. Телефонувати не обов’язково.',
		},
		{
			title: 'Розмова',
			text: 'Спершу просто говоримо: що вас турбує і чого ви боїтесь.',
		},
		{
			title: 'Огляд',
			text: 'Тільки за вашою згодою. Пояснюю кожен крок і зупиняюсь за першим сигналом.',
		},
		{
			title: 'Висновок',
			text: 'Розповідаю, що показали результати, що терміново, а що може зачекати.',
		},
		{
			title: 'План',
			text: 'Обговорюємо, що робити далі, і ціну до початку.',
		},
	],
};

function money(price: number) {
	const formatted = String(price).replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0');
	return `${formatted} ${ui.currency}`;
}

function priceRow(service: string, first: number, repeat: number, duration: string) {
	return {
		service,
		duration,
		prices: [money(first), money(repeat)] as [string, string],
	};
}

const levels = ['Перший візит', 'Повторний'] as [string, string];

export const prices = {
	title: 'Ціни',
	note: '',
	ctaLabel: ui.buttons.book,
	bookLabel: ui.buttons.book,
	currency: ui.currency,
	tabs: [
		{
			name: 'Прийом',
			levels,
			rows: [
				priceRow('Консультація', 1200, 900, '45 хв'),
				priceRow('Профілактичний огляд', 1500, 1200, '40 хв'),
			],
		},
		{
			name: 'УЗД',
			levels,
			rows: [
				priceRow('УЗД органів малого таза', 900, 800, '30 хв'),
				priceRow('УЗД з консультацією', 1700, 1400, '50 хв'),
			],
		},
		{
			name: 'Контрацепція і планування',
			levels,
			rows: [
				priceRow('Підбір методу контрацепції', 1200, 900, '40 хв'),
				priceRow('Планування вагітності', 1500, 1100, '50 хв'),
			],
		},
	],
};

export const licensesDocs = {
	title: 'Освіта, документи й конфіденційність',
	intro: 'Документи й те, як я дбаю про вашу конфіденційність.',
	documents: [
		{
			kind: 'license' as const,
			title: 'Ліцензія МОЗ України',
			caption: '№ 000000, демо',
			image: {
				src: '/images/demo-dental/dental-doc-license.webp',
				width: 896,
				height: 1200,
				alt: 'Зразок ліцензії (демо)',
			},
		},
		{
			kind: 'diploma' as const,
			title: 'Диплом лікаря',
			caption: 'Університет, рік — демо',
			image: {
				src: '/images/demo-dental/dental-doc-diploma.webp',
				width: 896,
				height: 1200,
				alt: 'Зразок диплома (демо)',
			},
		},
		{
			kind: 'certificate' as const,
			title: 'Сертифікат',
			caption: 'Курс, рік — демо',
			image: {
				src: '/images/demo-dental/dental-doc-certificate.webp',
				width: 896,
				height: 1200,
				alt: 'Зразок сертифіката (демо)',
			},
		},
	],
	sterilization: {
		title: 'Конфіденційність',
		points: [
			'Дані зберігаються лише в медичній картці',
			'Без вашої згоди їх нікому не передаю',
			'Листування залишається між нами',
		],
	},
};

export const reviews = {
	title: 'Відгуки пацієнток',
	items: [
		{
			rating: 5,
			name: 'Ірина',
			service: '',
			text: 'Роками відкладала візит, бо було соромно. На прийомі все пояснили, ніхто не поспішав. Прийшла знову вже сама.',
		},
		{
			rating: 5,
			name: 'Олена',
			service: '',
			text: 'Записалася в Telegram, телефонувати не довелося. Усе спокійно й без осуду.',
		},
		{
			rating: 5,
			name: 'Марія',
			service: '',
			text: 'Ціну сказали до початку, нічого не додали зверху. Дякую за повагу.',
		},
	],
};

export const faq = {
	title: 'Часті питання',
	helpText: '',
	items: [
		{
			question: 'Чи буде боляче?',
			answer:
				'Відчуття в кожної різні. Перед кожною дією я кажу, що зроблю, і зупиняюсь за вашим сигналом.',
		},
		{
			question: 'Чи можна прийти з подругою або партнером?',
			answer: 'Так, якщо вам так спокійніше. Під час огляду ви самі вирішуєте, хто присутній.',
		},
		{
			question: 'Чи можна прийти під час місячних?',
			answer: 'Це залежить від причини візиту. Напишіть мені перед записом, підкажу.',
		},
		{
			question: 'Чи це конфіденційно?',
			answer: 'Так. Ваші дані зберігаються в медичній картці й без вашої згоди нікому не передаються.',
		},
		{
			question: 'Як підготуватися до першого візиту?',
			answer:
				'Нічого особливого. Візьміть паспорт і результати попередніх досліджень, якщо вони є. Решту обговоримо на місці.',
		},
	],
};

export const booking = {
	title: 'Запишіться на прийом',
	ctaTitle: 'Запишіться на прийом',
	ctaLabel: ui.buttons.book,
	ctaText: 'Оберіть, як вам зручно: напишемо в Telegram чи Viber або подзвонимо, якщо хочете.',
	writeLabel: '',
	note: 'Залиште контакти, і я підтверджу запис.',
	privacyHref: '/template-doctor/privacy/',
	services: [
		{
			group: 'Прийом',
			items: ['Консультація', 'Профілактичний огляд'],
		},
		{
			group: 'УЗД',
			items: ['УЗД органів малого таза', 'УЗД з консультацією'],
		},
		{
			group: 'Контрацепція і планування',
			items: [
				'Контрацепція і планування вагітності',
				'Підбір методу контрацепції',
				'Планування вагітності',
			],
		},
	],
	masters: ['Наталія Коваль'],
};

export const contacts = {
	title: 'Контакти',
	directions: '7 хвилин пішки від метро (демо)',
};
