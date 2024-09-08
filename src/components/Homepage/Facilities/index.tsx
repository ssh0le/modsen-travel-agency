import { SectionWrapper } from '@/components/UI/SectionWrapper';
import { Typography } from '@/components/UI/Typography';
import { facilitiesIcons } from '@/constants';
import { getLocaleIconsAndTitles } from '@/helpers/getLocaleIconsAndTitles';

import { FacilityCard } from './components/FacilityCard';
import styles from './facilities.module.scss';

const facilityTitles = [
	'Swimming pool',
	'Wifi',
	'Breakfast',
	'Gym',
	'Game center',
	'24/7 Light',
	'Laundry',
	'Parking space',
];

export const HomepageFacilities = () => {
	const localeIcons = getLocaleIconsAndTitles(facilitiesIcons, facilityTitles);

	return (
		<SectionWrapper>
			<div className={styles.container}>
				<div className={styles.title_container}>
					<Typography variant="h2" fontSize="40">
						Our facilities
					</Typography>
					<Typography fontSize="15">
						We offer modern (5 star) hotel facilities for your comfort.
					</Typography>
				</div>
				<ul className={styles.facilities_list}>
					{localeIcons.map(({ icon, title }) => (
						<FacilityCard key={title} icon={icon} title={title} />
					))}
				</ul>
			</div>
		</SectionWrapper>
	);
};
