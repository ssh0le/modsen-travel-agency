import { AGENCY_NAME } from '@/constants/common';

import { Typography } from '../UI/Typography';
import { FontProps } from '../UI/Typography/types';

import styles from './agency-name.module.scss';

export const AgencyName = (props: FontProps) => {
	return (
		<span className={styles.agency_name}>
			<Typography {...props}>{AGENCY_NAME}</Typography>
		</span>
	);
};
