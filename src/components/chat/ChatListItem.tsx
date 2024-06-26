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
  selected: boolean;
}
const ChatListItem = ({ chat, selected }: ChatListItemProps) => {
  return (
    <>
      <ListItem alignItems="flex-start" disablePadding>
        <ListItemButton
          onClick={() => router.navigate(`/chat/${chat._id}`)}
          selected={selected}
        >
          <ListItemAvatar sx={{ color: "#57A6A1" }}>
            <Avatar alt="Profile icon" src={chat.latestThread?.user.imageUrl} />
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
                  {chat.latestThread?.user.username || ""}
                </Typography>
                {" " + (chat.latestThread?.content || "")}
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
