import apolloClient from "../apollo-client";
import { loggedInVar } from "../reactive-vars/loggedInVar";
import { clearToken } from "./token";

const redirectToLogin = () => {
  // router.navigate("/login");
  loggedInVar(false);
  clearToken();
  window.location.replace("/login");
  apolloClient.resetStore();
};

export default redirectToLogin;
