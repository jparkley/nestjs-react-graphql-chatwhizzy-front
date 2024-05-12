import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import NavMenu from "./NavMenu";
import NavUserMenu from "./NavUserMenu";

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavMenu pages={["Chat", "TopWhizz"]} />
          <NavUserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
