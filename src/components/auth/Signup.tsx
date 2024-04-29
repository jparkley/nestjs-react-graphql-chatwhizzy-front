import { Link } from "react-router-dom";
import { Box, Link as MUILink } from "@mui/material";
import Auth from "./Auth";

const Signup = () => {
  return (
    <Auth submitLabel="Sign Up" onSubmit={async () => {}}>
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
