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

const gap = "[ЗАПОВНИТИ]";

export const footerNote = "Не є медичною консультацією. Діагноз і лікування призначає лікар.";

export const header = {
	name: demoDental.name,
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
	eyebrow: gap,
	title: "Лікуємо спокійно: з анестезією, планом і ціною до початку",
	text: "Огляд, зрозумілий план і кошторис письмово ще до початку лікування",
	points: ["Анестезія", "Кошторис письмово", "Запис на сьогодні"],
	primaryCta: { label: "Записатися на огляд", href: "#booking", service: "Огляд і консультація" },
	secondaryCta: { label: "Дивитись ціни", href: "#prices" },
	imageLabel: gap,
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
	title: gap,
	currency: ui.currency,
	items: [
		{
			title: "Лікування зубів",
			text: gap,
			priceFrom: 1500,
			linkLabel: ui.buttons.book,
			href: "#booking",
			service: "Лікування зубів",
			imageLabel: gap,
		},
		{
			title: "Імплантація",
			text: gap,
			priceFrom: 25000,
			linkLabel: ui.buttons.book,
			href: "#booking",
			service: "Імплантація",
			imageLabel: gap,
		},
		{
			title: "Брекети й елайнери",
			text: gap,
			priceFrom: 20000,
			linkLabel: ui.buttons.book,
			href: "#booking",
			service: "Брекети й елайнери",
			imageLabel: gap,
		},
	],
};

export const team = {
	title: gap,
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

function priceRow(service: string, price: number) {
	return { service, duration: gap, prices: [price, lead(price)] as [number, number] };
}

export const prices = {
	title: gap,
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
				priceRow("Огляд і консультація", 400),
				priceRow("Лікування карієсу", 1800),
				priceRow("Пломба", 1500),
				priceRow("Лікування каналів", 3500),
				priceRow("Видалення зуба", 1200),
				priceRow("Професійна гігієна", 1800),
				priceRow("Відбілювання", 4500),
				priceRow("Лікування ясен", 2000),
			],
		},
		{
			name: "Імплантація",
			levels: ["Лікар", "Провідний лікар"] as [string, string],
			rows: [
				priceRow("Консультація й 3D-знімок", 600),
				priceRow("Імплант", 25000),
				priceRow("Коронка", 8000),
				priceRow("Підсадка кістки", 9000),
				priceRow("Видалення з імплантацією", 5000),
			],
		},
		{
			name: "Ортодонтія",
			levels: ["Лікар", "Провідний лікар"] as [string, string],
			rows: [
				priceRow("Консультація", 500),
				priceRow("Брекети металеві", 20000),
				priceRow("Брекети керамічні", 28000),
				priceRow("Елайнери", 55000),
				priceRow("Ретейнер", 3500),
			],
		},
		{
			name: "Гігієна",
			levels: ["Лікар", "Провідний лікар"] as [string, string],
			rows: [
				priceRow("Чистка ультразвуком", 1200),
				priceRow("Air Flow", 1000),
				priceRow("Комплексна гігієна", 1800),
				priceRow("Фторування", 600),
				priceRow("Консультація гігієніста", 300),
			],
		},
	],
};

export const reviews = {
	title: gap,
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
	title: gap,
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
	ctaText: gap,
	writeLabel: "або напишіть:",
	note: gap,
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
	title: gap,
	directions: "Як дістатися: 5 хвилин пішки від метро (демо)",
};
