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
	image: {
		src: "/images/demo-beauty/hero.webp",
		alt: "Косметологиня в білому халаті проводить процедуру догляду за обличчям",
		width: 1067,
		height: 1600,
		position: "50% 80%",
	},
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
			image: {
				src: "/images/demo-beauty/service-manicure.webp",
				alt: "Майстриня наносить темний лак на нігті клієнтки",
				width: 1068,
				height: 1600,
			},
		},
		{
			title: "Косметологія",
			text: "Доглядові та ін'єкційні процедури. Проводить лікар-косметолог з медичною освітою.",
			priceFrom: 900,
			linkLabel: "Ціни на косметологію",
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
			title: "Масаж",
			text: "Релакс, лікувальний, масаж для двох. Масажисти з медичною освітою.",
			priceFrom: 800,
			linkLabel: "Ціни на масаж",
			href: "#prices",
			imageLabel: "Фото кабінету масажу",
			image: {
				src: "/images/demo-beauty/service-massage.webp",
				alt: "Кабінет масажу зі свічкою, масажний стіл з рушником",
				width: 1067,
				height: 1600,
			},
		},
	],
};

export const safety = {
	title: "Безпека — не опція, а стандарт",
	imageLabel: "Фото: автоклав, крафт-пакет або сертифікат",
	image: {
		src: "/images/demo-beauty/safety.webp",
		alt: "Манікюрні інструменти в крафт-пакеті для стерилізації",
		width: 1600,
		height: 1199,
	},
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

const galleryPhotos: Record<string, { src: string; alt: string; width: number; height: number }> = {
	"Манікюр 1": {
		src: "/images/demo-beauty/gallery-manicure-1.webp",
		alt: "Манікюр з червоним глянцевим покриттям, форма мигдаль",
		width: 1067,
		height: 1600,
	},
	"Манікюр 2": {
		src: "/images/demo-beauty/gallery-manicure-2.webp",
		alt: "Нюдовий манікюр, довга мигдалеподібна форма",
		width: 1600,
		height: 1067,
	},
	"Манікюр 3": {
		src: "/images/demo-beauty/gallery-manicure-3.webp",
		alt: "Нюдовий манікюр з малюнком медузи на одному нігті",
		width: 1600,
		height: 1071,
	},
	"Косметологія 1": {
		src: "/images/demo-beauty/gallery-cosmetology-1.webp",
		alt: "Косметолог робить масаж обличчя з кремом",
		width: 1067,
		height: 1600,
	},
	"Масаж 1": {
		src: "/images/demo-beauty/gallery-massage-1.webp",
		alt: "Світлий кабінет масажу з великим вікном",
		width: 1067,
		height: 1600,
	},
};

export const gallery = {
	title: "Наші роботи",
	categories: ["Манікюр", "Косметологія", "Масаж"],
	items: ["Манікюр", "Косметологія", "Масаж"].flatMap((category) =>
		[1, 2, 3].map((number) => {
			const label = `${category} ${number}`;
			const image = galleryPhotos[label];
			return image ? { category, label, image } : { category, label };
		}),
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

export const team = {
	title: "Хто про вас подбає",
	items: [
		{
			name: "Олена Коваль",
			role: "Майстер манікюру",
			details: "8 років досвіду",
			imageLabel: "Фото майстрині",
			image: {
				src: "/images/demo-beauty/team-olena.webp",
				alt: "Олена Коваль, майстер манікюру",
				width: 1067,
				height: 1600,
			},
			certificates: [{ label: "Сертифікат 1" }, { label: "Сертифікат 2" }],
		},
		{
			name: "Ірина Мельник",
			role: "Лікар-косметолог",
			details: "Вища медична освіта, 10 років практики",
			imageLabel: "Фото косметолога",
			image: {
				src: "/images/demo-beauty/team-iryna.webp",
				alt: "Ірина Мельник, лікар-косметолог",
				width: 1067,
				height: 1600,
			},
			certificates: [{ label: "Диплом" }, { label: "Сертифікат 1" }, { label: "Сертифікат 2" }],
		},
		{
			name: "Андрій Бондар",
			role: "Масажист",
			details: "Медичний коледж, 6 років досвіду",
			imageLabel: "Фото масажиста",
			image: {
				src: "/images/demo-beauty/team-andrii.webp",
				alt: "Андрій Бондар, масажист",
				width: 1067,
				height: 1600,
			},
			certificates: [{ label: "Сертифікат 1" }, { label: "Сертифікат 2" }],
		},
	],
};

export const steps = {
	title: "Без сюрпризів: що буде на прийомі",
	items: [
		{
			title: "Запис онлайн",
			text: "Обираєте послугу, час і зручний спосіб зв'язку",
		},
		{
			title: "Консультація",
			text: "Обговорюємо форму і колір або протипоказання",
		},
		{
			title: "Процедура",
			text: "Стерильні інструменти, без поспіху",
		},
		{
			title: "Догляд після",
			text: "Підкажемо, як зберегти результат довше",
		},
	],
};

export const reviews = {
	title: "Що кажуть клієнтки",
	allLink: { label: "Усі відгуки в Google", href: "#" },
	items: [
		{
			rating: 5,
			text: "Нарешті майстер, якій не треба пояснювати двічі. Покриття тримається вже четвертий тиждень, жодного сколу.",
			name: "Катерина",
			service: "манікюр",
		},
		{
			rating: 5,
			text: "Боялася ін'єкцій, але Ірина все пояснила і показала препарат до процедури. Результат природний, ніхто не помітив \"уколів\".",
			name: "Олена",
			service: "косметологія",
		},
		{
			rating: 5,
			text: "Записалася онлайн о 23:00, вранці отримала підтвердження в Telegram. Масаж — окремий кайф.",
			name: "Марія",
			service: "масаж",
		},
	],
};

export const gifts = {
	name: demoBeauty.name,
	title: "Подаруйте догляд",
	amounts: ["1 000 ₴", "2 000 ₴", "На процедуру"],
	text: "Записатися за сертифікатом можна онлайн: вкажіть його номер у формі. Електронний надішлемо одразу в месенджер, паперовий — заберете в студії.",
	validity: "Діє 3 місяці з дня покупки",
	ctaLabel: "Замовити сертифікат",
	ctaHref: "#booking",
	ctaService: "Подарунковий сертифікат",
};

export const booking = {
	title: "Запис онлайн",
	text: "Оберіть послугу й зручний час. Підтвердимо запис у месенджері — без дзвінків, якщо вам так зручніше.",
	privacyHref: "/flagship-beauty/privacy/",
	services: [
		{
			group: "Манікюр",
			items: [
				"Манікюр без покриття",
				"Манікюр + покриття гель-лаком",
				"Зняття + манікюр + покриття",
				"Педикюр з покриттям",
				"Дизайн, 1 ніготь",
			],
		},
		{
			group: "Косметологія",
			items: ["Комбінована чистка обличчя", "Хімічний пілінг", "Біоревіталізація", "Ботулінотерапія, 1 зона"],
		},
		{
			group: "Масаж",
			items: ["Релакс-масаж", "Масаж спини", "Масаж для двох", "Абонемент 10 релакс-масажів"],
		},
		{
			group: "Інше",
			items: ["Консультація", "Подарунковий сертифікат"],
		},
	],
	masters: ["Олена Коваль", "Ірина Мельник", "Андрій Бондар"],
};

export const bookingOnline = {
	title: "Запис через сервіс",
	text: "Оберіть зручний час у сервісі запису або зателефонуйте в студію.",
	serviceName: "Altegio",
	url: "#",
};

export const faq = {
	title: "Часті питання",
	helpText: "Не знайшли відповіді? Напишіть — відповімо протягом години в робочий час.",
	items: [
		{
			question: "Скільки тримається покриття?",
			answer: "3–4 тижні, якщо дотримуватися простих правил догляду. Майстриня розповість їх після процедури.",
		},
		{
			question: "Чи боляче робити ін'єкції?",
			answer: "Використовуємо тонкі голки й анестезуючий крем. Більшість клієнток описують відчуття як легке поколювання.",
		},
		{
			question: "Кому не можна робити процедуру?",
			answer: "Є протипоказання: вагітність і годування груддю, запалення на шкірі, деякі хронічні захворювання. Лікар уточнить усе на консультації перед процедурою.",
		},
		{
			question: "Як перенести або скасувати запис?",
			answer: "Напишіть нам у Telegram чи Viber щонайменше за 12 годин — перенесемо без доплат.",
		},
		{
			question: "Чи є паркування?",
			answer: "Так, міська парковка поруч на вулиці. Вхід до студії — з вулиці.",
		},
	],
};

export const myths = {
	title: "Міфи і факти",
	items: [
		{
			myth: "Ботокс — лише після 40",
			fact: "Профілактично його роблять і з 25–30, коли мімічні зморшки тільки з'являються. Рішення лікар приймає після консультації.",
			author: "Ірина Мельник, лікар-косметолог",
		},
		{
			myth: 'Обличчя стане "застиглим"',
			fact: "Застиглість — ознака надмірної дози. Ми працюємо дозовано, тому міміка зберігається.",
			author: "Ірина Мельник, лікар-косметолог",
		},
		{
			myth: "Гель-лак псує нігті",
			fact: "Нігті псує неправильне зняття, а не покриття. Знімаємо апаратно, без зрізання власної пластини.",
			author: "Олена Коваль, майстер манікюру",
		},
	],
};

export const contacts = {
	title: "Як нас знайти",
	directions: 'Вхід з вулиці, 5 хвилин пішки від метро "Золоті ворота".',
};
