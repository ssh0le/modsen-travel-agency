import { Typography } from '@/components/UI/Typography';

import styles from './newsletter.module.scss';

const { container, input, button } = styles;

export const NewsletterSubscribeWidget = () => {
	return (
		<form className={container}>
			<input type="email" className={input} placeholder="Enter your email" />
			<button type="submit" className={button}>
				<Typography fontSize="13" fontWeight="600">
					Subscribe
				</Typography>
			</button>
		</form>
	);
};
