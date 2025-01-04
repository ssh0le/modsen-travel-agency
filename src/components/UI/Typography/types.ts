export type FontSize =
	| '11'
	| '12'
	| '13'
	| '15'
	| '17'
	| '20'
	| '24'
	| '30'
	| '40'
	| '42'
	| '50'
	| '55'
	| '60';
export type FontWeight = '400' | '500' | '600' | '700' | '800';
export type Color =
	| 'olive'
	| 'dark-white'
	| 'black'
	| 'alternative-black'
	| 'white';

export interface FontProps {
	fontSize?: FontSize;
	fontWeight?: FontWeight;
	color?: Color;
}

export interface TypographyProps extends FontProps {
	children: React.ReactNode;
	className?: string;
	variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}
