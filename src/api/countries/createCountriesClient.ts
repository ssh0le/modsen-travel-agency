import { ApolloClient, InMemoryCache } from '@apollo/client';

export const serverClient = new ApolloClient({
	uri: String(process.env.NEXT_PUBLIC_SERVER_URL),
	cache: new InMemoryCache(),
});
