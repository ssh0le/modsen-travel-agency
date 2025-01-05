/* eslint-disable no-unused-vars */
export interface Country {
	name: string;
	code: string;
}

export interface CountriesResponse {
	countries: Array<Country>;
}

export enum RoomType {
	Luxury = 'luxury',
	Single = 'single',
}

export interface Room {
	id: number;
	roomsAvailable: number;
	benefits: string[];
	imageSrcId: number;
	type: RoomType;
	priceInUsd: number;
	name: string;
}

interface RoomPrice {
	usd: number;
	ngn: number;
}

export interface DetailedRoom {
	id: number;
	description: string;
	type: RoomType;
	name: string;
	price: RoomPrice;
	reviewsCount: number;
	rating: number | null;
}

export interface Testimony {
	id: number;
	author: string;
	authorImageId: number;
	testimony: string;
	date: string;
	rating: number;
}

export interface LuxuryRoomsResponse {
	rooms: Array<Pick<Room, 'id' | 'imageSrcId' | 'benefits' | 'roomsAvailable'>>;
}

export type RoomDescription = Omit<Room, 'type'>;

export interface RoomsListResponse {
	rooms: Array<RoomDescription>;
}

export interface TestimoniesResponse {
	testimonies: Array<Testimony>;
}

export interface DetailedRoomResponse {
	room: DetailedRoom | null;
}
