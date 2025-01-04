import { gql } from '@apollo/client';

export const luxuryRoomsQuery = gql`
	query Rooms($filter: RoomsFilters) {
		rooms(filter: $filter) {
			id
			imageSrcId
			benefits
			roomsAvailable
		}
	}
`;

export const roomsListQuery = gql`
	query Rooms($filter: RoomsFilters) {
		rooms(filter: $filter) {
			id
			imageSrcId
			roomsAvailable
			priceInUsd
			benefits
			name
		}
	}
`;

export const roomsIdListQuery = gql`
	query Rooms($filter: RoomsFilters) {
		rooms(filter: $filter) {
			id
		}
	}
`;

export const detailedRoomQuery = gql`
	query Room($filter: DetailedRoomFilters) {
		room(filter: $filter) {
			id
			description
			type
			name
			reviewsCount
			rating
			price {
				usd
				ngn
			}
		}
	}
`;
