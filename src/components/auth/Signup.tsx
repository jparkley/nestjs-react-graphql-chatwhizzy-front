import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Link as MUILink } from "@mui/material";
import Auth from "./Auth";
import useCreateUser from "../../library/hooks/useCreateUser";
import { handleGraphQLErrors } from "../../library/utils/graphql-errors";

const Signup = () => {
  const [createUser] = useCreateUser();
  const [error, setError] = useState("");
  return (
    <Auth
      submitLabel="Sign Up"
      error={error}
      onSubmit={async ({ email, password }) => {
        try {
          await createUser({
            variables: {
              createUserInput: {
                email,
                password,
              },
            },
          });
          setError("");
        } catch (error: any) {
          error && setError(handleGraphQLErrors(error));
        }
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <p>Already have an account?</p>
        <Link to={"/login"}>
          <MUILink>Login</MUILink>
        </Link>
      </Box>
    </Auth>
  );
};

export default Signup;
