import { DropDownOption } from '@/components/UI/DropDown/types';
import { leadingZeroPad } from '@/helpers';

export const ROOM_TYPES: Array<DropDownOption> = [
	{
		label: 'Standart',
		value: 'Standart',
	},
	{
		label: 'Royal',
		value: 'Royal',
	},
];
export const DEFAULT_ROOM_TYPE = ROOM_TYPES[0];

export const MAX_PERSONS = 7;
export const LEADING_ZEROS_COUNT = 2;
export const PERSONS_OPTIONS: Array<DropDownOption> = new Array(MAX_PERSONS)
	.fill(0)
	.map((_, index) => {
		const value = index + 1;
		return {
			label: leadingZeroPad(value, LEADING_ZEROS_COUNT),
			value,
		};
	});
export const DEFAULT_PERSONS_OPTION = PERSONS_OPTIONS[0];

export const DEFAULT_LOCATION_OPTION = {
	label: 'No available country',
	value: 'No available country',
};
