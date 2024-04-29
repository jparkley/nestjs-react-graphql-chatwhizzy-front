import { Link } from "react-router-dom";
import { Box, Link as MUILink } from "@mui/material";
import Auth from "./Auth";
import useCreateUser from "../../library/hooks/usecreateUser";

const Signup = () => {
  const [createUser] = useCreateUser();
  return (
    <Auth
      submitLabel="Sign Up"
      onSubmit={async ({ email, password }) => {
        await createUser({
          variables: {
            createUserInput: {
              email,
              password,
            },
          },
        });
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
