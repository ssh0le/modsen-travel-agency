import { DatePicker } from '@/components/UI/DatePicker';
import DropDown from '@/components/UI/DropDown';

import styles from './booking-parameter.module.scss';
import { BookingParameterProps } from './types';

export function BookingParameter(props: BookingParameterProps) {
	const { icon, label } = props;
	return (
		<div className={styles.container}>
			<div>{icon}</div>
			<div>
				<div className={styles.label}>{label}</div>
				{props.type === 'dropdown' ? (
					<DropDown selectedOption={props.value} {...props} />
				) : (
					<DatePicker {...props}/>
				)}
			</div>
		</div>
	);
}
