import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import router from "../components/routes/Routes";
import { ERROR_UNAUTHENTICATED, publicRoutes } from "./constants";

const redirectLink = onError(({ graphQLErrors }) => {
  // console.log("🚀 ~ redirectLink ~ graphQLErrors:", graphQLErrors);
  if (graphQLErrors) {
    if (graphQLErrors[0].extensions.code === ERROR_UNAUTHENTICATED) {
      if (!publicRoutes.includes(window.location.pathname)) {
        router.navigate("/login");
        apolloClient.resetStore();
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
});

export default apolloClient;
