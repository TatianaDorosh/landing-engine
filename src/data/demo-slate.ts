// Усі дані вигадані, демо.
import { demoSlate } from "../config/demo-slate";
import { getUi } from "../i18n";

const ui = getUi(demoSlate.locale);
const online = demoSlate.booking.onlineService;

export const header = {
	name: demoSlate.name,
	nav: [
		{ label: "Про мене", href: "#about" },
		{ label: "Ціни", href: "#prices" },
		{ label: "Відгуки", href: "#reviews" },
		{ label: "Контакти", href: "#contacts" },
	],
	ctaLabel: ui.buttons.book,
	ctaHref: "#booking",
};

export const hero = {
	eyebrow: "Нарощення вій і брови · Київ",
	title: "Вії та брови, які виглядають як ваші, тільки кращі",
	text: "Підбираю ефект під форму очей і ваш ритм життя. Без ефекту ляльки і неприродного вигляду.",
	primaryCta: { label: ui.buttons.book, href: "#booking" },
	secondaryCta: { label: "Дивитися ціни", href: "#prices" },
	imageLabel: "Фото: вії або брови",
};

export const effects = {
	title: "Оберіть свій ефект",
	lead: "Не знаєте, що вам підійде? Підберемо на консультації за формою очей і вашим ритмом життя",
	items: [
		{
			title: "Класика 1:1",
			forWhom: "для щоденного вигляду, коли хочеться своїх вій, але густіших",
			duration: "Тримається 3–4 тижні",
			priceFrom: 1400,
			imageLabel: "Фото: класика",
			href: "#booking",
		},
		{
			title: "2D",
			forWhom: "для легкого об'єму й виразнішого погляду",
			duration: "Тримається 3–4 тижні",
			priceFrom: 1700,
			imageLabel: "Фото: 2D",
			href: "#booking",
		},
		{
			title: "3D",
			forWhom: "для густого, вечірнього вигляду",
			duration: "Тримається 3–4 тижні",
			priceFrom: 2000,
			imageLabel: "Фото: 3D",
			href: "#booking",
		},
		{
			title: "Ламінування своїх вій",
			forWhom: "без нарощення: свої вії підкручені й темніші",
			duration: "Тримається 4–6 тижнів",
			priceFrom: 1100,
			imageLabel: "Фото: ламінування",
			href: "#booking",
		},
	],
};

export const about = {
	title: "Про мене",
	paragraphs: [
		"Мене звати Софія. Роблю вії та брови так, щоб вони лишались вашими: природно і без перевантаження.",
		"Спершу дивлюсь на форму очей, густоту своїх вій і як ви живете щодня. Об'єм додаю лише там, де він личить, і не пропоную ефект ляльки.",
	],
	facts: [
		"7 років у професії",
		"Кожен ефект підбираю на консультації",
		"Стерильні інструменти й сертифіковані матеріали",
	],
	signature: "Софія",
};

export const prices = {
	title: "Ціни",
	note: "Тире в колонці «Корекція» і «Повторний візит» — ціни ще немає, назву на консультації. Ламінування вій стоїть у колонці нового нарощення, бо це окрема процедура.",
	ctaLabel: ui.buttons.book,
	bookLabel: ui.buttons.book,
	currency: ui.currency,
	tabs: [
		{
			name: "Вії",
			levels: ["Нове нарощення", "Корекція"],
			rows: [
				{ service: "Класика", duration: "2 год", prices: [1400, "—"] },
				{ service: "2D", duration: "2,5 год", prices: [1700, "—"] },
				{ service: "3D", duration: "3 год", prices: [2000, "—"] },
				{ service: "Ламінування вій", duration: "60 хв", prices: [1100, "—"] },
			],
		},
		{
			name: "Брови",
			levels: ["Вартість", "Повторний візит"],
			rows: [
				{ service: "Ламінування", duration: "60 хв", prices: [900, "—"] },
				{ service: "Корекція й фарбування", duration: "45 хв", prices: [450, "—"] },
				{ service: "Корекція форми", duration: "30 хв", prices: [350, "—"] },
			],
		},
	],
};

export const myths = {
	title: "Міфи про вії та брови",
	items: [
		{
			myth: "Нарощення завжди виглядає як лялька",
			fact: "Об'єм і вигин підбираю під форму очей. Можна лишити ефект, який помічаєте лише ви.",
			author: "Софія Коваль, brow & lash майстриня",
		},
		{
			myth: "Після нарощення свої вії псуються",
			fact: "Шкідять зайва вага і прострочена корекція. Легкий ефект і вчасний візит свої вії бережуть.",
			author: "Софія Коваль, brow & lash майстриня",
		},
		{
			myth: "Ламінування робить брови штучними",
			fact: "Фіксую волосину в той бік, куди вона вже росте. Форма лишається вашою, лише акуратнішою.",
			author: "Софія Коваль, brow & lash майстриня",
		},
	],
};

export const reviews = {
	title: "Відгуки",
	allLink: { label: "Усі відгуки", href: "[ЗАПОВНИТИ]" },
	items: [
		{
			rating: 5,
			text: "Боялася ефекту ляльки. Софія зробила класику, і на роботі ніхто не зрозумів, що вії нарощені.",
			name: "Марина",
			service: "класика",
		},
		{
			rating: 5,
			text: "2D ношу вже третій раз. Вранці нічого не треба підкручувати, і до вечора вигляд той самий.",
			name: "Ольга",
			service: "2D",
		},
		{
			rating: 5,
			text: "Брови після ламінування лягли природно. Форму не перемалювали, лише прибрали хаос.",
			name: "Катерина",
			service: "ламінування брів",
		},
	],
};

export const booking = {
	title: "Записатися",
	text: "Оберіть день і час у сервісі запису. Якщо так зручніше — зателефонуйте у робочі години.",
	serviceName: online ? online.name : "[ЗАПОВНИТИ]",
	url: online ? online.url : "[ЗАПОВНИТИ]",
};

export const contacts = {
	title: "Контакти",
	directions: "[ЗАПОВНИТИ]",
};
