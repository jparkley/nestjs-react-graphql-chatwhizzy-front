import { AddComment, Favorite } from "@mui/icons-material";
import { AppBar, IconButton, Stack, Toolbar } from "@mui/material";

const ChatListHeader = () => {
  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar variant="regular">
          <IconButton size="large">
            <AddComment color="primary" />
          </IconButton>
          <IconButton size="large">
            <Favorite color="primary" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default ChatListHeader;
