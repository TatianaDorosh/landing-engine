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
