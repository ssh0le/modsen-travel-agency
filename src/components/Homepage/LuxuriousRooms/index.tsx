'use client';
import { useQuery } from '@apollo/client';
import Image from 'next/image';

import { luxuryRoomsQuery, serverClient } from '@/api';
import { SectionWrapper } from '@/components/UI/SectionWrapper';
import { Typography } from '@/components/UI/Typography';
import { LuxuriousRoomsBackgroundImage } from '@/constants';
import { LuxuryRoomsResponse, RoomType } from '@/types';

import { LuxuryRoomCard } from './components/LuxuryRoomCard';
import { skeletonRooms } from './components/LuxuryRoomCard/constants';
import { SkeletonLuxuryRoomCard } from './components/LuxuryRoomCard/skeleton';
import styles from './luxurious-rooms.module.scss';

export const LuxuriousRooms = () => {
	const { data, loading } = useQuery<LuxuryRoomsResponse>(luxuryRoomsQuery, {
		client: serverClient,
		variables: {
			filter: {
				amount: 3,
				type: RoomType.Luxury,
			},
		},
	});

	return (
		<SectionWrapper className={styles.section_container}>
			<div className={styles.content_wrapper}>
				<div className={styles.content_background}>
					<Image src={LuxuriousRoomsBackgroundImage} alt="" />
				</div>
				<div className={styles.content}>
					<div className={styles.content_header}>
						<Typography
							variant="h2"
							className={styles.heading}
							fontSize="50"
							color="white"
						>
							Luxurious Rooms
						</Typography>
						<Typography
							variant="p"
							className={styles.subheading}
							fontSize="15"
							color="white"
						>
							All room are design for your comfort
						</Typography>
					</div>
					<div className={styles.rooms}>
						{loading &&
							skeletonRooms.map((_, index) => (
								<SkeletonLuxuryRoomCard key={index} />
							))}
						{data?.rooms.map(({ id, ...restProps }) => (
							<LuxuryRoomCard key={id} {...restProps} />
						))}
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
};
