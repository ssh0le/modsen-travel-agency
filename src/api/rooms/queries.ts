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
