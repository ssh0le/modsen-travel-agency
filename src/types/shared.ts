/* eslint-disable no-unused-vars */
import { DropDownOption } from '@/components/UI/DropDown/types';

export interface WithLocationOptions {
	locationOptions: Array<DropDownOption>;
}

export enum FacilityWithIcon {
	Tv = 'Television set',
	WIfi = 'Wi-Fi',
	Shower = 'Shower',
}
