import { createElement } from 'react';

import { classNames } from '@/helpers';

import { TypographyProps } from './types';
import styles from './typography.module.scss';

export const Typography = ({
	variant = 'span',
	children,
	fontSize = '15',
	fontWeight = '400',
	color,
	className: outerClassName,
}: TypographyProps) => {
	return createElement(
		variant,
		{
			className: classNames(
				outerClassName,
				styles[`color-${color ?? 'inherit'}`],
				styles[`font-weight-${fontWeight}`],
				styles[`font-size-${fontSize}`]
			),
		},
		children
	);
};
