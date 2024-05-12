import { useState } from "react";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import ChatListItem from "./ChatListItem";
import ChatListHeader from "./ChatListHeader";
import ChatModal from "./ChatModal";

const ChatList = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ChatModal open={showModal} handleClose={() => setShowModal(false)} />
      <Stack>
        <ChatListHeader addChatModal={() => setShowModal(true)} />
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            maxHeight: "80vh",
            overflow: "auto",
          }}
        >
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
          <ChatListItem />
        </List>
      </Stack>
    </>
  );
};

export default ChatList;
