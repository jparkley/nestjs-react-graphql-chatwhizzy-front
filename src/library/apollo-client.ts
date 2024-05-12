import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { ERROR_UNAUTHENTICATED, publicRoutes } from "./constants";
import redirectToLogin from "./utils/redirectToLogin";

const redirectLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) {
    if (graphQLErrors[0].extensions.code === ERROR_UNAUTHENTICATED) {
      if (!publicRoutes.includes(window.location.pathname)) {
        redirectToLogin();
      }
    }
  }
});

const httpLink = new HttpLink({
  uri: `${process.env.REACT_APP_API_URL}/graphql`,
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  // uri: `${process.env.REACT_APP_API_URL}/graphql`,
  link: redirectLink.concat(httpLink),
  // link: from([authLink, errorLink, httpLink]),
});

export default apolloClient;
