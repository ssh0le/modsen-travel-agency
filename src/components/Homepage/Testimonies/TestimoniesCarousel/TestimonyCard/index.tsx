import Image from 'next/image';

import { Typography } from '@/components/UI/Typography';
import { authorImages, QuotesIcon } from '@/constants';
import { getFormattedDate } from '@/helpers';

import { Rating } from '../../Rating';

import styles from './testimony-card.module.scss';

interface TestimonyCardProps {
	author: string;
	authorImageId: number;
	testimony: string;
	date: string;
	rating: number;
}

export const TestimonyCard = (props: TestimonyCardProps) => {
	const { author, authorImageId, testimony, date, rating } = props;
	return (
		<section className={styles.container}>
			<div className={styles.top_section}>
				<Typography>{getFormattedDate(date)}</Typography>
				<Rating value={rating} size={13} />
			</div>
			<div className={styles.testimony_wrapper}>
				<span className={styles.open_quote_container}>
					<QuotesIcon />
				</span>
				<Typography
					className={styles.testimony_text}
					variant="p"
					fontSize="15"
					fontWeight="500"
				>
					{testimony}
				</Typography>
				<span className={styles.close_quote_container}>
					<QuotesIcon />
				</span>
			</div>
			<div className={styles.bottom_section}>
				<div className={styles.author_image_wrapper}>
					<Image
						src={authorImages[authorImageId]}
						alt={author}
						width={42}
						height={42}
					/>
				</div>
				<Typography>{author}</Typography>
			</div>
		</section>
	);
};
