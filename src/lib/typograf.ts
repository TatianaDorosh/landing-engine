const shortWord =
	/(?<=^|[\s\u00A0«"„(])(із|від|та|не|на|до|по|за|і|й|в|у|з|а|о)[ \t]+/giu;
const beforeDash = / (?=[—–])/g;

/** Ставить нерозривний пробіл після коротких слів і перед тире, щоб вони не лишались на краю рядка. */
export function typograf(text: string): string {
	return text.replace(shortWord, "$1\u00A0").replace(beforeDash, "\u00A0");
}
