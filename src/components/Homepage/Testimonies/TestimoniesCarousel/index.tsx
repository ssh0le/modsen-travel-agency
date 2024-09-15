'use client';

import { useQuery } from '@apollo/client';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { serverClient } from '@/api';
import { getTestimoniesQuery } from '@/api/testimonies';
import { NavigationButton, skeletonTestimonies } from '@/constants';
import { TestimoniesResponse } from '@/types';

import styles from './testimonies-slider.module.scss';
import { TestimonyCard } from './TestimonyCard';
import { TestimonyCardSkeleton } from './TestimonyCard/skeleton';

export const TestimoniesCarousel = () => {
	const { data, loading } = useQuery<TestimoniesResponse>(getTestimoniesQuery, {
		client: serverClient,
	});
	const carouselRef = useRef<HTMLDivElement>(null);

	const [maxWidth, setMaxWidth] = useState(0);

	const [currentScrollPosition, setCurrentScrollPosition] = useState(0);

	useLayoutEffect(() => {
		if (carouselRef.current) {
			const handleUpdateMaxWidth = () => {
				if (carouselRef.current) {
					setMaxWidth(
						Math.max(
							carouselRef.current.scrollWidth - carouselRef.current.clientWidth,
							0
						)
					);
				}
			};

			handleUpdateMaxWidth();

			const resizeObserver = new ResizeObserver(handleUpdateMaxWidth);

			resizeObserver.observe(carouselRef.current);

			return () => {
				resizeObserver.disconnect();
			};
		}
	}, [data?.testimonies]);

	useEffect(() => {
		if (carouselRef.current) {
			carouselRef.current.scrollTo({
				left: currentScrollPosition,
				behavior: 'smooth',
			});
		}
	}, [currentScrollPosition]);

	const leftDisabled = useMemo(() => {
		return currentScrollPosition === 0;
	}, [currentScrollPosition]);

	const rightDisabled = useMemo(() => {
		return currentScrollPosition >= maxWidth;
	}, [currentScrollPosition, maxWidth]);

	const handleRightClick = () => {
		if (
			!rightDisabled &&
			carouselRef.current &&
			currentScrollPosition < maxWidth
		) {
			const clientWidth = carouselRef.current.clientWidth;
			setCurrentScrollPosition(
				(prevScrollPosition) => prevScrollPosition + clientWidth
			);
		}
	};

	const handleLeftClick = () => {
		if (!leftDisabled && carouselRef.current && currentScrollPosition > 0) {
			const clientWidth = carouselRef.current.clientWidth;
			setCurrentScrollPosition((prevScrollPosition) =>
				Math.max(0, prevScrollPosition - clientWidth)
			);
		}
	};

	return (
		<section>
			<div className={styles.controls_cotnainer}>
				<div
					className={`${styles.left_button} ${leftDisabled ? styles.button_disabled : ''}`}
					onClick={handleLeftClick}
				>
					<NavigationButton />
				</div>
				<div
					className={`${styles.right_button} ${rightDisabled ? styles.button_disabled : ''}`}
					onClick={handleRightClick}
				>
					<NavigationButton />
				</div>
			</div>
			<section ref={carouselRef} className={styles.slider_content}>
				<div>
					{data?.testimonies.map((testimony) => (
						<TestimonyCard key={testimony.id} {...testimony} />
					))}
					{loading &&
						skeletonTestimonies.map((_, index) => (
							<TestimonyCardSkeleton key={index} />
						))}
				</div>
			</section>
		</section>
	);
};
