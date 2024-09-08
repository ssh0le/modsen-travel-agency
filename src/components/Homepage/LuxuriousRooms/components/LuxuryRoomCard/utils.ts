export const getBenefitsDescription = (benefits: string[]) => {
	return benefits.reduce((result, benefit, index) => {
		if (index === 0) {
			return benefit;
		}
		const separator = index === benefits.length - 1 ? ' and ' : ', ';

		return `${result}${separator}${benefit}`;
	}, '');
};

export const getLocaleRoomsAmount = (roomsAvailable: number) => {
	return `${roomsAvailable} rooms available`;
};
