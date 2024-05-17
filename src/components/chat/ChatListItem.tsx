import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { ListItemButton } from "@mui/material";
import { Chat } from "../../gql/graphql";
import router from "../routes/Routes";

interface ChatListItemProps {
  // chatName?: string | null;
  chat: Chat;
}
const ChatListItem = ({ chat }: ChatListItemProps) => {
  return (
    <>
      <ListItem alignItems="flex-start" disablePadding>
        <ListItemButton onClick={() => router.navigate(`/chat/${chat._id}`)}>
          <ListItemAvatar sx={{ color: "#57A6A1" }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Box fontWeight="fontWeightBold">{chat.chatName || ""}</Box>
            }
            style={{ color: "#2C4E80" }}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Another Chat room
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItemButton>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default ChatListItem;
