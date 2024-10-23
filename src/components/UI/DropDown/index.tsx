'use client';

import React, { useState } from 'react';

import { ChevronIcon } from '@/constants/icons';

import { Typography } from '../Typography';

import { DropDownListItem } from './components/DropDownListItem';
import styles from './dropdown.module.scss';
import { DropDownOption, DropDownProps } from './types';

export function DropDown({
	options,
	onSelect,
	placeholder = 'Select an option',
	selectedOption,
}: DropDownProps<DropDownOption>) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropDown = () => setIsOpen(!isOpen);

	const handleOptionClick = (option: DropDownOption) => {
		onSelect(option);
		setIsOpen(false);
	};

	return (
		<div className={styles.container}>
			<div className={styles.current_value_container} onClick={toggleDropDown}>
				<Typography>{selectedOption.label || placeholder}</Typography>
				<ChevronIcon />
			</div>
			{isOpen && (
				<ul className={styles.dropdown_container}>
					{options.map((option, index) => (
						<DropDownListItem
							key={index}
							onClick={handleOptionClick}
							value={option}
							isSelected={option.value === selectedOption.value}
						/>
					))}
				</ul>
			)}
		</div>
	);
}

export default DropDown;
