import apolloClient from "../apollo-client";
import { loggedInVar } from "../apollo-var";

const redirectToLogin = () => {
  // router.navigate("/login");
  loggedInVar(false);
  window.location.replace("/login");
  apolloClient.resetStore();
};

export default redirectToLogin;
