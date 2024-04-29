import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `${process.env.REACT_APP_GRAPHQL_URL}graphql`,
});

export default apolloClient;
