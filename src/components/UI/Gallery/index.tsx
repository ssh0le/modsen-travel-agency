'use client';

import Image, { StaticImageData } from 'next/image';
import { MouseEvent, useState } from 'react';

import { roomsImages } from '@/constants/images';
import { classNames } from '@/helpers';

import styles from './gallery.module.scss';

export const Gallery = () => {
	const [selectedImage, setSelectedImage] = useState(roomsImages[0]);

	const handleImageClick =
		(image: StaticImageData) => (event: MouseEvent<HTMLLIElement>) => {
			event.currentTarget.scrollTo();
			setSelectedImage(image);
		};

	return (
		<section className={styles.gallery_container}>
			<ul className={styles.gallery_list}>
				{roomsImages.map((image, key) => {
					return (
						<li
							key={key}
							onClick={handleImageClick(image)}
							className={classNames(
								styles.gallery_list_item,
								image === selectedImage ? styles.selected : undefined
							)}
						>
							<Image src={image} alt="room_picture" />
						</li>
					);
				})}
			</ul>
			<div className={styles.main_image_container}>
				<Image src={selectedImage} alt="selected_room_picture" />
			</div>
		</section>
	);
};
