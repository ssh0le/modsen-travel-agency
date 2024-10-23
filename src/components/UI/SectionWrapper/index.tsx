import styles from './section-wrapper.module.scss';

interface SectionWrapperProps {
	children: JSX.Element | JSX.Element[];
	className?: string;
}

export const SectionWrapper = ({
	children,
	className,
}: SectionWrapperProps) => {
	return (
		<section className={`${className || ''} ${styles.container}`}>
			<div className={styles.content}>{children}</div>
		</section>
	);
};
