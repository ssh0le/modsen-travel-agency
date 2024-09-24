import Link from 'next/link';

import { Typography } from '@/components/UI/Typography';

import styles from './footer-link-list.module.scss';

const { container, items_container, title_container } = styles;

interface FooterLinkListProps {
	title: string;
	links: {
		title: string;
		href: string;
	}[];
}

export const FooterLinkList = ({ title, links }: FooterLinkListProps) => {
	return (
		<div className={container}>
			<Typography className={title_container} variant="h5" fontSize="15" fontWeight="700">
				{title}
			</Typography>
			<ul className={items_container}>
				{links.map(({ title, href }) => (
					<li key={title}>
						<Link href={href}>
							<Typography fontSize="12" fontWeight="700">
								{title}
							</Typography>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
