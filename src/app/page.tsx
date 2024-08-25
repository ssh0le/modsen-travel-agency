import React from 'react';

import { Header } from '@/components/Header/Header';
import { HeroSection } from '@/components/Homepage/HeroSection';

import styles from './page.module.css';

export default function Home() {
	return (
		<div>
			<Header />
			<main className={styles.main}>
				<HeroSection />
			</main>
		</div>
	);
}
