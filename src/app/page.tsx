import React from 'react';

import { HomepageFacilities } from '@/components/Homepage/Facilities';
import { HeroSection } from '@/components/Homepage/HeroSection';
import { LuxuriousRooms } from '@/components/Homepage/LuxuriousRooms';

export default function Home() {
	return (
		<div>
			<HeroSection />
			<HomepageFacilities />
			<LuxuriousRooms />
		</div>
	);
}
