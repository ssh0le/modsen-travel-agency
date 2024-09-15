export const getFormattedDate = (date: string, locale: string = 'en-US') => {
	const dateObj = new Date(date);
	const formattedMonth = dateObj.toLocaleDateString('en-US', {
		month: 'short',
	});

	return `${dateObj.getDate()} ${formattedMonth}, ${dateObj.getFullYear()}`;
};
