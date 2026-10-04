// Усі дані вигадані, демо.
import { demoBeauty } from "../config/demo-beauty";
import { getUi } from "../i18n";

const ui = getUi(demoBeauty.locale);

export const header = {
	name: demoBeauty.name,
	nav: [
		{ label: "Послуги", href: "#services" },
		{ label: "Безпека", href: "#safety" },
		{ label: "Роботи", href: "#gallery" },
		{ label: "Ціни", href: "#prices" },
		{ label: "Майстри", href: "#team" },
		{ label: "Відгуки", href: "#reviews" },
		{ label: "Сертифікати", href: "#gifts" },
		{ label: "Питання", href: "#faq" },
	],
	ctaLabel: ui.buttons.book,
	ctaHref: "#booking",
};

export const hero = {
	eyebrow: "Манікюр · Косметологія · Масаж · Київ",
	title: "Красиво, безпечно і з чесною ціною",
	text: "Стерильні інструменти, сертифіковані препарати і прайс на сайті, а не «пишіть у директ». Запис онлайн за хвилину, і без дзвінків, якщо вам так зручніше.",
	primaryCta: { label: ui.buttons.book, href: "#booking" },
	secondaryCta: { label: "Дивитися ціни", href: "#prices" },
	imageLabel: "Фото: найкраща робота або інтер'єр студії",
};

const ratingItems = demoBeauty.rating
	? [
			{
				value: `${String(demoBeauty.rating.value).replace(".", ",")} ★`,
				label: "рейтинг у Google",
			},
			{
				value: String(demoBeauty.rating.count),
				label: "відгуків клієнток",
			},
		]
	: [];

export const trust = {
	items: [
		...ratingItems,
		{ value: "8 років", label: "досвіду майстрів" },
		{ value: "1 200+", label: "постійних клієнток" },
	],
};

export const services = {
	title: "Що ми робимо",
	currency: ui.currency,
	items: [
		{
			title: "Манікюр і педикюр",
			text: "Покриття, яке тримається 3–4 тижні. Класичний, апаратний, комбінований.",
			priceFrom: 550,
			linkLabel: "Ціни на манікюр",
			href: "#prices",
			imageLabel: "Фото манікюру",
		},
		{
			title: "Косметологія",
			text: "Доглядові та ін'єкційні процедури. Проводить лікар-косметолог з медичною освітою.",
			priceFrom: 900,
			linkLabel: "Ціни на косметологію",
			href: "#prices",
			imageLabel: "Фото процедури",
		},
		{
			title: "Масаж",
			text: "Релакс, лікувальний, масаж для двох. Масажисти з медичною освітою.",
			priceFrom: 800,
			linkLabel: "Ціни на масаж",
			href: "#prices",
			imageLabel: "Фото кабінету масажу",
		},
	],
};

export const safety = {
	title: "Безпека — не опція, а стандарт",
	imageLabel: "Фото: автоклав, крафт-пакет або сертифікат",
	items: [
		{
			title: "Стерилізація в автоклаві",
			text: "Крафт-пакет з інструментами відкриваємо при вас",
		},
		{
			title: "Одноразові пилки і бафи",
			text: "Новий набір для кожної клієнтки",
		},
		{
			title: "Оригінальні препарати",
			text: "Лише з офіційних поставок, сертифікати покажемо на прийомі",
		},
		{
			title: "Медична освіта косметолога",
			text: "Диплом лікаря-дерматолога і 10 років практики",
		},
	],
};

export const gallery = {
	title: "Наші роботи",
	categories: ["Манікюр", "Косметологія", "Масаж"],
	items: ["Манікюр", "Косметологія", "Масаж"].flatMap((category) =>
		[1, 2, 3].map((number) => ({
			category,
			label: `${category} ${number}`,
		})	),
	),
};

export const beforeAfter = {
	title: "Результат, який видно",
	caption: "Комбінована чистка обличчя, результат через 2 тижні. Фото клієнтки з її згоди.",
	beforeLabel: "До",
	afterLabel: "Після",
};

export const prices = {
	title: "Ціни — тут, а не в директі",
	note: "Ціни остаточні, без доплат на місці. Для масажу є абонементи.",
	ctaLabel: "Записатися на послугу",
	bookLabel: ui.buttons.book,
	currency: ui.currency,
	tabs: [
		{
			name: "Манікюр",
			levels: ["Майстер", "Топ-майстер"],
			rows: [
				{ service: "Манікюр без покриття", duration: "60 хв", prices: [550, 700] },
				{ service: "Манікюр + покриття гель-лаком", duration: "90 хв", prices: [650, 850] },
				{ service: "Зняття + манікюр + покриття", duration: "120 хв", prices: [750, 950] },
				{ service: "Педикюр з покриттям", duration: "90 хв", prices: [850, 1050] },
				{ service: "Дизайн, 1 ніготь", duration: "10 хв", prices: [30, 50] },
			],
		},
		{
			name: "Косметологія",
			levels: ["Косметолог", "Лікар-косметолог"],
			rows: [
				{ service: "Комбінована чистка обличчя", duration: "90 хв", prices: [900, 1200] },
				{ service: "Хімічний пілінг", duration: "45 хв", prices: [1000, 1300] },
				{ service: "Біоревіталізація", duration: "30 хв", prices: [2800, 3400] },
				{ service: "Ботулінотерапія, 1 зона", duration: "30 хв", prices: [2500, 3000] },
			],
		},
		{
			name: "Масаж",
			levels: ["Масажист", "Топ-масажист"],
			rows: [
				{ service: "Релакс-масаж", duration: "60 хв", prices: [800, 1000] },
				{ service: "Масаж спини", duration: "45 хв", prices: [850, 1050] },
				{ service: "Масаж для двох", duration: "60 хв", prices: [1700, 2100] },
				{ service: "Абонемент 10 релакс-масажів", duration: "—", prices: [7200, 9000] },
			],
		},
	],
};
