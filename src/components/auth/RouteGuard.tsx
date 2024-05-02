import { publicRoutes } from "../../library/constants";
import useGetCurrentUser from "../../library/hooks/useGetCurrentUser";

const RouteGuard = ({ children }: { children: JSX.Element }) => {
  const { data: user } = useGetCurrentUser();
  // console.log("🚀 ~ RouteGuard ~ user:", user);
  return (
    <>
      {publicRoutes.includes(window.location.pathname)
        ? children
        : user && children}
    </>
  );
};

export default RouteGuard;
