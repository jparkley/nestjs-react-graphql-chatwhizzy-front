import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { onError } from "@apollo/client/link/error";
import { ERROR_UNAUTHENTICATED, publicRoutes } from "./constants";
import redirectToLogin from "./utils/redirectToLogin";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

const redirectLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    if (graphQLErrors[0].extensions?.code === ERROR_UNAUTHENTICATED) {
      if (!publicRoutes.includes(window.location.pathname)) {
        redirectToLogin();
      }
    }
  }
});

const httpLink = new HttpLink({
  uri: `${process.env.REACT_APP_API_URL}/graphql`,
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: `${process.env.REACT_APP_WS_URL}/graphql`,
  })
);

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: redirectLink.concat(link),
  // uri: `${process.env.REACT_APP_API_URL}/graphql`,
  // link: redirectLink.concat(httpLink),
  // link: from([authLink, errorLink, httpLink]),
});

export default apolloClient;
