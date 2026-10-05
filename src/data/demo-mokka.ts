// Усі дані вигадані, демо.
import { demoMokka } from "../config/demo-mokka";
import { getUi } from "../i18n";

const ui = getUi(demoMokka.locale);

export const header = {
	name: demoMokka.name,
	nav: [
		{ label: "Про мене", href: "#about" },
		{ label: "Ціни", href: "#prices" },
		{ label: "Контакти", href: "#contacts" },
	],
	ctaLabel: ui.buttons.book,
	ctaHref: "#booking",
};

export const hero = {
	eyebrow: "Масаж у Києві",
	title: "Масаж, після якого тіло нарешті відпускає",
	text: "Індивідуальні сеанси без поспіху в тихому кабінеті. Марта Левченко, 7 років практики.",
	cta: { label: ui.buttons.book, href: "#booking" },
	image: {
		src: "/images/demo-mokka/hero.webp",
		alt: "Жінка в білій медичній сорочці й чорних окулярах стоїть зі схрещеними руками в світлому кабінеті",
		position: "center 20%",
		positionDesktop: "50% 20%",
	},
};

export const about = {
	title: "Про мене",
	paragraphs: [
		"Мене звати Марта. Я працюю з тілом сім років: спершу з тими, хто втомився після тренувань і сидячої роботи, тепер частіше з тими, хто просто хоче видихнути.",
		"Перед сеансом ми розмовляємо хвилин п'ять: де болить, як ви спите, чого не варто чіпати. Тиск і темп я підбираю під вас, а не за шаблоном.",
	],
	facts: [
		"7 років практики",
		"Класичний і лімфодренажний масаж",
		"Медичний коледж, 2019; щорічне підвищення кваліфікації",
	],
	signature: "Марта",
	image: {
		src: "/images/demo-mokka/about.webp",
		alt: "Масажистка в білій футболці масажує шию і плечі клієнтки, яка лежить на кушетці",
		position: "center 30%",
	},
};

export const prices = {
	title: "Сеанси й ціни",
	intro: "Ціна одна, без доплат. Тривалість можна змінити під вас.",
	currency: ui.currency,
	items: [
		{
			name: "Масаж спини і шиї",
			forWhom: "Для тих, у кого болить після сидячої роботи",
			duration: "60 хв",
			price: 1200,
		},
		{
			name: "Класичний масаж всього тіла",
			forWhom: "Коли тіло втомилось цілком",
			duration: "90 хв",
			price: 1700,
		},
		{
			name: "Релакс з олією",
			forWhom: "Щоб видихнути й заснути",
			duration: "60 хв",
			price: 1300,
		},
		{
			name: "Лімфодренажний",
			forWhom: "Для набряків і важкості в ногах",
			duration: "90 хв",
			price: 1800,
		},
	],
	subscription: "Абонемент на 5 сеансів — знижка 10%",
	cta: { label: ui.buttons.book, href: "#booking" },
};

export const contacts = {
	title: "Як нас знайти",
	directions: '3 хвилини пішки від метро "Золоті ворота", вхід з вулиці',
};
