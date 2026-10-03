import type { Locale } from '../config/types';
import { uk, type UiStrings } from './uk';

export type { UiStrings };

const catalogs: Partial<Record<Locale, UiStrings>> = {
	uk,
};

/** Повертає тексти інтерфейсу для мови сайту. en.ts ще немає, тому en тимчасово бере український набір. */
export function getUi(locale: Locale): UiStrings {
	return catalogs[locale] ?? uk;
}
