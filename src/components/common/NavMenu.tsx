import { useState } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import router from "../routes/Routes";
import { NavPage } from "../../library/interfaces";

interface NavMenuProps {
  pages: NavPage[];
}

const NavMenu = ({ pages }: NavMenuProps) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <ChatIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        onClick={() => router.navigate("/")}
        sx={{
          mr: 4,
          pb: 0.5,
          display: { xs: "none", md: "flex" },
          fontFamily: "cursive",
          fontWeight: 700,
          letterSpacing: ".25rem",
          color: "#FFF9D0",
          textDecoration: "none",
        }}
      >
        ChatWhizzy
      </Typography>

      {/* mobile or smaller screen menu */}
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page) => (
            <MenuItem
              key={page.name}
              onClick={() => {
                router.navigate(page.path);
                handleCloseNavMenu();
              }}
            >
              <Typography textAlign="center" textTransform="none">
                {page.name}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>

      <ChatIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component="a"
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "cursive",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        ChatWhizzy
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page) => (
          <Button
            key={page.name}
            onClick={() => {
              router.navigate(page.path);
              handleCloseNavMenu();
            }}
            size="medium"
            style={{ textTransform: "none" }}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            {page.name}
          </Button>
        ))}
      </Box>
    </>
  );
};

export default NavMenu;
