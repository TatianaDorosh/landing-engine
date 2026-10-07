export const aboutDescription =
	"Докладніше про Тетяну Дорош: 9 років у роздрібній торгівлі, понад 4 роки проєктного менеджменту і чому вона збирає сайти саме з готових блоків.";

export const aboutPage = {
	title: "Про мене",
	imageLabel: "[ЗАПОВНИТИ]",
	intro: "Я Тетяна Дорош. Тут докладніше про те, хто я, чим займалася і чому роблю сайти саме так.",
	sections: [
		{
			id: "retail",
			title: "Роздрібна торгівля, 9 років",
			paragraphs: [
				"Майже дев'ять років я працювала в спортивному рітейлі: керувала магазином, відкривала нові точки, відповідала за те, як товар виглядає й де лежить. Щодня бачила, чому клієнт купує, а чому йде. Це я переношу на сайти: клієнт одразу бачить ціну, розуміє, що буде, і знає, як записатися.",
			],
		},
		{
			id: "management",
			title: "Проєктний менеджмент, 4+ роки",
			paragraphs: [
				"Із 2022 року працюю проєктною менеджеркою в IT і веду вебпроєкти від першої ідеї до запуску. Знаю, як сайт працює як продукт: хто його відвідує, що має бути на сторінці, як перевірити швидкість і форму запису.",
			],
		},
		{
			id: "sites",
			title: "Як я роблю сайти",
			paragraphs: [
				"Сайти збираю з власного двигуна: готових блоків, з яких складаються сторінки. Для коду, картинок і відео користуюся AI-інструментами. Я не програмістка й не дизайнерка за освітою, тому відповідаю за зміст, структуру й перевірку.",
			],
		},
		{
			id: "learning",
			title: "Навчання",
			paragraphs: [
				"За освітою я педагог, тому вмію пояснювати складне простими словами. Створила безкоштовний відеокурс з проєктного менеджменту на YouTube (50 уроків) і навчальний сайт pmtips.com.ua. Написала методичку на 200+ сторінок: конспекти уроків, словники термінів і шаблони документів.",
			],
			links: [
				{ label: "Відеокурс на YouTube", href: "https://www.youtube.com/@TatiDorosh" },
				{ label: "Навчальний сайт", href: "https://pmtips.com.ua" },
				{ label: "Методички", href: "https://pmtips.com.ua/resources" },
			],
		},
	],
	certificates: {
		id: "certificates",
		title: "Курси й сертифікати",
		/** Якщо completed: false, курс не показуємо. Без прапорця курс видно. */
		groups: [
			{
				group: "Проєктний менеджмент",
				items: [
					{
						title: "Foundations of Project Management",
						org: "Google",
						year: 2023,
						href: "[ЗАПОВНИТИ]",
					},
					{
						title: "Initiating and Planning Projects",
						org: "University of California, Irvine",
						year: 2022,
						href: "[ЗАПОВНИТИ]",
					},
					{
						title: "Project Budgeting and Scheduling",
						org: "University of California, Irvine",
						year: 2022,
						href: "[ЗАПОВНИТИ]",
					},
					{
						title: "Project Management",
						org: "Prometheus",
						year: 2024,
						href: "[ЗАПОВНИТИ]",
					},
				],
			},
			{
				group: "Веб і технічні процеси",
				items: [
					{
						title: "Introduction to Front-End Development",
						org: "Meta",
						year: 2023,
						href: "[ЗАПОВНИТИ]",
					},
					{
						title: "TechMind",
						org: "IAMPM",
						year: 2023,
						href: "[ЗАПОВНИТИ]",
					},
					{
						title: "Continuous Integration and Continuous Delivery",
						org: "IBM",
						year: 2023,
						href: "[ЗАПОВНИТИ]",
						completed: false,
					},
				],
			},
		],
		link: {
			label: "Усі сертифікати на LinkedIn",
			href: "https://www.linkedin.com/in/tatiana-dorosh/",
		},
	},
	findMe: {
		id: "find-me",
		title: "Де мене знайти",
		links: [
			{ label: "LinkedIn", href: "https://www.linkedin.com/in/tatiana-dorosh/" },
			{ label: "YouTube", href: "https://www.youtube.com/@TatiDorosh" },
			{ label: "Telegram", href: "" },
		],
	},
};
