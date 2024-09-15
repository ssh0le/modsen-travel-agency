import { gql } from '@apollo/client';

export const getTestimoniesQuery = gql`
	query Testimonies {
		testimonies {
			id
			author
			authorImageId
			testimony
			date
			rating
		}
	}
`;
