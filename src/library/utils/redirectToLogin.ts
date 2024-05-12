import apolloClient from "../apollo-client";

const redirectToLogin = () => {
  // router.navigate("/login");
  window.location.replace("/login");
  apolloClient.resetStore();
};

export default redirectToLogin;
