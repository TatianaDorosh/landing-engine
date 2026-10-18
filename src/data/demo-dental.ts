// Усі дані вигадані, це демо. Фото немає навмисно: блоки показують заглушку.
import { demoDental } from "../config/demo-dental";
import { getUi } from "../i18n";

const ui = getUi(demoDental.locale);

export const urgentToday = {
	text: "Болить зараз? Є вільні місця на сьогодні",
	note: "Подзвоніть або запишіться онлайн",
	phone: {
		label: "+38 (044) 000-00-00",
		href: "tel:+380440000000",
	},
};

export const anesthesiaComfort = {
	title: "Страшно? Скажіть — зупинимось",
	intro:
		"Багато хто відкладає лікування через страх. Ми не поспішаємо й пояснюємо кожен крок до того, як його зробити.",
	items: [
		{
			title: "Місцева анестезія",
			text: "Підбираємо знеболення під процедуру й обговорюємо його з вами до початку.",
		},
		{
			title: "Гель перед уколом",
			text: "Наносимо гель, щоб укол був менш відчутним.",
		},
		{
			title: "Сигнал «стоп»",
			text: "Домовляємось про жест: підняли руку, і лікар зупиняється, щоб ви перепочили.",
		},
	],
};

export const licensesDocs = {
	title: "Ліцензія, освіта і безпека",
	intro: "Тут наші документи й те, як ми дбаємо про безпеку.",
	documents: [
		{
			kind: "license" as const,
			title: "Ліцензія МОЗ України",
			caption: "№ 000000, демо",
		},
		{
			kind: "diploma" as const,
			title: "Диплом лікаря",
			caption: "Університет, рік — демо",
		},
		{
			kind: "certificate" as const,
			title: "Сертифікат",
			caption: "Курс, рік — демо",
		},
	],
	sterilization: {
		title: "Стерилізація",
		points: [
			"Інструменти проходять стерилізацію після кожного пацієнта",
			"Одноразові матеріали відкриваємо при пацієнті",
			"Препарати й матеріали мають сертифікати",
		],
	},
};

export const steps = {
	title: "Як проходить візит",
	items: [
		{
			title: "Запис",
			text: "Оберіть час онлайн або зателефонуйте",
		},
		{
			title: "Знайомство",
			text: "Познайомимось і почуємо, що вас турбує",
		},
		{
			title: "Огляд і знімок",
			text: "Огляд і за потреби знімок",
		},
		{
			title: "План і кошторис — до початку, письмово",
			text: "Пояснюємо, що терміново, а що може зачекати. Ціна не змінюється без вашої згоди.",
		},
		{
			title: "Лікування",
			text: "Лікуємо за узгодженим планом",
		},
	],
};

export const footerNote =
	"Інформація на сайті має ознайомчий характер і не замінює консультацію лікаря. Діагноз і план лікування визначає лікар після огляду.";

export const header = {
	name: "",
	nav: [
		{ label: "Послуги", href: "#services" },
		{ label: "Ціни", href: "#prices" },
		{ label: "Лікарі", href: "#team" },
		{ label: "Відгуки", href: "#reviews" },
		{ label: "Питання", href: "#faq" },
		{ label: "Контакти", href: "#contacts" },
	],
	ctaLabel: ui.buttons.book,
	ctaHref: "#booking",
};

export const hero = {
	title: "Лікуємо спокійно: з анестезією, планом і ціною до початку",
	text: "Огляд, зрозумілий план і кошторис письмово ще до початку лікування",
	points: ["Анестезія", "Кошторис письмово", "Запис на сьогодні"],
	primaryCta: { label: "Записатися на огляд", href: "#booking", service: "Огляд і консультація" },
	secondaryCta: { label: "Дивитись ціни", href: "#prices" },
	imageLabel: "Фото: кабінет стоматолога",
	imageAlt: "Кабінет стоматолога: лікар і пацієнт",
};

const ratingItem = demoDental.rating
	? [
			{
				value: `${String(demoDental.rating.value).replace(".", ",")} ★`,
				label: `${demoDental.rating.count} відгуків`,
			},
		]
	: [];

export const trust = {
	items: [
		{ value: "15+", label: "років досвіду лікарів" },
		...ratingItem,
		{ value: "№ 000000", label: "ліцензія МОЗ (демо)" },
		{ value: "7 000+", label: "пацієнтів" },
	],
};

export const services = {
	title: "Що ми лікуємо",
	currency: ui.currency,
	groupThousands: true,
	items: [
		{
			title: "Лікування зубів",
			text: "Карієс, пломби, лікування каналів, гігієна. Спочатку огляд і план.",
			priceFrom: 1500,
			linkLabel: ui.buttons.book,
			href: "#booking",
			service: "Лікування зубів",
			imageLabel: "Фото: лікування зубів",
			imageAlt: "Лікування зубів",
		},
		{
			title: "Імплантація",
			text: "Відновлення втрачених зубів: від консультації й знімка до коронки.",
			priceFrom: 25000,
			linkLabel: ui.buttons.book,
			href: "#booking",
			service: "Імплантація",
			imageLabel: "Фото: імплантація",
			imageAlt: "Імплантація",
		},
		{
			title: "Брекети й елайнери",
			text: "Виправлення прикусу: підберемо варіант під ваші цілі й бюджет.",
			priceFrom: 20000,
			linkLabel: ui.buttons.book,
			href: "#booking",
			service: "Брекети й елайнери",
			imageLabel: "Фото: брекети й елайнери",
			imageAlt: "Брекети й елайнери",
		},
	],
};

export const team = {
	title: "Наші лікарі",
	items: [
		{
			name: "Олена Мельник",
			role: "терапевт-стоматолог",
			details: "12 років",
		},
		{
			name: "Андрій Ковальчук",
			role: "хірург-імплантолог",
			details: "15 років",
		},
		{
			name: "Ірина Шевчук",
			role: "ортодонт",
			details: "9 років",
		},
	],
};

function lead(price: number) {
	return Math.round(price * 1.3);
}

function formatPrice(price: number) {
	const formatted = String(price).replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0");
	return `${formatted} ${ui.currency}`;
}

function priceRow(service: string, price: number, duration: string) {
	return {
		service,
		duration,
		prices: [formatPrice(price), formatPrice(lead(price))] as [string, string],
	};
}

export const prices = {
	title: "Ціни",
	note: "Остаточну ціну називає лікар після огляду, письмово. Оплата: готівка, картка, частинами.",
	ctaLabel: "Записатися на огляд",
	bookLabel: ui.buttons.book,
	currency: ui.currency,
	maxVisible: 7,
	tabs: [
		{
			name: "Лікування",
			levels: ["Лікар", "Провідний лікар"] as [string, string],
			rows: [
				priceRow("Огляд і консультація", 400, "30 хв"),
				priceRow("Лікування карієсу", 1800, "60 хв"),
				priceRow("Пломба", 1500, "60 хв"),
				priceRow("Лікування каналів", 3500, "90 хв"),
				priceRow("Видалення зуба", 1200, "45 хв"),
				priceRow("Професійна гігієна", 1800, "60 хв"),
				priceRow("Відбілювання", 4500, "90 хв"),
				priceRow("Лікування ясен", 2000, "60 хв"),
			],
		},
		{
			name: "Імплантація",
			levels: ["Лікар", "Провідний лікар"] as [string, string],
			rows: [
				priceRow("Консультація й 3D-знімок", 600, "45 хв"),
				priceRow("Імплант", 25000, "90 хв"),
				priceRow("Коронка", 8000, "60 хв"),
				priceRow("Підсадка кістки", 9000, "90 хв"),
				priceRow("Видалення з імплантацією", 5000, "120 хв"),
			],
		},
		{
			name: "Ортодонтія",
			levels: ["Лікар", "Провідний лікар"] as [string, string],
			rows: [
				priceRow("Консультація", 500, "40 хв"),
				priceRow("Брекети металеві", 20000, "90 хв"),
				priceRow("Брекети керамічні", 28000, "90 хв"),
				priceRow("Елайнери", 55000, "60 хв"),
				priceRow("Ретейнер", 3500, "45 хв"),
			],
		},
		{
			name: "Гігієна",
			levels: ["Лікар", "Провідний лікар"] as [string, string],
			rows: [
				priceRow("Чистка ультразвуком", 1200, "45 хв"),
				priceRow("Air Flow", 1000, "45 хв"),
				priceRow("Комплексна гігієна", 1800, "75 хв"),
				priceRow("Фторування", 600, "30 хв"),
				priceRow("Консультація гігієніста", 300, "30 хв"),
			],
		},
	],
};

export const reviews = {
	title: "Відгуки пацієнтів",
	allLink: { label: "Усі відгуки в Google", href: "#" },
	items: [
		{
			rating: 5,
			name: "Марина",
			service: "Лікування зубів",
			text: "Років десять боялась лікувати зуби. Мені все пояснили й не поспішали.",
		},
		{
			rating: 5,
			name: "Олег",
			service: "Імплантація",
			text: "На консультації все розклали по пунктах і назвали ціну письмово, ще до початку.",
		},
		{
			rating: 5,
			name: "Софія",
			service: "Брекети й елайнери",
			text: "Записалась на огляд у зручний час. Пояснили, як пройде візит, і не квапили.",
		},
	],
};

export const faq = {
	title: "Часті питання",
	openFirst: true,
	helpText: "Не знайшли відповіді?",
	items: [
		{
			question: "Чи буде боляче?",
			answer:
				"Ми використовуємо анестезію й домовляємось про сигнал «стоп»: якщо щось викликає дискомфорт, лікар зупиняється. Чутливість у всіх різна, тому перед лікуванням обговорюємо, як вам комфортніше.",
		},
		{
			question: "Скільки коштує лікування і коли я дізнаюсь ціну?",
			answer: "Після огляду лікар складає план і кошторис письмово. Ціна не змінюється без вашої згоди.",
		},
		{
			question: "Що, якщо мені дуже страшно?",
			answer:
				"Скажіть про це при записі: ми не поспішатимемо, пояснимо кожен крок і нічого не почнемо без вашої згоди. Можна почати лише з консультації.",
		},
		{
			question: "Чи можна прийти з дитиною?",
			answer: "Так. Для дітей є окремий запис, уточніть вік при записі.",
		},
		{
			question: "Як оплатити?",
			answer: "Готівкою або карткою після прийому. Для великих планів лікування можна обговорити оплату частинами.",
		},
	],
};

export const booking = {
	title: "Запишіться на огляд",
	ctaTitle: "Запишіться на огляд",
	ctaLabel: "Записатися на огляд",
	ctaText: "Оберіть зручний час, ми підтвердимо запис",
	writeLabel: "або напишіть:",
	note: "Залиште контакти, і ми підтвердимо запис",
	privacyHref: "/flagship-medicine/privacy/",
	services: [
		{
			group: "Послуги",
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
	title: "Контакти",
	directions: "5 хвилин пішки від метро (демо)",
};
