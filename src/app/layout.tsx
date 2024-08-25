import type { Metadata } from 'next';
import { Dancing_Script, Poppins, Raleway } from 'next/font/google';

import './globals.css';

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
			<body>{children}</body>
		</html>
	);
}
