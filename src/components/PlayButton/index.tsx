import { TriangleIcon } from '@/constants/icons';

import styles from './play-button.module.scss';

export const PlayButton = () => {
	return (
		<div className={styles.container}>
			<TriangleIcon />
		</div>
	);
};
