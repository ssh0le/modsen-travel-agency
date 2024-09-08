export interface Country {
	name: string;
	code: string;
}

export interface CountriesResponse {
	countries: Array<Country>;
}

export enum RoomType {
	// eslint-disable-next-line no-unused-vars
	Luxury = 'luxury',
}

export interface Room {
	id: number;
	roomsAvailable: number;
	benefits: string[];
	imageSrcId: number;
	type: RoomType;
}

export interface LuxuryRoomsResponse {
	rooms: Array<Omit<Room, 'type'>>;
}
