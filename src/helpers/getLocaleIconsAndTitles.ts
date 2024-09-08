export const getLocaleIconsAndTitles = (
	icons: Array<() => JSX.Element>,
	titles: string[]
) => {
	return icons.map((icon, index) => ({
		icon,
		title: titles[index],
	}));
};
