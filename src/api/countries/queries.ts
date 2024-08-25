import { gql } from '@apollo/client';

export const getCountriesQuery = gql`
	query Countries {
		countries {
			code
			name
		}
	}
`;
