import { DropDownOption } from '../../types';

import styles from './dropdown-list-item.module.scss';

interface DropDownListItemProps<T> {
	value: T;
	isSelected: boolean;
	onClick: (value: T) => void;
}

export const DropDownListItem = ({
	value,
	isSelected,
	onClick,
}: DropDownListItemProps<DropDownOption>) => {
	const handleClick = () => {
		onClick(value);
	};
	return (
		<li
			onClick={handleClick}
			className={`${styles.container} ${isSelected ? styles.selected : ''}`}
		>
			{value.label}
		</li>
	);
};
