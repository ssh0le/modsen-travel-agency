import { RoomsHero } from '@/components/Rooms/Hero';
import { RoomList } from '@/components/Rooms/RoomList';
import { VideoPlayer } from '@/components/UI';

import styles from './page.module.scss';

export default function RoomsPage() {
	return (
		<div className={styles.content}>
			<RoomsHero />
			<VideoPlayer />
			<RoomList />
		</div>
	);
}
