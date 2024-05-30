import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Link as MUILink, TextField } from "@mui/material";
import Auth from "./Auth";
import useCreateUser from "../../library/hooks/useCreateUser";
import { handleGraphQLErrors } from "../../library/utils/graphql-errors";
import useLogin from "../../library/hooks/useLogin";

const Signup = () => {
  const [createUser, { loading }] = useCreateUser();
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const { login } = useLogin();

  return (
    <Auth
      submitLabel="Sign Up"
      error={error}
      loading={loading}
      extraFields={[
        <TextField
          type="text"
          label="Username"
          variant="outlined"
          name="username"
          value={username}
          error={!!error}
          helperText={error}
          onChange={(e) => setUsername(e.target.value)}
        />,
      ]}
      onSubmit={async ({ email, password }) => {
        try {
          await createUser({
            variables: {
              createUserInput: {
                email,
                username,
                password,
              },
            },
          });
          await login({ email, password });
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
