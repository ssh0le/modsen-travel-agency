import { Skeleton } from '@/components/UI/Skeleton';

import styles from './luxury-room-card.module.scss';

export const SkeletonLuxuryRoomCard = () => {
	return (
		<div className={styles.container}>
			<div className={styles.room_image_container}>
				<Skeleton />
			</div>
			<div className={styles.benefits}>
				<Skeleton />
			</div>
		</div>
	);
};
