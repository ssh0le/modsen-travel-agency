import { Country } from '@/types';

export const mapCountriesToOptions = (countries: Array<Country>) => {
	return countries.map((country) => ({
		label: country.name,
		value: country.name,
	}));
};
