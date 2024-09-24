import { AGENCY_NAME } from '@/constants';

import { AgencyName } from '../AgencyName';
import { SectionWrapper } from '../UI/SectionWrapper';
import { Typography } from '../UI/Typography';

import {
	AGENCY_DESCRIPTION,
	CURRENT_YEAR,
	footerLinkLists,
	NEWSLETTER_DESCRIPTION,
} from './constants';
import styles from './footer.module.scss';
import { FooterLinkList } from './FooterLinkList';
import { NewsletterSubscribeWidget } from './NewsletterSubscribeWidget';

const {
	section_wrapper,
	top_container,
	agency_description,
	bottom_container,
	newsletter_container,
	newsletter_description,
	footer_container,
} = styles;

export const Footer = () => {
	return (
		<SectionWrapper className={section_wrapper}>
			<footer className={footer_container}>
				<SectionWrapper>
					<div className={top_container}>
						<section className={agency_description}>
							<h3>
								<AgencyName fontSize="30" />
							</h3>
							<Typography fontSize="12" variant='p'>{AGENCY_DESCRIPTION}</Typography>
						</section>
						{footerLinkLists.map((listProps) => (
							<section key={listProps.title}>
								<FooterLinkList {...listProps} />
							</section>
						))}
						<section className={newsletter_container}>
							<Typography fontSize="15" fontWeight="700">
								Newsletter
							</Typography>

							<Typography className={newsletter_description} variant="p" fontSize="12" fontWeight="700">
								{NEWSLETTER_DESCRIPTION}
							</Typography>

							<NewsletterSubscribeWidget />
						</section>
					</div>
				</SectionWrapper>
				<div className={bottom_container}>
					<Typography>
						{AGENCY_NAME} {CURRENT_YEAR}
					</Typography>
				</div>
			</footer>
		</SectionWrapper>
	);
};
