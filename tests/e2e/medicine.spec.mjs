import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

const outDir = path.join(process.cwd(), "tests", "output");
const widths = [390, 768, 1280];
const groups = ["А", "Б", "В", "Г", "Д", "Е", "Ж", "З"];
const results = [];

const pages = [
	{
		slug: "flagship-medicine",
		path: "/flagship-medicine/",
		privacy: "/flagship-medicine/privacy/",
		phone: "+380440000000",
		jsonLd: "Dentist",
		service: "Лікування зубів",
		lightbox: true,
		teamScroll: true,
		priceTab: "Імплантація",
		priceMarker: "Підсадка кістки",
		levels: ["Лікар", "Провідний лікар"],
		hoursFor(day) {
			if (day === 0) return { opens: "10:00", closes: "16:00" };
			return { opens: "09:00", closes: "20:00" };
		},
		openDays: [0, 1, 2, 3, 4, 5, 6],
		blocks: [
			"layout-header",
			"urgent-today",
			"hero-result",
			"trust-strip",
			"services-cards",
			"anesthesia-comfort",
			"team-cards",
			"licenses-docs",
			"prices-levels",
			"steps-visit",
			"reviews-cards",
			"faq-accordion",
			"booking-cta",
			"booking-drawer",
			"contacts-map",
			"layout-messengers",
			"layout-footer",
		],
	},
	{
		slug: "template-doctor",
		path: "/template-doctor/",
		privacy: "/template-doctor/privacy/",
		phone: "+380440000000",
		jsonLd: "Physician",
		service: "Консультація",
		lightbox: true,
		teamScroll: false,
		priceTab: "УЗД",
		priceMarker: "УЗД органів малого таза",
		levels: ["Перший візит", "Повторний"],
		hoursFor(day) {
			if (day === 6) return { opens: "10:00", closes: "15:00" };
			return { opens: "10:00", closes: "19:00" };
		},
		openDays: [2, 4, 6],
		blocks: [
			"layout-header",
			"hero-result",
			"trust-strip",
			"doctor-about",
			"services-cards",
			"steps-visit",
			"prices-levels",
			"licenses-docs",
			"reviews-cards",
			"faq-accordion",
			"booking-cta",
			"contacts-map",
			"layout-footer",
		],
	},
	{
		slug: "template-urgent",
		path: "/template-urgent/",
		privacy: "/template-urgent/privacy/",
		phone: "+380440000001",
		jsonLd: "MedicalClinic",
		service: "Температура й застуда",
		lightbox: false,
		teamScroll: true,
		priceTab: "Процедури",
		priceMarker: "Перев’язка",
		levels: ["Будні", "Вечір і вихідні"],
		hoursFor() {
			return { opens: "08:00", closes: "21:00" };
		},
		openDays: [0, 1, 2, 3, 4, 5, 6],
		blocks: [
			"layout-header",
			"urgent-today",
			"hero-result",
			"trust-strip",
			"contacts-map",
			"services-cards",
			"steps-visit",
			"prices-levels",
			"team-cards",
			"reviews-cards",
			"faq-accordion",
			"booking-cta",
			"layout-footer",
		],
	},
];

function iso(date) {
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	return `${date.getFullYear()}-${month}-${day}`;
}

function slots(opens, closes, step = 30) {
	const [oh, om] = opens.split(":").map(Number);
	const [ch, cm] = closes.split(":").map(Number);
	const start = oh * 60 + om;
	const end = ch * 60 + cm - 60;
	const values = [];
	for (let cursor = start; cursor <= end; cursor += step) {
		const hours = Math.floor(cursor / 60);
		const mins = cursor % 60;
		values.push(`${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`);
	}
	return values;
}

function nextOpen(site) {
	const start = new Date();
	start.setHours(12, 0, 0, 0);
	for (let add = 1; add <= 10; add += 1) {
		const date = new Date(start);
		date.setDate(start.getDate() + add);
		if (!site.openDays.includes(date.getDay())) continue;
		return { iso: iso(date), ...site.hoursFor(date.getDay()) };
	}
	return null;
}

function yesterdayIso() {
	const date = new Date();
	date.setDate(date.getDate() - 1);
	return iso(date);
}

test.afterAll(() => {
	fs.mkdirSync(outDir, { recursive: true });
	const rows = fs
		.readdirSync(outDir)
		.filter((name) => name.endsWith(".json") && name !== "report.json")
		.map((name) => JSON.parse(fs.readFileSync(path.join(outDir, name), "utf8")))
		.sort((a, b) => a.page.localeCompare(b.page) || a.width - b.width);
	fs.writeFileSync(path.join(outDir, "report.json"), JSON.stringify(rows, null, 2), "utf8");
	console.log(`\n${formatReport(rows)}`);
});

for (const site of pages) {
	for (const width of widths) {
		test(`${site.slug} ${width}`, async ({ page, baseURL }) => {
			const checks = [];
			const notes = [];
			const row = { page: site.slug, width, checks, notes, blocks: [] };
			results.push(row);
			const consoleErrors = [];
			const pageErrors = [];
			const failedRequests = [];
			let formPayload = null;

			page.on("console", (message) => {
				if (message.type() === "error") consoleErrors.push(message.text());
			});
			page.on("pageerror", (error) => pageErrors.push(error.message));
			page.on("response", (response) => {
				if (response.status() >= 400) failedRequests.push(`${response.status()} ${response.url()}`);
			});
			page.on("requestfailed", (request) => {
				const url = request.url();
				if (url.startsWith("chrome-extension:")) return;
				failedRequests.push(`обірвався ${request.failure()?.errorText || ""} ${url}`.trim());
			});
			await page.route("**/api.web3forms.com/**", async (route) => {
				try {
					formPayload = route.request().postDataJSON();
				} catch {
					formPayload = { raw: route.request().postData() };
				}
				await route.fulfill({
					status: 200,
					contentType: "application/json",
					body: JSON.stringify({ success: true }),
				});
			});

			await page.setViewportSize({ width, height: width === 390 ? 844 : width === 768 ? 1024 : 800 });

			const response = await page.goto(site.path, { waitUntil: "load", timeout: 60000 });
			await page.evaluate(async () => {
				const step = Math.max(window.innerHeight - 40, 400);
				const height = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
				for (let top = 0; top < height; top += step) {
					window.scrollTo(0, top);
					await new Promise((resolve) => setTimeout(resolve, 60));
				}
				window.scrollTo(0, 0);
			});
			await page.waitForTimeout(400);

			if (width === 390 || width === 1280) {
				try {
					fs.mkdirSync(outDir, { recursive: true });
					await page.screenshot({
						path: path.join(outDir, `${site.slug}-${width}.png`),
						fullPage: true,
						animations: "disabled",
					});
				} catch (error) {
					notes.push(`Скріншот ${width}px не зберігся: ${error.message}`);
				}
			}

			await step("А", async () => {
				const items = [];
				items.push({
					ok: response?.status() === 200,
					detail: `Статус сторінки: ${response?.status() ?? "немає відповіді"}`,
				});
				const visiblePlaceholder = await page.evaluate(
					() => document.body.innerText.includes("[ЗАПОВНИТИ]") || document.body.innerText.includes("ЗАПОВНИТИ"),
				);
				const sourcePlaceholder = (await page.content()).includes("ЗАПОВНИТИ");
				items.push({
					ok: !visiblePlaceholder,
					detail: visiblePlaceholder
						? "На екрані видно текст «ЗАПОВНИТИ»"
						: "На екрані немає «ЗАПОВНИТИ»",
				});
				if (sourcePlaceholder && !visiblePlaceholder) {
					notes.push("У коді сторінки є слово ЗАПОВНИТИ (ключ форми), на екрані його не видно.");
				}
				items.push({
					ok: consoleErrors.length === 0 && pageErrors.length === 0,
					detail:
						consoleErrors.length || pageErrors.length
							? `Помилки консолі: ${[...consoleErrors, ...pageErrors].slice(0, 8).join(" | ")}`
							: "Помилок у консолі немає",
				});
				items.push({
					ok: failedRequests.length === 0,
					detail: failedRequests.length
						? `Невдалі запити: ${[...new Set(failedRequests)].slice(0, 12).join(" | ")}`
						: "Невдалих запитів немає",
				});
				return items;
			});

			await step("Б", async () => {
				const overflow = await pageOverflow(page);
				const images = await page.evaluate(imageAudit);
				for (const note of images.notes) notes.push(note);
				return [
					{
						ok: overflow.scrollWidth <= overflow.clientWidth + 1,
						detail: `Горизонтальна прокрутка: scrollWidth ${overflow.scrollWidth}, ширина вікна ${overflow.clientWidth}`,
					},
					{
						ok: images.problems.length === 0,
						detail: images.problems.length
							? `Зображення: ${images.problems.slice(0, 12).join("; ")}`
							: `Зображення на екрані завантажені і мають alt (${images.checked})`,
					},
				];
			});

			await step("В", async () => {
				const actual = await page.locator("[data-block]").evaluateAll((nodes) =>
					nodes.map((node) => node.getAttribute("data-block")),
				);
				row.blocks = actual;
				const same =
					actual.length === site.blocks.length && actual.every((name, index) => name === site.blocks[index]);
				return {
					ok: same,
					detail: same
						? `Порядок блоків: ${actual.join(" → ")}`
						: `Очікували: ${site.blocks.join(" → ")}. Фактично: ${actual.join(" → ")}`,
				};
			});

			await step("З", async () => seoAudit(page, site, notes, baseURL));
			await step("Ж", async () => linkAudit(page, site));

			await step("Е", async () => {
				const items = [];
				items.push(await reviewsCarousel(page, width));
				if (site.teamScroll) items.push(await teamCarousel(page, width));
				else notes.push("На сторінці лікаря немає каруселі лікарів.");
				items.push(await lightboxCheck(page, site));
				items.push(await faqCheck(page));
				items.push(await pricesCheck(page, site));
				return items;
			});

			await step("Г", async () => navigationAudit(page, width, notes));

			await step("Д", async () => formAudit(page, site, () => formPayload));

			await step("Е", async () => messengerDemo(page));

			const lateOverflow = await pageOverflow(page);
			if (lateOverflow.scrollWidth > lateOverflow.clientWidth + 1) {
				checks.push({
					group: "Б",
					ok: false,
					detail: `Після кліків з’явилась горизонтальна прокрутка: ${lateOverflow.scrollWidth} > ${lateOverflow.clientWidth}`,
				});
			}

			const duplicates = await page.evaluate(() => {
				const counts = new Map();
				for (const node of document.querySelectorAll("[id]")) {
					counts.set(node.id, (counts.get(node.id) || 0) + 1);
				}
				return [...counts.entries()].filter(([, count]) => count > 1).map(([id, count]) => `${id} × ${count}`);
			});
			if (duplicates.length) notes.push(`Повторювані id: ${duplicates.join(", ")}`);

			row.checks = checks;
			fs.mkdirSync(outDir, { recursive: true });
			fs.writeFileSync(path.join(outDir, `${site.slug}-${width}.json`), JSON.stringify(row, null, 2), "utf8");
			const failed = checks.filter((item) => !item.ok);
			expect(failed.map((item) => `${item.group}: ${item.detail}`)).toEqual([]);

			async function step(group, fn) {
				try {
					const outcome = await fn();
					const list = Array.isArray(outcome) ? outcome : [outcome];
					for (const item of list) {
						if (item) checks.push({ group, ok: Boolean(item.ok), detail: item.detail });
					}
				} catch (error) {
					checks.push({ group, ok: false, detail: `Перевірку не вдалося довести до кінця: ${error.message}` });
				}
			}
		});
	}
}

async function pageOverflow(page) {
	return page.evaluate(() => ({
		scrollWidth: document.documentElement.scrollWidth,
		clientWidth: document.documentElement.clientWidth,
	}));
}

function imageAudit() {
	const problems = [];
	const notes = [];
	let checked = 0;
	for (const img of document.images) {
		const src = img.currentSrc || img.getAttribute("src") || "";
		const name = src.split("/").pop()?.split("?")[0] || "без імені";
		const alt = img.getAttribute("alt");
		if (alt === null || alt.trim() === "") problems.push(`${name}: немає alt`);
		const rect = img.getBoundingClientRect();
		const shown = rect.width > 2 && rect.height > 2;
		if (!shown) {
			if (img.naturalWidth === 0) notes.push(`${name}: сховане і ще не завантажене`);
			continue;
		}
		checked += 1;
		if (img.naturalWidth === 0) {
			problems.push(`${name}: не завантажилось`);
			continue;
		}
		const fit = getComputedStyle(img).objectFit;
		const naturalRatio = img.naturalWidth / img.naturalHeight;
		const boxRatio = rect.width / rect.height;
		if (fit === "fill" || (fit !== "cover" && fit !== "contain" && Math.abs(boxRatio / naturalRatio - 1) > 0.08)) {
			problems.push(`${name}: виглядає розтягнутим`);
		} else if (fit === "cover") {
			const scale = Math.max(rect.width / img.naturalWidth, rect.height / img.naturalHeight);
			const visible = Math.min(rect.width / (img.naturalWidth * scale), rect.height / (img.naturalHeight * scale));
			if (visible < 0.62) problems.push(`${name}: сильно обрізане, видно близько ${Math.round(visible * 100)}%`);
			else if (visible < 0.9) notes.push(`${name}: фото обрізане рамкою, видно близько ${Math.round(visible * 100)}%`);
		}
	}
	return { problems, notes, checked };
}

async function seoAudit(page, site, notes, baseURL) {
	const seo = await page.evaluate(() => {
		const meta = (selector) => document.querySelector(selector)?.getAttribute("content") || "";
		const link = (selector) => document.querySelector(selector)?.href || "";
		return {
			title: document.title,
			description: meta('meta[name="description"]'),
			canonical: link('link[rel="canonical"]'),
			robots: meta('meta[name="robots"]'),
			ogTitle: meta('meta[property="og:title"]'),
			ogDescription: meta('meta[property="og:description"]'),
			ogImage: meta('meta[property="og:image"]'),
			ogSite: meta('meta[property="og:site_name"]'),
			twitterCard: meta('meta[name="twitter:card"]'),
			twitterTitle: meta('meta[name="twitter:title"]'),
			twitterDescription: meta('meta[name="twitter:description"]'),
			twitterImage: meta('meta[name="twitter:image"]'),
			jsonLd: document.querySelector('script[type="application/ld+json"]')?.textContent || "",
			favicons: [...document.querySelectorAll('link[rel~="icon"], link[rel="apple-touch-icon"]')].map((node) => node.href),
		};
	});
	const items = [];
	const titleLength = [...seo.title].length;
	notes.push(`title «${seo.title}» — ${titleLength} символів`);
	notes.push(`meta robots: ${seo.robots || "немає"}`);
	items.push({
		ok: titleLength >= 50 && titleLength <= 60,
		detail: `Довжина title: ${titleLength} (потрібно 50–60). «${seo.title}»`,
	});
	items.push({
		ok: seo.description.trim().length > 0,
		detail: seo.description.trim() ? "meta description є" : "meta description порожній",
	});
	items.push({
		ok: isAbsolute(seo.canonical) && seo.canonical.includes(site.slug),
		detail: `canonical: ${seo.canonical || "немає"}`,
	});
	const textTags = [
		["og:title", seo.ogTitle],
		["og:description", seo.ogDescription],
		["og:site_name", seo.ogSite],
		["twitter:card", seo.twitterCard],
		["twitter:title", seo.twitterTitle],
		["twitter:description", seo.twitterDescription],
	];
	const missingText = textTags.filter(([, value]) => !value.trim()).map(([name]) => name);
	items.push({
		ok: missingText.length === 0,
		detail: missingText.length ? `Немає тегів: ${missingText.join(", ")}` : "og:title, og:description, og:site_name і twitter-тексти є",
	});
	items.push({
		ok: isAbsolute(seo.ogImage) && isAbsolute(seo.twitterImage),
		detail: `og:image ${seo.ogImage || "немає"}; twitter:image ${seo.twitterImage || "немає"}`,
	});
	let ogStatus = 0;
	if (isAbsolute(seo.ogImage)) {
		ogStatus = (await page.request.get(seo.ogImage)).status();
	}
	items.push({
		ok: ogStatus === 200,
		detail: `og:image відповідає статусом ${ogStatus || "запит не робився"}`,
	});
	const faviconNotes = [];
	let faviconsOk = seo.favicons.length > 0;
	for (const href of seo.favicons) {
		const status = isAbsolute(href) ? (await page.request.get(href)).status() : 0;
		faviconNotes.push(`${status} ${href}`);
		if (status !== 200) faviconsOk = false;
	}
	notes.push(`Фавікони: ${faviconNotes.join("; ") || "лінків немає"}`);
	items.push({
		ok: faviconsOk,
		detail: faviconsOk ? "Лінки фавіконів віддаються" : `Фавікони: ${faviconNotes.join("; ") || "лінків немає"}`,
	});
	let jsonOk = false;
	let jsonDetail = "JSON-LD не розібрався";
	try {
		const data = JSON.parse(seo.jsonLd);
		const type = data["@type"];
		jsonOk = type === site.jsonLd;
		jsonDetail = `JSON-LD тип: ${type || "немає"}, очікували ${site.jsonLd}`;
	} catch (error) {
		jsonDetail = `JSON-LD не є валідним JSON: ${error.message}`;
	}
	items.push({ ok: jsonOk, detail: jsonDetail });
	items.push({
		ok: seo.robots.trim().length > 0,
		detail: `meta robots: ${seo.robots || "немає"}`,
	});
	if (baseURL && seo.canonical && !seo.canonical.startsWith(baseURL)) {
		notes.push(`canonical починається не з BASE_URL: ${seo.canonical}`);
	}
	return items;
}

function isAbsolute(value) {
	return typeof value === "string" && /^https?:\/\//.test(value);
}

async function linkAudit(page, site) {
	const problems = await page.evaluate((phone) => {
		const found = [];
		for (const link of document.querySelectorAll("a[href]")) {
			const href = link.getAttribute("href") || "";
			const label = (link.textContent || link.getAttribute("aria-label") || "").trim().replace(/\s+/g, " ").slice(0, 48);
			if (!href.trim() || href === "#") found.push(`посилання без цілі «${label || href}» → ${href || "порожньо"}`);
			if (href.startsWith("tel:")) {
				const tel = href.slice(4).replace(/[\s()-]/g, "");
				if (!/^\+380\d{9}$/.test(tel)) found.push(`телефон не у форматі +380: ${href}`);
				else if (tel !== phone) found.push(`телефон ${tel} не збігається з очікуваним ${phone}`);
			}
			const external = href.startsWith("http://") || href.startsWith("https://");
			let otherHost = false;
			if (external) {
				try {
					otherHost = new URL(href).host !== location.host;
				} catch {
					found.push(`бите зовнішнє посилання: ${href}`);
				}
			}
			const blank = link.getAttribute("target") === "_blank";
			if ((otherHost || blank) && !(link.getAttribute("rel") || "").includes("noopener")) {
				found.push(`немає rel="noopener": ${href}`);
			}
		}
		return found;
	}, site.phone);
	const privacyUrl = new URL(site.privacy, page.url()).href;
	const privacy = await page.request.get(privacyUrl);
	const privacyOk = privacy.status() === 200;
	if (!privacyOk) problems.push(`політика приватності ${privacyUrl} відповідає ${privacy.status()}`);
	return {
		ok: problems.length === 0,
		detail: problems.length ? problems.slice(0, 12).join("; ") : `Посилання цілі, телефон ${site.phone}, політика відкривається`,
	};
}

async function reviewsCarousel(page, width) {
	const track = page.locator("[data-block='reviews-cards'] [data-track]");
	if (!(await track.count())) return { ok: false, detail: "Блока відгуків немає" };
	const before = await track.evaluate((node) => ({ scrollWidth: node.scrollWidth, clientWidth: node.clientWidth, left: node.scrollLeft }));
	if (before.scrollWidth <= before.clientWidth + 8) {
		return {
			ok: width >= 1280,
			detail:
				width >= 1280
					? "На 1280 відгуки стоять сіткою, гортати не потрібно"
					: "Карусель відгуків не гортається: усі картки вмістились без прокрутки",
		};
	}
	await track.evaluate((node) => node.scrollBy({ left: 220 }));
	await page.waitForTimeout(200);
	const after = await track.evaluate((node) => node.scrollLeft);
	const dot = page.locator("[data-block='reviews-cards'] [data-dot]").nth(1);
	if (await dot.isVisible()) await dot.click();
	const pageBox = await pageOverflow(page);
	return {
		ok: after > before.left + 20 && pageBox.scrollWidth <= pageBox.clientWidth + 1,
		detail:
			after > before.left + 20
				? "Карусель відгуків гортається і не розсуває сторінку"
				: "Карусель відгуків не зрушила стрічку",
	};
}

async function teamCarousel(page, width) {
	const track = page.locator("[data-block='team-cards'] [data-track]");
	if (!(await track.count())) return { ok: false, detail: "Блока лікарів немає" };
	const metrics = await track.evaluate((node) => ({ scrollWidth: node.scrollWidth, clientWidth: node.clientWidth, left: node.scrollLeft }));
	if (width >= 768) {
		return {
			ok: metrics.scrollWidth <= metrics.clientWidth + 8,
			detail:
				metrics.scrollWidth <= metrics.clientWidth + 8
					? "Лікарі на цьому екрані стоять сіткою і не вилазять за сторінку"
					: "Ряд лікарів ширший за екран",
		};
	}
	await track.evaluate((node) => node.scrollBy({ left: 180 }));
	await page.waitForTimeout(200);
	const left = await track.evaluate((node) => node.scrollLeft);
	const pageBox = await pageOverflow(page);
	return {
		ok: left > metrics.left + 20 && pageBox.scrollWidth <= pageBox.clientWidth + 1,
		detail: left > metrics.left + 20 ? "Стрічка лікарів на телефоні гортається" : "Стрічка лікарів на телефоні не зрушила",
	};
}

async function lightboxCheck(page, site) {
	if (!site.lightbox) return { ok: true, detail: "Лайтбокса документів на цій сторінці немає" };
	const trigger = page.locator("[data-certs-open]").first();
	if (!(await trigger.count())) return { ok: false, detail: "Кнопки документа немає" };
	await trigger.scrollIntoViewIfNeeded();
	await trigger.click();
	const dialog = page.locator("[data-certs]:not([hidden])");
	await dialog.waitFor({ state: "visible", timeout: 5000 });
	await dialog.locator("[data-certs-close]").click();
	await page.waitForTimeout(150);
	const closed = await page.locator("[data-certs]:not([hidden])").count();
	await trigger.click();
	await dialog.waitFor({ state: "visible", timeout: 5000 });
	await page.keyboard.press("Escape");
	await page.waitForTimeout(150);
	const afterEsc = await page.locator("[data-certs]:not([hidden])").count();
	const focused = await page.evaluate(() => document.activeElement?.hasAttribute("data-certs-open") || false);
	return {
		ok: closed === 0 && afterEsc === 0 && focused,
		detail:
			closed === 0 && afterEsc === 0 && focused
				? "Лайтбокс закривається хрестиком і Esc, фокус повертається"
				: `Лайтбокс: після хрестика відкритих ${closed}, після Esc ${afterEsc}, фокус на кнопці: ${focused ? "так" : "ні"}`,
	};
}

async function faqCheck(page) {
	const item = page.locator("[data-block='faq-accordion'] details").nth(1);
	if (!(await item.count())) return { ok: false, detail: "Питань у FAQ немає" };
	await item.locator("summary").scrollIntoViewIfNeeded();
	const before = await item.evaluate((node) => node.open);
	await item.locator("summary").click();
	const opened = await item.evaluate((node) => node.open);
	await item.locator("summary").click();
	const closed = await item.evaluate((node) => node.open);
	return {
		ok: opened !== before && closed !== opened,
		detail: opened !== before && closed !== opened ? "Питання у FAQ відкривається і закривається" : "FAQ не перемкнувся",
	};
}

async function pricesCheck(page, site) {
	const tab = page.getByRole("tab", { name: site.priceTab, exact: true });
	await tab.scrollIntoViewIfNeeded();
	await tab.click();
	const panel = page.locator("[data-price-panel][aria-hidden='false']");
	const text = await panel.innerText();
	const selected = await tab.getAttribute("aria-selected");
	const hasLevels = site.levels.every((level) => text.includes(level));
	const hasMarker = text.includes(site.priceMarker);
	return {
		ok: selected === "true" && hasLevels && hasMarker,
		detail:
			selected === "true" && hasLevels && hasMarker
				? `Вкладка «${site.priceTab}» показує колонки ${site.levels.join(" / ")}`
				: `Вкладка «${site.priceTab}»: вибрана ${selected}, колонки ${hasLevels ? "є" : "не знайдені"}, рядок «${site.priceMarker}» ${hasMarker ? "є" : "не знайдений"}`,
	};
}

async function navigationAudit(page, width, notes) {
	const items = [];
	if (width === 390) {
		const toggle = page.locator("[data-menu-toggle]");
		await toggle.click();
		const overlay = page.locator("[data-mobile-nav]");
		const openBox = await overlay.evaluate((node) => {
			const style = getComputedStyle(node);
			const rect = node.getBoundingClientRect();
			return {
				open: !node.hasAttribute("hidden"),
				fixed: style.position === "fixed",
				covers: rect.width >= window.innerWidth - 2 && rect.height >= window.innerHeight - 2,
			};
		});
		items.push({
			ok: openBox.open && openBox.fixed && openBox.covers,
			detail: openBox.open && openBox.fixed && openBox.covers ? "Мобільне меню відкривається накладкою" : "Мобільне меню не стало накладкою на весь екран",
		});
		await page.locator("[data-menu-close]").click();
		await page.waitForTimeout(100);
		const closedByCross = await overlay.evaluate((node) => node.hasAttribute("hidden"));
		items.push({ ok: closedByCross, detail: closedByCross ? "Меню закривається хрестиком" : "Хрестик не закрив меню" });
		await toggle.click();
		await page.keyboard.press("Escape");
		await page.waitForTimeout(100);
		const closedByEsc = await overlay.evaluate((node) => node.hasAttribute("hidden"));
		items.push({ ok: closedByEsc, detail: closedByEsc ? "Меню закривається клавішею Esc" : "Esc не закрив меню" });
	} else if (width === 768) {
		notes.push("На 768 меню ще кнопкою-бургером: комп’ютерне меню з’являється від 1024 px.");
	}

	const selector = width >= 1280 ? 'nav[aria-label="Основна навігація"] a[href^="#"]' : 'nav[aria-label="Мобільна навігація"] a[href^="#"]';
	const links = page.locator(selector);
	const count = await links.count();
	const misses = [];
	for (let index = 0; index < count; index += 1) {
		const href = await links.nth(index).getAttribute("href");
		if (!href || href === "#booking") continue;
		if (width < 1280) {
			await page.locator("[data-menu-toggle]").click();
			await page.locator("[data-mobile-nav]").waitFor({ state: "visible" });
		}
		await links.nth(index).click();
		await page.waitForTimeout(350);
		const id = href.slice(1);
		const placed = await page.evaluate((targetId) => {
			const node = document.getElementById(targetId);
			if (!node) return { found: false, top: null };
			const top = node.getBoundingClientRect().top;
			return { found: true, top };
		}, id);
		if (!placed.found || placed.top < -140 || placed.top > 220) {
			misses.push(
				placed.found
					? `${href} опинився на ${Math.round(placed.top)} px від верху екрана, а не під шапкою`
					: `${href} не знайшов блок`,
			);
		}
	}
	items.push({
		ok: count > 0 && misses.length === 0,
		detail: misses.length
			? `Пункт меню відкриває адресу блока, але сам блок не стає під шапкою: ${misses.join("; ")}`
			: "Пункти меню прокручують до своїх блоків",
	});

	if (width === 390) {
		await revealBar(page);
		const bar = page.locator("[data-block='layout-messengers']");
		const visible = await bar.evaluate((node) => !node.hasAttribute("hidden"));
		const book = await bar.getByRole("link", { name: "Записатися" }).isVisible();
		const telegram = await bar.locator("[data-messenger='telegram']").isVisible();
		const viber = await bar.locator("[data-messenger='viber']").isVisible();
		const phone = await bar.locator("[data-messenger='phone']").isVisible();
		items.push({
			ok: visible && book && telegram && viber && phone,
			detail:
				visible && book && telegram && viber && phone
					? "Нижня панель має запис, месенджери і дзвінок"
					: `Нижня панель: видно ${visible ? "так" : "ні"}, запис ${book ? "так" : "ні"}, Telegram ${telegram ? "так" : "ні"}, Viber ${viber ? "так" : "ні"}, дзвінок ${phone ? "так" : "ні"}`,
		});
	}
	await page.evaluate(() => window.scrollTo(0, 0));
	return items;
}

async function revealBar(page) {
	const drawer = page.locator("[data-block='booking-drawer']");
	if ((await drawer.getAttribute("data-open")) === "true") {
		await drawer.locator("[data-booking-close]").click();
		await page.waitForTimeout(250);
	}
	await page.evaluate(() => {
		const hero = document.querySelector("#hero");
		const booking = document.querySelector("#booking");
		const target = (hero?.offsetTop || 0) + (hero?.offsetHeight || 700) + 80;
		window.scrollTo(0, target);
		if (booking) {
			const box = booking.getBoundingClientRect();
			if (box.top < window.innerHeight && box.bottom > 0) {
				window.scrollTo(0, window.scrollY + box.bottom + 40);
			}
		}
	});
	await page.waitForTimeout(400);
}

async function formAudit(page, site, payloadOf) {
	const items = [];
	const drawer = page.locator("[data-block='booking-drawer']");
	const root = page.locator("[data-block='booking-drawer'] [data-booking-root]");

	async function closeDrawer() {
		if ((await drawer.getAttribute("data-open")) !== "true") return;
		await drawer.locator("[data-booking-close]").click();
		await page.waitForFunction(() => document.querySelector("[data-block='booking-drawer']")?.getAttribute("data-open") === "false");
	}

	async function waitOpen() {
		await page.waitForFunction(() => document.querySelector("[data-block='booking-drawer']")?.getAttribute("data-open") === "true");
	}

	const headerButton = page.locator("[data-block='layout-header'] header a[href='#booking']");
	if (await headerButton.isVisible()) {
		await headerButton.click();
		await waitOpen();
		items.push({ ok: true, detail: "Кнопка «Записатися» в шапці відкриває вікно запису" });
		await closeDrawer();
	} else {
		items.push({ ok: false, detail: "У закритій шапці кнопки «Записатися» не видно" });
		await page.locator("[data-menu-toggle]").click();
		await page.locator("nav[aria-label='Мобільна навігація'] a[href='#booking']").click();
		await waitOpen();
		items.push({ ok: true, detail: "Кнопка «Записатися» всередині меню шапки відкриває вікно запису" });
		await closeDrawer();
	}

	await page.locator("[data-block='hero-result'] a[href='#booking']").first().click();
	await waitOpen();
	items.push({ ok: true, detail: "Кнопка «Записатися» в першому екрані відкриває вікно запису" });
	await closeDrawer();

	const serviceLink = page.locator(`[data-block='services-cards'] a[data-service="${site.service}"]`).first();
	await serviceLink.scrollIntoViewIfNeeded();
	await serviceLink.click();
	await waitOpen();
	const prefilled = await root.locator("[data-field='service']").inputValue();
	items.push({
		ok: prefilled === site.service,
		detail: prefilled === site.service ? `З картки послуги підставилось «${site.service}»` : `З картки послуги підставилось «${prefilled || "порожньо"}», очікували «${site.service}»`,
	});
	await closeDrawer();

	const cta = page.locator("[data-block='booking-cta'] a[href='#booking']").first();
	await cta.scrollIntoViewIfNeeded();
	await cta.click();
	await waitOpen();
	items.push({ ok: true, detail: "Кнопка в блоці запису відкриває вікно" });

	await root.dispatchEvent("booking-reset");
	await root.locator("[data-submit]").click();
	const nameError = (await root.locator("[data-error='name']").innerText()).trim();
	items.push({
		ok: nameError.includes("Заповніть"),
		detail: nameError ? `Порожня форма: «${nameError}»` : "Порожня форма не показала помилку біля імені",
	});

	await root.locator("[data-field='name']").fill("Тест");
	await root.locator("[data-field='phone']").fill("123");
	await root.locator("[data-submit]").click();
	const phoneError = (await root.locator("[data-error='phone']").innerText()).trim();
	items.push({
		ok: phoneError.includes("+380"),
		detail: phoneError ? `Некоректний телефон: «${phoneError}»` : "Некоректний телефон не показав помилку",
	});

	const phone = root.locator("[data-field='phone']");
	await phone.fill("");
	await phone.focus();
	const focusedValue = await phone.inputValue();
	await phone.fill("0671112233");
	const fromZero = await phone.inputValue();
	await phone.fill("38671112233");
	const from38 = await phone.inputValue();
	await phone.fill("380671112233");
	const from380 = await phone.inputValue();
	let pasted = { value: "" };
	try {
		await page.context().grantPermissions(["clipboard-read", "clipboard-write"]);
		await phone.click();
		await page.evaluate(() => navigator.clipboard.writeText("0671112233"));
		await phone.press("Control+A");
		await phone.press("Control+V");
		pasted = { value: await phone.inputValue() };
	} catch {
		pasted = await phone.evaluate((input) => {
			input.focus();
			const data = new DataTransfer();
			data.setData("text/plain", "0671112233");
			input.dispatchEvent(new ClipboardEvent("paste", { bubbles: true, cancelable: true, clipboardData: data }));
			return { value: input.value };
		});
	}
	const maskOk =
		focusedValue.startsWith("+380") &&
		fromZero === "+380 67 111 22 33" &&
		from38 === "+380 67 111 22 33" &&
		from380 === "+380 67 111 22 33" &&
		pasted.value === "+380 67 111 22 33";
	items.push({
		ok: maskOk,
		detail: maskOk
			? "Маска телефону збирає +380 з 0, 38, 380 і зі вставки"
			: `Маска: фокус «${focusedValue}», з 0 «${fromZero}», з 38 «${from38}», з 380 «${from380}», вставка «${pasted.value}»`,
	});

	const minDate = await root.locator("[data-field='date']").getAttribute("min");
	const today = await page.evaluate(() => {
		const now = new Date();
		return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
	});
	await root.locator("[data-field='date']").evaluate((input, value) => {
		input.value = value;
		input.dispatchEvent(new Event("input", { bubbles: true }));
		input.dispatchEvent(new Event("change", { bubbles: true }));
	}, yesterdayIso());
	await root.locator("[data-submit]").click();
	const dateError = (await root.locator("[data-error='date']").innerText()).trim();
	const yesterdayStuck = await root.locator("[data-field='date']").inputValue();
	items.push({
		ok: minDate === today && (dateError.includes("сьогодні") || yesterdayStuck === "" || yesterdayStuck >= today),
		detail: `Найраніша дата в полі: ${minDate || "немає"}, сьогодні ${today}. Спроба вчора: значення «${yesterdayStuck || "порожньо"}», підказка «${dateError || "немає"}»`,
	});

	const when = nextOpen(site);
	await root.locator("[data-field='date']").fill(when.iso);
	await root.locator("[data-field='date']").dispatchEvent("change");
	const expectedSlots = slots(when.opens, when.closes);
	const actualSlots = await root.locator("[data-field='time']").evaluate((select) =>
		[...select.options].filter((option) => option.value).map((option) => ({ value: option.value, disabled: option.disabled })),
	);
	const enabled = actualSlots.filter((option) => !option.disabled).map((option) => option.value);
	const slotsOk = expectedSlots.join(",") === enabled.join(",");
	items.push({
		ok: slotsOk,
		detail: slotsOk
			? `Час на ${when.iso}: ${enabled[0]}–${enabled[enabled.length - 1]}`
			: `Час на ${when.iso} не збігся з графіком ${when.opens}–${when.closes}. У полі: ${enabled.join(", ") || "порожньо"}`,
	});

	const honeypot = await root.locator("[data-field='botcheck']").evaluate((input) => {
		const wrap = input.closest("p") || input.parentElement;
		const rect = wrap.getBoundingClientRect();
		return { off: rect.right < 0 || rect.bottom < 0 || rect.left > window.innerWidth, text: wrap.textContent || "" };
	});
	items.push({
		ok: honeypot.off && honeypot.text.includes("Не заповнюйте"),
		detail: honeypot.off ? "Приховане поле «Не заповнюйте» є і стоїть за екраном" : "Приховане поле форми видно або без підпису «Не заповнюйте»",
	});

	const methods = await root.locator("input[name='contact']").evaluateAll((inputs) =>
		inputs.map((input) => ({ value: input.value, label: input.dataset.label || "" })),
	);
	const expectedMethods = [
		["telegram", "Telegram"],
		["viber", "Viber"],
		["sms", "SMS"],
		["call", "Дзвінок"],
	];
	const methodsOk = expectedMethods.every(([value, label]) => methods.some((method) => method.value === value && method.label === label));
	items.push({
		ok: methodsOk,
		detail: methodsOk ? "Є Telegram, Viber, SMS і дзвінок" : `Способи зв’язку: ${methods.map((method) => method.label || method.value).join(", ")}`,
	});

	const doNotCall = root.locator("[data-field='do-not-call']");
	const doNotCallLabel = await doNotCall.locator("xpath=ancestor::label").innerText();
	await doNotCall.check();
	const callDisabled = await root.locator("input[value='call']").isDisabled();
	items.push({
		ok: doNotCallLabel.includes("Не телефонуйте мені") && (await doNotCall.isChecked()) && callDisabled,
		detail: doNotCallLabel.includes("Не телефонуйте мені")
			? `Галочка «Не телефонуйте мені» ${callDisabled ? "вимикає дзвінок" : "не вимикає дзвінок"}`
			: "Галочки «Не телефонуйте мені» немає",
	});

	const consent = root.locator("a", { hasText: "політикою приватності" });
	const consentHref = await consent.getAttribute("href");
	const consentTarget = await consent.getAttribute("target");
	const consentRel = await consent.getAttribute("rel");
	items.push({
		ok: consentHref?.includes(site.privacy) && consentTarget === "_blank" && (consentRel || "").includes("noopener"),
		detail: `Згода веде на ${consentHref || "нікуди"}, target ${consentTarget || "немає"}, rel ${consentRel || "немає"}`,
	});

	await root.locator("[data-field='name']").fill("Тест");
	await root.locator("[data-field='phone']").fill("0671112233");
	await root.locator("[data-field='service']").selectOption(site.service);
	await root.locator("[data-field='date']").fill(when.iso);
	await root.locator("[data-field='date']").dispatchEvent("change");
	await root.locator("[data-field='time']").evaluate((select) => {
		const option = [...select.options].find((item) => item.value && !item.disabled);
		if (option) select.value = option.value;
	});
	await root.locator("input[value='viber']").check();
	await doNotCall.check();
	await root.locator("[data-field='consent']").check();
	await root.locator("[data-submit]").click();
	await page.waitForTimeout(800);
	const payload = payloadOf();
	const demoNote = await root.locator("[data-demo-note]").evaluate((node) => !node.hidden && (node.textContent || "").trim()).catch(() => "");
	if (!payload) {
		items.push({
			ok: false,
			detail: demoNote
				? `Запит на Web3Forms не пішов, тіло перевірити нічим. На екрані: «${demoNote}»`
				: "Запит на Web3Forms не пішов, і вікно успіху не з’явилось",
		});
	} else {
		const phoneValue = payload["Телефон"];
		const method = payload["Спосіб зв'язку"];
		const skipCall = payload["Не телефонуйте мені"];
		const sentOk =
			payload["Ім'я"] === "Тест" &&
			phoneValue === "+380671112233" &&
			payload["Послуга"] === site.service &&
			method === "Viber" &&
			skipCall === "Так";
		items.push({
			ok: sentOk,
			detail: sentOk
				? "У перехопленому запиті є ім’я, телефон, послуга, Viber і позначка «не телефонувати»"
				: `Тіло запиту: ${JSON.stringify(payload)}`,
		});
	}
	await closeDrawer();
	return items;
}

async function messengerDemo(page) {
	const link = page.locator("[data-block='contacts-map'] [data-messenger='telegram']");
	await link.evaluate((node) => node.scrollIntoView({ block: "center", inline: "nearest" }));
	await link.click();
	const dialog = page.locator("#demo-modal");
	await dialog.waitFor({ state: "visible", timeout: 5000 });
	const title = (await page.locator("#demo-modal-title").innerText()).replace(/\s+/g, " ");
	const ok = title.includes("Це демо-сайт");
	await page.locator("[data-demo-close]").click();
	await page.waitForTimeout(150);
	return {
		ok,
		detail: ok ? "Клік по Telegram відкриває вікно «Це демо-сайт»" : `Замість демо-вікна заголовок: «${title}»`,
	};
}

function formatReport(rows) {
	const lines = ["Сторінка | екран | " + groups.join(" | ")];
	for (const row of rows) {
		const byGroup = Object.fromEntries(groups.map((group) => [group, "пройдено"]));
		for (const check of row.checks) {
			if (!check.ok) byGroup[check.group] = "не пройдено";
		}
		for (const group of groups) {
			if (!row.checks.some((check) => check.group === group)) byGroup[group] = "не перевірено";
		}
		lines.push(`${row.page} | ${row.width} | ${groups.map((group) => byGroup[group]).join(" | ")}`);
	}
	lines.push("");
	for (const row of rows) {
		const failed = row.checks.filter((check) => !check.ok);
		if (!failed.length) continue;
		lines.push(`${row.page} ${row.width}:`);
		for (const check of failed) lines.push(`- ${check.group}: ${check.detail}`);
	}
	return lines.join("\n");
}
