import { SectionWithBackgroundImage } from '@/components/SectionWithBackgroundImage';
import { Typography } from '@/components/UI';
import { RoomsHeroImage } from '@/constants';

import styles from './hero-details.module.scss';

export const RoomDetailsHero = () => {
	return (
		<SectionWithBackgroundImage
			className={styles.container}
			imageSrc={RoomsHeroImage}
			imageAlt={'hero'}
		>
			<div className={styles.content}>
				<Typography color="white" fontSize="60" fontWeight="800">
					Rooms and suits
				</Typography>
			</div>
		</SectionWithBackgroundImage>
	);
};
