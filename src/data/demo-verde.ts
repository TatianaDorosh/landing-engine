// Усі дані вигадані, демо.
import { demoVerde } from "../config/demo-verde";
import { getUi } from "../i18n";

const ui = getUi(demoVerde.locale);

export const header = {
	name: demoVerde.name,
	nav: [
		{ label: "Послуги", href: "#services" },
		{ label: "Ціни", href: "#prices" },
		{ label: "Безпека", href: "#safety" },
		{ label: "Міфи", href: "#myths" },
		{ label: "Лікарі", href: "#team" },
		{ label: "Відгуки", href: "#reviews" },
		{ label: "Питання", href: "#faq" },
	],
	ctaLabel: ui.buttons.book,
	ctaHref: "#booking",
};

export const hero = {
	eyebrow: "Лазерна епіляція · Косметологія · Київ, Позняки",
	title: "Гладка шкіра без болю і щотижневого гоління",
	text: "Діодний лазер з охолодженням, лікар-дерматолог і ціни за кожну зону — прямо на сайті. Першу консультацію і тест-спалах робимо безкоштовно.",
	primaryCta: { label: "Записатися на консультацію", href: "#booking", service: "Консультація" },
	secondaryCta: { label: "Ціни за зони", href: "#prices" },
	imageLabel: "Фото: найкраща робота або інтер'єр студії",
	image: {
		src: "/images/demo-beauty/hero.webp",
		alt: "Косметологиня в білому халаті проводить процедуру догляду за обличчям",
		width: 1067,
		height: 1600,
		position: "50% 80%",
	},
};

const ratingItems = demoVerde.rating
	? [
			{
				value: `${String(demoVerde.rating.value).replace(".", ",")} ★`,
				label: "рейтинг у Google",
			},
			{
				value: String(demoVerde.rating.count),
				label: "відгуків клієнток",
			},
		]
	: [];

export const trust = {
	items: [
		...ratingItems,
		{ value: "6 років", label: "працюємо на Позняках" },
		{ value: "12 000+", label: "процедур" },
	],
};

export const services = {
	title: "Що ми робимо",
	currency: ui.currency,
	items: [
		{
			title: "Лазерна епіляція",
			text: "Діодний лазер з охолодженням для будь-якої зони. Курс 6–8 сеансів.",
			priceFrom: 250,
			linkLabel: "Ціни за зони",
			href: "#prices",
			imageLabel: "Фото процедури лазерної епіляції",
		},
		{
			title: "Ін'єкційна косметологія",
			text: "Біоревіталізація, мезотерапія, ботулінотерапія. Лише лікар-дерматолог.",
			priceFrom: 2500,
			linkLabel: "Ціни на ін'єкції",
			href: "#prices",
			imageLabel: "Фото процедури",
			image: {
				src: "/images/demo-beauty/service-cosmetology.webp",
				alt: "Клієнтка з доглядовою маскою на обличчі під час процедури",
				width: 1067,
				height: 1600,
			},
		},
		{
			title: "Апаратна косметологія",
			text: "RF-ліфтинг, кавітація, вакуумний масаж. Видимий результат після курсу.",
			priceFrom: 600,
			linkLabel: "Ціни на апаратні процедури",
			href: "#prices",
			imageLabel: "Фото апаратної процедури",
		},
	],
};

export const prices = {
	title: 'Ціни за кожну зону — без "від" і без сюрпризів',
	note: "Перша консультація і тест-спалах — безкоштовно. Курсова ціна діє при оплаті всього курсу.",
	ctaLabel: "Записатися на консультацію",
	bookLabel: ui.buttons.book,
	currency: ui.currency,
	tabs: [
		{
			name: "Лазерна епіляція",
			levels: ["1 сеанс", "Курс 6 сеансів"],
			rows: [
				{ service: "Верхня губа", duration: "10 хв", prices: [300, 1500] },
				{ service: "Пахви", duration: "15 хв", prices: [500, 2500] },
				{ service: "Бікіні класичне", duration: "20 хв", prices: [650, 3300] },
				{ service: "Бікіні глибоке", duration: "30 хв", prices: [1000, 5100] },
				{ service: "Гомілки", duration: "30 хв", prices: [1100, 5600] },
				{ service: "Ноги повністю", duration: "60 хв", prices: [2000, 10200] },
				{ service: "Руки повністю", duration: "30 хв", prices: [1100, 5600] },
			],
		},
		{
			name: "Ін'єкції",
			levels: ["1 процедура", "Курс 3 процедур"],
			rows: [
				{ service: "Біоревіталізація", duration: "40 хв", prices: [2800, 7500] },
				{ service: "Мезотерапія обличчя", duration: "40 хв", prices: [2200, 5900] },
				{ service: "Ботулінотерапія, 1 зона", duration: "30 хв", prices: [2500, "—"] },
			],
		},
		{
			name: "Апаратна косметологія",
			levels: ["1 сеанс", "Курс 6 сеансів"],
			rows: [
				{ service: "RF-ліфтинг обличчя", duration: "40 хв", prices: [900, 4800] },
				{ service: "Кавітація, 1 зона", duration: "40 хв", prices: [800, 4200] },
				{ service: "Вакуумний масаж тіла", duration: "45 хв", prices: [600, 3200] },
			],
		},
	],
};

export const safety = {
	title: 'Безпечно, бо робить лікар, а не "майстер після курсів"',
	imageLabel: "Фото: лазерний апарат або лікар у кабінеті",
	items: [
		{
			title: "Сертифікований діодний лазер",
			text: "Апарат з медичною сертифікацією і охолодженням шкіри",
		},
		{
			title: "Лікар-дерматолог",
			text: "Вища медична освіта, консультація перед кожним курсом",
		},
		{
			title: "Оригінальні препарати",
			text: "Ампулу відкриваємо при вас, номер партії — у вашій картці",
		},
		{
			title: "Одноразові матеріали",
			text: "Нові рукавички, шапочки й насадки для кожної клієнтки",
		},
	],
};
