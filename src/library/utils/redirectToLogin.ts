import apolloClient from "../apollo-client";
import { loggedInVar } from "../reactive-vars/loggedInVar";

const redirectToLogin = () => {
  // router.navigate("/login");
  loggedInVar(false);
  window.location.replace("/login");
  apolloClient.resetStore();
};

export default redirectToLogin;
