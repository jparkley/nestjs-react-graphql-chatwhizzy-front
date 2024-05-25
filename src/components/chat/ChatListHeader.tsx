import { AddComment, Favorite } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar } from "@mui/material";

interface ChatListHeaderProps {
  addChatModal: () => void;
}

const ChatListHeader = ({ addChatModal }: ChatListHeaderProps) => {
  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar variant="regular">
          <IconButton size="large">
            <AddComment
              sx={{ color: "#57A6A1" }}
              onClick={() => addChatModal()}
            />
          </IconButton>
          <IconButton size="large">
            <Favorite sx={{ color: "#57A6A1" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default ChatListHeader;
