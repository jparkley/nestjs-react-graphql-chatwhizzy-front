import { useState } from "react";
import apolloClient from "../apollo-client";

const useLogin = () => {
  const [error, setError] = useState<boolean>();

  const login = async (request: { email: string; password: string }) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      }
    );
    console.log("res: ", response);
    if (!response.ok) {
      setError(true);
      return;
    }
    setError(false);
    await apolloClient.refetchQueries({ include: "active" });
  };

  return { login, error };
};

export default useLogin;
