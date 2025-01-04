import { SectionWrapper } from '@/components/UI/SectionWrapper';
import { Typography } from '@/components/UI/Typography';

import styles from './testimonies.module.scss';
import { TestimoniesCarousel } from './TestimoniesCarousel';

export const Testimonies = () => {
	return (
		<SectionWrapper className={styles.section_wrapper}>
			<div className={styles.content_wrapper}>
				<Typography fontSize="50" className={styles.header_wrapper}>
					Testimonies
				</Typography>
				<div className={styles.slider_wrapper}>
					<TestimoniesCarousel />
				</div>
			</div>
		</SectionWrapper>
	);
};
