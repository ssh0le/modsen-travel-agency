'use client';

import { ChangeEvent, useState } from 'react';

import { ChevronIcon } from '@/constants';

import styles from './date-picker.module.scss';
import { getFormattedDate } from './helpers';
import { DatePickerProps } from './types';

export const DatePicker = ({ date, onDateChange }: DatePickerProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleLabelClick = () => {
		setIsOpen((prev) => !prev);
	};

	const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
		onDateChange(new Date(event.target.value));
	};

	return (
		<div className={styles.container}>
			<div className={styles.label} onClick={handleLabelClick}>
				{getFormattedDate(date)}
				<ChevronIcon />
			</div>
			{isOpen && (
				<div className={styles.date_input_container}>
					<input
						type="date"
						value={date.toISOString()}
						onChange={handleDateChange}
					/>
				</div>
			)}
		</div>
	);
};
