import type { Metadata } from 'next';
import { Dancing_Script, Poppins, Raleway } from 'next/font/google';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header/Header';

import './globals.scss';
import styles from './layout.module.scss';

export const metadata: Metadata = {
	title: 'Modsen Travel Agency',
	description: 'Modsen Travel Agency',
};

const dancing_script = Dancing_Script({
	variable: '--font-dancing-script',
	subsets: ['latin'],
	weight: ['600', '700'],
});

const raleway = Raleway({
	variable: '--font-raleway',
	subsets: ['latin'],
	weight: ['600', '700'],
});

const poppins = Poppins({
	variable: '--font-poppins',
	subsets: ['latin'],
	weight: ['500', '600', '700'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${dancing_script.variable} ${raleway.variable} ${poppins.variable}`}
		>
			<body className={styles.body}>
				<div className={styles.header_container}>
					<Header />
				</div>
				<main className={styles.main}>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
