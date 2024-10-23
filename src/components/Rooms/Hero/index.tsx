import Image from 'next/image';

import { SectionWrapper, Typography } from '@/components/UI';
import { ArrowDown, RoomsHeroImage } from '@/constants';

import styles from './rooms-hero.module.scss';

const staticText = {
	title: 'Rooms and suits',
	subtitle:
		'The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design.',
};

export const RoomsHero = () => {
	const { title, subtitle } = staticText;
	return (
		<SectionWrapper className={styles.container}>
			<div className={styles.image_background_container}>
				<Image src={RoomsHeroImage} alt={'hero'} />
				<div className={styles.image_backdrop} />
			</div>
			<div className={styles.content}>
				<Typography fontSize="60" fontWeight='800' color="white" variant="h2">
					{title}
				</Typography>
				<Typography color="white" variant="p" fontSize='20'>
					{subtitle}
				</Typography>
				<div className={styles.button}>
					<ArrowDown />
				</div>
			</div>
		</SectionWrapper>
	);
};
