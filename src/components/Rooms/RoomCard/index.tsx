import Image from 'next/image';

import { Typography } from '@/components/UI';
import { roomsImages } from '@/constants';
import { getFacilityIcons } from '@/helpers/getFacilityIcons';
import { RoomDescription } from '@/types';

import styles from './room-card.module.scss';

export const RoomCard = (props: RoomDescription) => {
	const { name, roomsAvailable, priceInUsd, imageSrcId, benefits } = props;

	const facilityIcons = getFacilityIcons(benefits);

	return (
		<div className={styles.container}>
			<div className={styles.image_container}>
				{imageSrcId !== undefined && (
					<Image
						src={roomsImages[imageSrcId]}
						alt=""
						placeholder="blur"
						width={390}
						height={250}
					/>
				)}
			</div>
			<div className={styles.info_container}>
				<div className={styles.info}>
					<Typography fontSize="20" fontWeight="500">
						{name}
					</Typography>
					<Typography fontSize="12">
						Available: {roomsAvailable > 0 ? 'Yes' : 'No'}
					</Typography>
				</div>
				<Typography fontSize="20">{priceInUsd}$</Typography>
			</div>
			<div className={styles.controls_container}>
				<div className={styles.facility_list}>
					{facilityIcons.map((Icon, index) => (
						<div key={index} className={styles.facility_container}>
							<Icon />
						</div>
					))}
				</div>
				<button className={styles.button}>
					<Typography color="white">Book now</Typography>
				</button>
			</div>
		</div>
	);
};
