import React from 'react';

import { HomepageFacilities } from '@/components/Homepage/Facilities';
import { HeroSection } from '@/components/Homepage/HeroSection';

export default function Home() {
	return (
		<div>
			<HeroSection />
			<HomepageFacilities />
		</div>
	);
}
