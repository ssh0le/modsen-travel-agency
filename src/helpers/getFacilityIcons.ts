import { ShowerIcon, TvIcon, WifiLightIcon } from '@/constants';
import { FacilityWithIcon } from '@/types';

const { Tv, WIfi, Shower } = FacilityWithIcon;

const ALL_FACILITIES_WITH_ICONS = [Tv, WIfi, Shower];

export const getFacilitIconByName = (facilityName: FacilityWithIcon) => {
	switch (facilityName) {
		case FacilityWithIcon.Shower:
			return ShowerIcon;
		case FacilityWithIcon.WIfi:
			return WifiLightIcon;
		case FacilityWithIcon.Tv:
			return TvIcon;
		default:
			return WifiLightIcon;
	}
};

export const getFacilityIcons = (facilities: string[]) => {
	const includedFacilities = ALL_FACILITIES_WITH_ICONS.reduce<
		FacilityWithIcon[]
	>((acc, currentFacility) => {
		if (facilities.includes(currentFacility)) {
			return [...acc, currentFacility];
		}

		return acc;
	}, []);

	return includedFacilities.map(getFacilitIconByName);
};
