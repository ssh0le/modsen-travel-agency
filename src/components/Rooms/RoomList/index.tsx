'use client';

import { useQuery } from '@apollo/client';

import { roomsListQuery, serverClient } from '@/api';
import { SectionWrapper } from '@/components/UI';
import { RoomsListResponse } from '@/types';

import { RoomCard } from '../RoomCard';

import styles from './room-list.module.scss';

export const RoomList = () => {
	const { data } = useQuery<RoomsListResponse>(roomsListQuery, {
		client: serverClient,
		variables: {
			filter: {
				amount: 6,
			},
		},
	});

	return (
		<SectionWrapper className={styles.container}>
			<ul className={styles.rooms_list}>
				{data?.rooms.map((room) => <RoomCard key={room.id} {...room} />)}
			</ul>
		</SectionWrapper>
	);
};
