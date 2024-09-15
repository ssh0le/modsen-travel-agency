import React from 'react';

import styles from './rating.module.scss';
import { EmptyStar, FullStar, HalfStar } from './stars';

interface RatingProps {
	count?: number;
	value: number;
	size?: number;
	emptyIcon?: React.ReactElement;
	halfIcon?: React.ReactElement;
	fullIcon?: React.ReactElement;
}

export const Rating = (props: RatingProps) => {
	const {
		count = 5,
		value,
		size = 30,
		emptyIcon = <EmptyStar />,
		halfIcon = <HalfStar />,
		fullIcon = <FullStar />,
	} = props;
	const stars = [];

	for (let i = 0; i < count; i++) {
		let star: React.ReactElement;
		if (value - i > 0 && value - i < 1) {
			star = halfIcon;
		} else if (i < value) {
			star = fullIcon;
		} else {
			star = emptyIcon;
		}

		stars.push(
			React.cloneElement(star, {
				size,
				key: i,
			})
		);
	}

	return <div className={styles.container}>{stars}</div>;
};
