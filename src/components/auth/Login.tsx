import { Link } from "react-router-dom";
import { Box, Link as MUILink } from "@mui/material";
import Auth from "./Auth";

const Login = () => {
  return (
    <Auth submitLabel="Login" onSubmit={async () => {}}>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <p>Don't have an account?</p>
        <Link to={"/signup"}>
          <MUILink>Sign Up</MUILink>
        </Link>
      </Box>
    </Auth>
  );
};

export default Login;
