import { SectionWrapper } from '../UI/SectionWrapper';

import styles from './header.module.scss';
import { HeaderLink } from './HeaderLink';
import { LanguageSwitch } from './LanguageSwitch';

const navlinks = [
	{
		title: 'Home',
		href: '/',
	},
	{
		title: 'Rooms',
		href: '/rooms',
	},
	{
		title: 'About',
		href: '/about',
	},
	{
		title: 'Contact',
		href: '/contact',
	},
];

export const Header = async () => {
	return (
		<SectionWrapper>
			<header className={styles.container}>
				<div className={styles.controls_container}>
					<a href="/">
						{/* <img src="" alt="" /> */}
						Logo
					</a>

					<nav>
						<ul className={styles.link_list}>
							{navlinks.map(({ title, href }) => (
								<HeaderLink key={title} href={href}>
									{title}
								</HeaderLink>
							))}
						</ul>
					</nav>
				</div>

				<LanguageSwitch />
			</header>
		</SectionWrapper>
	);
};
