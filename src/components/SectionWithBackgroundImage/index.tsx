import Image, { StaticImageData } from 'next/image';
import { PropsWithChildren } from 'react';

import { classNames } from '@/helpers';

import { SectionWrapper } from '../UI';

import styles from './section-with-back-image.module.scss';

type SectionWithBackgroundImageProps = PropsWithChildren & {
	imageSrc: StaticImageData;
	imageAlt: string;
	className?: string;
};

export const SectionWithBackgroundImage = ({
	children,
	imageSrc,
	imageAlt,
	className,
}: SectionWithBackgroundImageProps) => {
	return (
		<SectionWrapper className={classNames(styles.container, className)}>
			<div className={styles.image_background_container}>
				<Image src={imageSrc} alt={imageAlt} />
				<div className={styles.image_backdrop} />
			</div>
			{children as JSX.Element}
		</SectionWrapper>
	);
};
