import { Skeleton } from '@/components/UI/Skeleton';

import styles from './testimony-card.module.scss';

export const TestimonyCardSkeleton = () => {
	return (
		<div className={styles.container}>
			<div className={styles.top_section}>
				<div className={styles.skeleton_wrapper}>
					<Skeleton />
				</div>
			</div>
			<div className={styles.testimony_wrapper}>
				<div className={styles.sekeleton_testimony_text}>
					<div className={styles.skeleton_wrapper}>
						<Skeleton />
					</div>
					<div className={styles.skeleton_wrapper}>
						<Skeleton />
					</div>
					<div className={styles.skeleton_wrapper}>
						<Skeleton />
					</div>
				</div>
			</div>
			<div className={styles.bottom_section}>
				<div className={styles.skeleton_wrapper}>
					<Skeleton />
				</div>
			</div>
		</div>
	);
};
