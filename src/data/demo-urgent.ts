// Усі дані вигадані, це демо.
import { demoUrgent } from '../config/demo-urgent';
import { getUi } from '../i18n';

const ui = getUi(demoUrgent.locale);

export const footerNote =
	'Інформація на сайті має ознайомчий характер і не замінює консультацію лікаря. Діагноз і план лікування визначає лікар після огляду. У разі загрози життю телефонуйте 103 або 112.';

export const header = {
	name: 'Лікар Поруч',
	nav: [
		{ label: 'Послуги', href: '#services' },
		{ label: 'Ціни', href: '#prices' },
		{ label: 'Лікарі', href: '#team' },
		{ label: 'Відгуки', href: '#reviews' },
		{ label: 'Питання', href: '#faq' },
		{ label: 'Контакти', href: '#contacts' },
	],
	ctaLabel: ui.buttons.book,
	ctaHref: '#booking',
};

export const urgentToday = {
	text: 'Є вільні місця на сьогодні',
	note: 'Приймаємо щодня до 21:00',
	phone: {
		label: demoUrgent.contacts.phoneDisplay ?? demoUrgent.contacts.phone,
		href: `tel:${demoUrgent.contacts.phone}`,
	},
};

export const hero = {
	title: 'Лікар прийме вас сьогодні',
	text: 'Звертайтесь у день, коли стало зле: огляд, перші процедури й план лікування в одному місці. Працюємо щодня з 8:00 до 21:00.',
	points: ['Приймаємо в день звернення', 'Терапевт, педіатр і травматолог', 'Ціну називаємо до початку'],
	primaryCta: { label: ui.buttons.book, href: '#booking' },
	secondaryCta: { label: 'Дивитись ціни', href: '#prices' },
	imageLabel: '',
	image: {
		src: '/images/demo-urgent/urgent-hero.webp',
		alt: 'Лікар оглядає пацієнта (демо)',
		width: 1200,
		height: 1013,
		position: 'center',
	},
};

export const trust = {
	items: [
		{ value: '8:00–21:00', label: 'щодня, без вихідних' },
		{ value: '4,8 ★', label: 'рейтинг у Google (демо)' },
		{ value: 'Ліцензія', label: 'МОЗ · № 000000 (демо)' },
	],
};

export const services = {
	title: 'З чим звертаються',
	currency: ui.currency,
	groupThousands: true,
	items: [
		{
			title: 'Температура й застуда',
			text: 'Огляд терапевта, пояснення, що робити далі, за потреби аналізи.',
			priceFrom: 900,
			linkLabel: ui.buttons.book,
			href: '#booking',
			service: 'Температура й застуда',
			imageLabel: 'Фото: терапевт',
			imageAlt: 'Фото: терапевт',
		},
		{
			title: 'Травми й забої',
			text: 'Огляд травматолога, перев’язка, рекомендації щодо подальшого лікування.',
			priceFrom: 1100,
			linkLabel: ui.buttons.book,
			href: '#booking',
			service: 'Травми й забої',
			imageLabel: 'Фото: травматолог',
			imageAlt: 'Фото: травматолог',
		},
		{
			title: 'Отруєння та біль у животі',
			text: 'Огляд лікаря, рекомендації та план лікування.',
			priceFrom: 900,
			linkLabel: ui.buttons.book,
			href: '#booking',
			service: 'Отруєння та біль у животі',
			imageLabel: 'Фото: огляд',
			imageAlt: 'Фото: огляд',
		},
	],
};

export const steps = {
	title: 'Як ми приймаємо',
	items: [
		{
			title: 'Дзвінок або запис',
			text: 'Подзвоніть або напишіть у Telegram чи Viber, коротко опишіть, що турбує.',
		},
		{
			title: 'Приїзд',
			text: 'Приходьте в зручний час сьогодні, ми підкажемо найближчий вільний.',
		},
		{
			title: 'Огляд',
			text: 'Лікар оглядає вас і за потреби призначає аналізи чи процедури.',
		},
		{
			title: 'План',
			text: 'Пояснюємо, що з вами, як лікуватися далі, і називаємо вартість до початку.',
		},
	],
};

function money(price: number) {
	const formatted = String(price).replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0');
	return `${formatted} ${ui.currency}`;
}

function priceRow(service: string, weekday: number, evening: number, duration: string) {
	return {
		service,
		duration,
		prices: [money(weekday), money(evening)] as [string, string],
	};
}

const levels = ['Будні', 'Вечір і вихідні'] as [string, string];

export const prices = {
	title: 'Ціни',
	note: '',
	ctaLabel: ui.buttons.book,
	bookLabel: ui.buttons.book,
	currency: ui.currency,
	tabs: [
		{
			name: 'Огляд',
			levels,
			rows: [
				priceRow('Терапевт', 900, 1100, '30 хв'),
				priceRow('Педіатр', 1000, 1200, '30 хв'),
				priceRow('Хірург-травматолог', 1100, 1300, '30 хв'),
			],
		},
		{
			name: 'Процедури',
			levels,
			rows: [
				priceRow('Перев’язка', 400, 500, '20 хв'),
				priceRow('Ін’єкція', 250, 350, '15 хв'),
			],
		},
		{
			name: 'Аналізи',
			levels,
			rows: [
				priceRow('Загальний аналіз крові (забір)', 350, 450, '10 хв'),
				priceRow('Швидкий тест на грип', 450, 550, '15 хв'),
			],
		},
	],
};

export const team = {
	title: 'Лікарі на прийомі',
	items: [
		{
			name: 'Андрій Гнатюк',
			role: 'терапевт',
			details: '12 років досвіду',
			image: {
				src: '/images/demo-urgent/urgent-doctor-gnatyuk.webp',
				alt: 'Андрій Гнатюк, терапевт (демо)',
				width: 800,
				height: 1000,
			},
		},
		{
			name: 'Софія Лисенко',
			role: 'педіатр',
			details: '9 років досвіду',
			image: {
				src: '/images/demo-urgent/urgent-doctor-lysenko.webp',
				alt: 'Софія Лисенко, педіатр (демо)',
				width: 800,
				height: 1000,
			},
		},
		{
			name: 'Олег Бондар',
			role: 'хірург-травматолог',
			details: '15 років досвіду',
			imageLabel: 'Фото: лікар',
		},
	],
};

export const reviews = {
	title: 'Відгуки пацієнтів',
	items: [
		{
			rating: 5,
			name: 'Марина',
			service: '',
			text: 'Увечері піднялась температура, записали на ту саму годину. Лікар усе пояснив і розписав, що робити далі.',
		},
		{
			rating: 5,
			name: 'Олексій',
			service: '',
			text: 'Травмував ногу, прийняли в день звернення, зробили перев’язку й дали зрозумілі рекомендації.',
		},
		{
			rating: 5,
			name: 'Ірина',
			service: '',
			text: 'Привела дитину до педіатра: усе пояснили спокійно й зрозуміло.',
		},
	],
};

export const faq = {
	title: 'Часті питання',
	helpText: '',
	items: [
		{
			question: 'Чи потрібен запис?',
			answer:
				'Краще зателефонувати або написати: підкажемо, на яку годину приїхати. За наявності вільних годин приймаємо в день звернення.',
		},
		{
			question: 'Коли треба викликати швидку, а не їхати до вас?',
			answer:
				'Якщо є загроза життю (сильний біль у грудях, втрата свідомості, сильна кровотеча, утруднене дихання), телефонуйте 103 або 112. Ми не замінюємо швидку допомогу.',
		},
		{
			question: 'Чи приймаєте дітей?',
			answer: 'Так, у нас є педіатр. Телефонуйте, підкажемо вільний час.',
		},
		{
			question: 'Скільки коштує огляд?',
			answer: 'Ціни наведені в розділі «Ціни». Вартість процедур і аналізів називаємо до початку.',
		},
		{
			question: 'Що взяти з собою?',
			answer: 'Паспорт, результати попередніх досліджень і список ліків, які ви приймаєте, якщо такі є.',
		},
	],
};

export const booking = {
	title: 'Запис на прийом',
	ctaTitle: 'Запишіться на сьогодні',
	ctaLabel: ui.buttons.book,
	ctaText: 'Залиште номер, і ми підкажемо найближчий вільний час.',
	writeLabel: '',
	note: 'Залиште контакти, і ми підтвердимо час.',
	privacyHref: '/template-urgent/privacy/',
	services: [
		{
			group: 'З чим звертаються',
			items: services.items.map((item) => item.title),
		},
		...prices.tabs.map((tab) => ({
			group: tab.name,
			items: tab.rows.map((row) => row.service),
		})),
	],
	masters: team.items.map((item) => item.name),
};

export const contacts = {
	title: 'Як нас знайти',
	directions: '5 хвилин пішки від метро (демо)',
};
