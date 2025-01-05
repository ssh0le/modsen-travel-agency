import { ratingIcons } from '@/constants';

import styles from './star-rating.module.scss';

const { HalfStar, Star } = ratingIcons;

export const StarRating = ({ rating }: { rating: number | string }) => {
	const parsedRating = parseFloat(rating.toString()) || 0;
	const integerRating = Math.floor(parsedRating);
	const hasHalfStar = parsedRating % 1 >= 0.5;

	const stars = new Array(integerRating).fill(Star);

	if (hasHalfStar) {
		stars.push(HalfStar);
	}

	return (
		<div className={styles.star_rating_container}>
			{stars.map((Star, index) => (
				<Star key={index} />
			))}
		</div>
	);
};
