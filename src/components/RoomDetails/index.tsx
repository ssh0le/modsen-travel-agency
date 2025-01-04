import { Button, SectionWrapper, Typography } from '../UI';
import { Gallery } from '../UI/Gallery';

import styles from './room-details.module.scss';
import { StarRating } from './StarRating';
import { RoomDetailsProps } from './types';

export const RoomDetails = ({ data, loading }: RoomDetailsProps) => {
	if (!data || loading || !data.price) {
		return null;
	}

	const { name, description, price, rating, reviewsCount } = data;

	return (
		<SectionWrapper className={styles.section_wrapper}>
			<div>
				<Gallery />
			</div>
			<div>
				<div className={styles.description_wrapper}>
					<Typography fontSize="42" variant="h2">
						{name}
					</Typography>
					<Typography
						className={styles.price_wrapper}
						fontSize="24"
						fontWeight="500"
					>
						₦{Math.round(price.ngn)}
					</Typography>
					<div className={styles.rating_container}>
						<StarRating rating={rating.toFixed(1)} />
						<Typography fontSize="13">
							{reviewsCount} Customer Review
						</Typography>
					</div>
					<Typography fontSize="13" variant="p">
						{description}
					</Typography>
				</div>
				<Button>Reservation</Button>
			</div>
		</SectionWrapper>
	);
};
