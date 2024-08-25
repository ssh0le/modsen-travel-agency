import { SectionWrapper } from '../UI/SectionWrapper';

import styles from './header.module.scss';
import { HeaderLink } from './HeaderLink';
import { LanguageSwitch } from './LanguageSwitch';

const navlinks = ['Home', 'Rooms', 'About', 'Contact'];

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
							{navlinks.map((linkTitle) => (
								<HeaderLink key={linkTitle} href={linkTitle}>
									{linkTitle}
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
