import { customFetch } from "../utils/customFetch";

const useLogout = () => {
  const logout = async () => {
    await customFetch(`${process.env.REACT_APP_API_URL}/auth/logout`, {
      method: "POST",
    });
  };
  return { logout };
};

export default useLogout;
