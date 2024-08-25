export const getFormattedDate = (date: Date) => {
	const formatter = new Intl.DateTimeFormat('en', {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
	});
	return formatter.format(date);
};
