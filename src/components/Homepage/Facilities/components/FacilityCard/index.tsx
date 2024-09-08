import { Typography } from '@/components/UI/Typography';

import styles from './facility-card.module.scss';

interface FacilityCardProps {
	icon: () => JSX.Element;
	title: string;
}

export const FacilityCard = ({ icon: Icon, title }: FacilityCardProps) => {
	return (
		<li className={styles.container}>
			<div className={styles.image_container}>
				<Icon />
			</div>
			<div>
				<Typography>{title}</Typography>
			</div>
		</li>
	);
};
