import Image from 'next/image';

import { Typography } from '@/components/UI/Typography';
import { roomsImages } from '@/constants';

import styles from './luxury-room-card.module.scss';
import { getBenefitsDescription, getLocaleRoomsAmount } from './utils';

interface LuxuryRoomCardProps {
	imageSrcId: number;
	benefits: string[];
	roomsAvailable: number;
}

export const LuxuryRoomCard = ({
	imageSrcId,
	benefits,
	roomsAvailable,
}: LuxuryRoomCardProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.room_image_container}>
				{imageSrcId !== undefined && (
					<Image
						src={roomsImages[imageSrcId]}
						alt=""
						placeholder="blur"
					/>
				)}
				<div className={styles.available_rooms}>
					<Typography color="white" fontWeight="700" fontSize="11">
						{getLocaleRoomsAmount(roomsAvailable)}
					</Typography>
				</div>
			</div>
			<Typography variant="p" className={styles.benefits} fontSize="17">
				{getBenefitsDescription(benefits)}
			</Typography>
		</div>
	);
};
