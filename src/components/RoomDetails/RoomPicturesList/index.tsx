import Image from 'next/image';

import { SectionWrapper } from '@/components/UI';
import { interiorImages } from '@/constants';

import styles from './interior-pictures.module.scss';

export const RoomPicturesList = () => {
	return (
		<SectionWrapper className={styles.section_wrapper}>
			<div className={styles.list_wrapper}>
				{interiorImages.map((image, index) => (
					<div key={index} className={styles.picture_container}>
						<Image src={image} alt="interior image" />
					</div>
				))}
			</div>
		</SectionWrapper>
	);
};
