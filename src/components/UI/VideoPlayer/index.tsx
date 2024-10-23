'use client';

import { useEffect, useRef, useState } from 'react';

import { VideoToggler } from '../VideoToggler';

import styles from './styles.module.scss';

interface VideoPlayerProps {
	videoSrc?: string;
}

const CONTROLS_TIMEOUT = 2000;

export const VideoPlayer = ({ videoSrc = '/video.mp4' }: VideoPlayerProps) => {
	const isTouched = useRef(false);
	const [isPlaying, setIsPlaying] = useState(false);
	const [displayControls, setDisplayControls] = useState(true);
	const [lastUserInteraction, setLastUserInteraction] = useState(Date.now());

	const videoRef = useRef<HTMLVideoElement>(null);

	const toggleIsPlaying = () => {
		isTouched.current = true;
		setLastUserInteraction(Date.now());
		setIsPlaying(!isPlaying);
	};

	useEffect(() => {
		if (isPlaying) {
			videoRef.current?.play();
		} else {
			videoRef.current?.pause();
		}
	}, [isPlaying]);

	useEffect(() => {
		if (displayControls && isTouched.current) {
			const timeoutId = setTimeout(() => {
				setDisplayControls(false);
			}, CONTROLS_TIMEOUT);

			return () => {
				clearTimeout(timeoutId);
			};
		}
	}, [lastUserInteraction]);

	const onContainerMouseMove = () => {
		setLastUserInteraction(Date.now());
		setDisplayControls(true);
	};

	return (
		<div
			className={styles.container}
			onMouseMove={onContainerMouseMove}
			onClick={toggleIsPlaying}
		>
			{displayControls && (
				<div className={styles['toggler-container']}>
					<VideoToggler isPlaying={isPlaying} />
				</div>
			)}
			<video className={styles.player} ref={videoRef} controls={false} muted>
				<source src={videoSrc} type="video/mp4"></source>
				Your browser does not support the video tag.
			</video>
		</div>
	);
};
