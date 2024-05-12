const useLogout = () => {
  const logout = async () => {
    await fetch(`${process.env.REACT_APP_API_URL}/auth/logout`, {
      method: "POST",
    });
  };
  return { logout };
};

export default useLogout;
