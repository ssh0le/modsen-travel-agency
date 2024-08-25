import Image from 'next/image';

import { AgencyName } from '@/components/AgencyName';
import { PlayButton } from '@/components/PlayButton';
import { SectionWrapper } from '@/components/UI/SectionWrapper';
import { Typography } from '@/components/UI/Typography';
import { HomePageHeroImage } from '@/constants/images';

import { BookingWidget } from '../BookingWidget';

import styles from './hero-section.module.scss';

export const HeroSection = () => {
	return (
		<SectionWrapper>
			<div className={styles.container}>
				<div className={styles.hero_content}>
					<h2>
						<AgencyName color="olive" fontSize="50" />
					</h2>
					<h1 className={styles.title}>
						<Typography fontSize="55" fontWeight="700">
							Hotel for every
							<br />
							moment rich in
							<br />
							emotion
						</Typography>
					</h1>
					<p className={styles.subtitle}>
						<Typography>
							Every moment feels like the first time
							<br />
							in paradise view
						</Typography>
					</p>
					<div className={styles.play_button_container}>
						<PlayButton />
						<Typography fontSize='20'>Take a tour</Typography>
					</div>
				</div>
				<div className={styles.booking_widget_container}>
					<BookingWidget />
				</div>
				<div className={styles.image_container}>
					<Image src={HomePageHeroImage} alt={'Hawaii hotel'} />
				</div>
			</div>
		</SectionWrapper>
	);
};
