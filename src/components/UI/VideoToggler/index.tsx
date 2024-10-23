import { PauseIcon, PlayIcon } from '@/constants';

import styles from './styles.module.scss';

interface VideoTogglerProps {
	isPlaying: boolean;
}

const { container, content } = styles;

export const VideoToggler = ({ isPlaying }: VideoTogglerProps) => {
	return (
		<div className={container}>
			<div className={content}>{isPlaying ? <PauseIcon /> : <PlayIcon />}</div>
		</div>
	);
};
