// Усі дані вигадані, демо.
import { demoLavender } from "../config/demo-lavender";
import { getUi } from "../i18n";

const ui = getUi(demoLavender.locale);

export const header = {
	name: demoLavender.name,
	nav: [
		{ label: "Послуги", href: "#services" },
		{ label: "Ціни", href: "#prices" },
		{ label: "Правила", href: "#rules" },
		{ label: "Контакти", href: "#contacts" },
	],
	ctaLabel: ui.buttons.book,
	ctaHref: "#booking",
};

export const hero = {
	eyebrow: "Нейл-студія у Києві",
	title: "Манікюр і педикюр за 2 години — один візит",
	text: "Не витрачайте пів дня: руки й ноги робимо разом і відпускаємо вас уже з готовим покриттям.",
	cta: { label: ui.buttons.book, href: "#booking" },
	image: {
		src: "/images/demo-lavender/hero.webp",
		alt: "Манікюр, робота студії Lavo Nails",
		position: "50% 40%",
		positionDesktop: "50% 35%",
	},
};

const manicureAlts = [
	"Нюдовий манікюр, коротка форма мигдаль, глянцеве покриття",
	"Молочний манікюр з тонкою сріблястою лінією біля кутикули",
	"Червоний глянцевий манікюр, форма квадрат",
	"Лавандовий манікюр з одним акцентним нігтем у дрібних квітах",
	"Французький манікюр на мигдалі, натуральна довжина",
	"Темно-сливовий манікюр, матове покриття, форма балерина",
];

const pedicureItems = [
	{ file: 1, label: "Педикюр у нюдовому кольорі, акуратна овальна форма" },
	{ file: 5, label: "Французький педикюр, натуральна довжина нігтів" },
	{ file: 3, label: "Педикюр великого пальця в студії" },
	{ file: 4, label: "Лавандовий педикюр із блиском на великому пальці" },
	{ file: 2, label: "Молочний педикюр на світлій підставці для ніг" },
	{ file: 6, label: "Синій педикюр" },
];

function galleryImage(folder: "manicure" | "pedicure", index: number, alt: string) {
	return {
		src: `/images/demo-lavender/gallery-${folder}-${index}.webp`,
		alt,
		position: "center",
		width: 800,
		height: 1000,
	};
}

export const gallery = {
	title: "Роботи",
	categories: ["Манікюр", "Педикюр"],
	items: [
		...manicureAlts.map((label, index) => ({
			category: "Манікюр",
			label,
			image: galleryImage("manicure", index + 1, `Манікюр, робота студії Lavo Nails, фото ${index + 1}`),
		})),
		...pedicureItems.map((item, index) => ({
			category: "Педикюр",
			label: item.label,
			image: galleryImage("pedicure", item.file, `Педикюр, фото ${index + 1}`),
		})),
	],
};

export const prices = {
	title: "Ціни",
	intro: "Комплекс зверху — руки й ноги за один візит. Нижче окремі послуги, якщо потрібно щось одне.",
	currency: ui.currency,
	items: [
		{
			name: "Манікюр + педикюр",
			forWhom: "Для тих, хто не хоче витрачати пів дня",
			duration: "2 год",
			price: 1900,
			featured: true,
		},
		{
			name: "Манікюр із покриттям",
			forWhom: "Коли потрібен колір на кілька тижнів",
			duration: "70 хв",
			price: 900,
		},
		{
			name: "Педикюр із покриттям",
			forWhom: "Для доглянутих ніг без окремого візиту",
			duration: "80 хв",
			price: 1100,
		},
		{
			name: "Манікюр без покриття",
			forWhom: "Якщо покриття не потрібне, лише форма і догляд",
			duration: "45 хв",
			price: 600,
		},
		{
			name: "Зняття покриття",
			forWhom: "Коли старе покриття треба зняти акуратно",
			duration: "20 хв",
			price: 150,
		},
		{
			name: "Дизайн",
			forWhom: "За один ніготь",
			duration: "10 хв",
			price: 50,
			priceFrom: true,
		},
	],
	cta: { label: ui.buttons.book, href: "#booking" },
};

export const steps = {
	title: "Ваші 2 години",
	items: [
		{
			time: "0:00",
			title: "Зустріч і вибір дизайну",
			text: "Зустрічаємо, дивимось руки й ноги, обираємо форму і колір.",
		},
		{
			time: "0:10",
			title: "Манікюр",
			text: "Знімаємо старе покриття, надаємо форму і прибираємо кутикулу.",
		},
		{
			time: "0:50",
			title: "Педикюр",
			text: "Робимо стопи і нігті ніг, поки руки відпочивають.",
		},
		{
			time: "1:35",
			title: "Покриття",
			text: "Наносимо колір на руки й ноги.",
		},
		{
			time: "1:55",
			title: "Фінальний штрих",
			text: "Олія, перевірка покриття — і ви вільні.",
		},
	],
};

export const booking = {
	title: "Запис",
	text: "Напишіть у зручний месенджер: день, час і що потрібно — манікюр, педикюр чи обидва. Підтвердимо запис у відповідь.",
	captions: {
		telegram: "Найшвидше, відповідаємо протягом години",
		viber: "Повідомлення або дзвінок",
		instagram: "Напишіть у директ",
	},
};

export const contacts = {
	title: "Як нас знайти",
	directions: "Вхід з вулиці Саксаганського",
};

export const rules = {
	title: "Правила студії",
	items: [
		{
			title: "Передоплата",
			text: "300 грн закріплюють час за вами й входять у вартість візиту.",
		},
		{
			title: "Запізнення",
			text: "Якщо запізнюєтесь понад 15 хвилин, скорочуємо послугу або переносимо: далі вже є запис.",
		},
		{
			title: "Перенесення",
			text: "Перенести чи скасувати можна за добу. Пізніше передоплата не повертається.",
		},
		{
			title: "Гарантія",
			text: "Скол не через механічне пошкодження за 7 днів переробимо безкоштовно.",
		},
		{
			title: "Безкоштовна корекція",
			text: "Дрібну корекцію одного-двох нігтів робимо безкоштовно 5 днів після візиту.",
		},
	],
};
