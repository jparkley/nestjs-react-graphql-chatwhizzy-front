import apolloClient from "../apollo-client";
import { loggedInVar } from "../reactive-vars/loggedIn.var";

const redirectToLogin = () => {
  // router.navigate("/login");
  loggedInVar(false);
  window.location.replace("/login");
  apolloClient.resetStore();
};

export default redirectToLogin;
