import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import NavMenu from "./NavMenu";
import NavUserMenu from "./NavUserMenu";
import { loggedInVar } from "../../library/apollo-var";
import { useReactiveVar } from "@apollo/client";
import { navPagesForNonUsers, navPagesForUsers } from "../../library/constants";

const Header = () => {
  const loggedIn = useReactiveVar(loggedInVar);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavMenu pages={loggedIn ? navPagesForUsers : navPagesForNonUsers} />
          {loggedIn && <NavUserMenu />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
