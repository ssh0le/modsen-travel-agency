import { ButtonHTMLAttributes } from 'react';

import { Color, TypographyProps } from '../Typography/types';

export interface ButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		Omit<TypographyProps, 'color' | 'children'> {
	fontColor?: Color;
}
