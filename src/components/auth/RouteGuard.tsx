import { useEffect } from "react";
import { publicRoutes } from "../../library/constants";
import useGetCurrentUser from "../../library/hooks/useGetCurrentUser";
import { loggedInVar } from "../../library/reactive-vars/loggedIn.var";

const RouteGuard = ({ children }: { children: JSX.Element }) => {
  const { data: user } = useGetCurrentUser();

  useEffect(() => {
    // when a user logs in successfully, set loggedInVar true
    if (user) {
      loggedInVar(true);
      // loggedInVar: ƒ (newValue) {
    }
  }, [user]);

  return (
    <>
      {publicRoutes.includes(window.location.pathname)
        ? children
        : user && children}
    </>
  );
};

export default RouteGuard;
