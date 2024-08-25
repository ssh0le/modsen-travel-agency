import { Typography } from '../Typography';

import styles from './button.module.scss'
import { ButtonProps } from './types';


export const Button = ({
	fontSize,
	fontWeight,
	fontColor,
	children,
    className,
	...restProps
}: ButtonProps) => {
	return (
		<button className={`${styles.button} ${className}`} {...restProps}>
			<Typography {...{ fontSize, fontWeight, color: fontColor }}>
				{children}
			</Typography>
		</button>
	);
};
