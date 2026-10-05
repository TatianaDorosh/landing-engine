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

export const contacts = {
	title: "Як нас знайти",
	directions: '3 хвилини пішки від метро "Золоті ворота", вхід з вулиці',
};
