export type FontSize = '15' | '20' | '30' | '40' | '50' | '55';
export type FontWeight = '400' | '500' | '600' | '700';
export type Color = 'olive' | 'dark-white' | 'black' | 'alternative-black' | 'white';

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
