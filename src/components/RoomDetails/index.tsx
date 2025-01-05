import { Button, SectionWrapper, Typography } from '../UI';
import { Gallery } from '../UI/Gallery';

import styles from './room-details.module.scss';
import { StarRating } from './StarRating';
import { RoomDetailsProps } from './types';

export const RoomDetails = ({ data, loading }: RoomDetailsProps) => {
	if (!data || loading) {
		return null;
	}

	const { name, description, price, rating, reviewsCount } = data;

	return (
		<SectionWrapper className={styles.section_wrapper}>
			<div>
				<Gallery />
			</div>
			<div className={styles.right_side}>
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
						{rating && <StarRating rating={rating.toFixed(1)} />}
						{reviewsCount > 0 && (
							<Typography fontSize="13" className={styles.with_delimiter}>
								{reviewsCount} Customer Review
							</Typography>
						)}
						{reviewsCount === 0 && (
							<Typography fontSize="13">No reviews</Typography>
						)}
					</div>
					<Typography fontSize="13" variant="p">
						{description}
					</Typography>
				</div>
				<Button fontSize="20" className={styles.reservation_button}>
					Reservation
				</Button>
			</div>
		</SectionWrapper>
	);
};
