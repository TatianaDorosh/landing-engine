// Усі дані вигадані, демо.
import { demoMokka } from "../config/demo-mokka";
import { getUi } from "../i18n";

const ui = getUi(demoMokka.locale);

export const header = {
	name: demoMokka.name,
	nav: [{ label: "Контакти", href: "#contacts" }],
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
	},
};

export const contacts = {
	title: "Як нас знайти",
	directions: '3 хвилини пішки від метро "Золоті ворота", вхід з вулиці',
};
