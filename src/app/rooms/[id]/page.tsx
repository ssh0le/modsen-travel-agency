import { detailedRoomQuery, roomsIdListQuery, serverClient } from '@/api';
import { RoomDetails } from '@/components/RoomDetails';
import { RoomDetailsHero } from '@/components/RoomDetails/Hero';
import { RoomPicturesList } from '@/components/RoomDetails/RoomPicturesList';
import { DetailedRoomResponse } from '@/types';

export async function generateStaticParams() {
	const { data } = await serverClient.query<{ rooms: number[] }>({
		query: roomsIdListQuery,
		variables: {
			filter: {},
		},
	});

	return data.rooms.map((id) => ({
		id: String(id),
	}));
}

export default async function Page({ params }: { params: { id: string } }) {
	const { id } = params;

	const { data, loading } = await serverClient.query<DetailedRoomResponse>({
		query: detailedRoomQuery,
		variables: {
			filter: {
				id: Number(id),
			},
		},
	});

	console.log('0000000000000000000000000', data, loading);

	return (
		<div>
			<RoomDetailsHero />
			<RoomDetails data={data.room} loading={loading} />
			<RoomPicturesList />
		</div>
	);
}
