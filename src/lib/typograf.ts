const shortWord =
	/(?<=^|[\s\u00A0«"„(])(із|від|та|не|на|до|по|за|і|й|в|у|з|а|о)[ \t]+/giu;

/** Ставить нерозривний пробіл після коротких українських слів, щоб вони не лишались у кінці рядка. */
export function typograf(text: string): string {
	return text.replace(shortWord, "$1\u00A0");
}
