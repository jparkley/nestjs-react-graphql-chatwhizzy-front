import { useState } from "react";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import ChatListItem from "./ChatListItem";
import ChatListHeader from "./ChatListHeader";
import ChatModal from "./ChatModal";
import useGetChats from "../../library/hooks/useGetChats";

const ChatList = () => {
  const [showModal, setShowModal] = useState(false);
  const { data } = useGetChats();
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
          {data?.chats?.map((chat) => (
            <ChatListItem chat={chat} />
          ))}
        </List>
      </Stack>
    </>
  );
};

export default ChatList;
