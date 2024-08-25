import { createElement } from 'react';

import { TypographyProps } from './types';
import styles from './typography.module.scss';

export const Typography = ({
	variant = 'span',
	children,
	fontSize = '15',
	fontWeight = '400',
	color = 'black',
	className: outerClassName,
}: TypographyProps) => {
	const classNames = [
		outerClassName,
		styles[`color-${color}`],
		styles[`font-weight-${fontWeight}`],
		styles[`font-size-${fontSize}`],
	];
	const className = classNames.join(' ');
	return createElement(variant, { className }, children);
};
