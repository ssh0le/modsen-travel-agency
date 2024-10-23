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
