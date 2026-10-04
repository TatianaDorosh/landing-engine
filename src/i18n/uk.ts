export interface UiStrings {
	currency: string;
	/** Токен формату дати: dd — день, MM — місяць, yyyy — рік. */
	dateFormat: string;
	buttons: {
		book: string;
		submit: string;
		more: string;
		close: string;
	};
	form: {
		name: string;
		phone: string;
		service: string;
		date: string;
		time: string;
		comment: string;
		contactMethod: string;
		methods: {
			telegram: string;
			viber: string;
			sms: string;
			call: string;
		};
		doNotCall: string;
		consentBefore: string;
		consentLink: string;
		consentAfter: string;
	};
	errors: {
		required: string;
		phone: string;
		date: string;
		time: string;
		pickDate: string;
		noSlotsToday: string;
		consent: string;
		send: string;
	};
	success: {
		title: string;
		text: string;
	};
	demo: {
		title: string;
		text: string;
		/** Плашка футера. {author} підставляється з конфігу сайту. */
		plaque: string;
		order: string;
	};
	prices: {
		/** {count} — скільки позицій у вкладці. */
		showAll: string;
		collapse: string;
	};
}

export const uk = {
	currency: '₴',
	dateFormat: 'dd.MM.yyyy',
	buttons: {
		book: 'Записатися',
		submit: 'Надіслати заявку',
		more: 'Детальніше',
		close: 'Закрити',
	},
	form: {
		name: "Ім'я",
		phone: 'Телефон',
		service: 'Послуга',
		date: 'Дата',
		time: 'Час',
		comment: 'Коментар',
		contactMethod: "Спосіб зв'язку",
		methods: {
			telegram: 'Telegram',
			viber: 'Viber',
			sms: 'SMS',
			call: 'Дзвінок',
		},
		doNotCall: 'Не телефонуйте мені',
		consentBefore: 'Надсилаючи заявку, я погоджуюсь із ',
		consentLink: 'політикою приватності',
		consentAfter: '.',
	},
	errors: {
		required: 'Заповніть це поле',
		phone: 'Вкажіть телефон у форматі +380',
		date: 'Оберіть дату від сьогодні',
		time: 'Оберіть час',
		pickDate: 'Спершу оберіть дату',
		noSlotsToday: 'На сьогодні вільного часу вже немає — оберіть іншу дату',
		consent: 'Потрібна згода з політикою приватності',
		send: 'Не вдалося надіслати заявку. Спробуйте ще раз або зателефонуйте:',
	},
	success: {
		title: 'Заявку надіслано',
		text: "Дякуємо. Ми зв'яжемося з вами обраним способом.",
	},
	demo: {
		title: 'Це демо-сайт',
		text: 'Це зразок, а не сторінка реальної студії. Повідомлення в месенджер не відкривається.',
		plaque: 'Демо-сайт · Створено: {author} · Замовити такий сайт',
		order: 'Замовити такий сайт',
	},
	prices: {
		showAll: 'Показати всі ціни ({count})',
		collapse: 'Згорнути',
	},
} satisfies UiStrings;
