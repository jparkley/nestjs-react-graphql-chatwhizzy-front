import { useEffect, useState } from "react";
import List from "@mui/material/List";
import Stack from "@mui/material/Stack";
import ChatListItem from "./ChatListItem";
import ChatListHeader from "./ChatListHeader";
import ChatModal from "./ChatModal";
import useGetChats from "../../library/hooks/useGetChats";

import { useLocation } from "react-router-dom";
import useOnThreadCreated from "../../library/hooks/useOnThreadCreated";

const ChatList = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedChatId, setSelectedChatId] = useState("");
  const { data } = useGetChats();
  const path = useLocation();

  useOnThreadCreated({ chatIds: data?.chats.map((chat) => chat._id) || [] });

  useEffect(() => {
    const pathArray = path.pathname.split("chat/");

    if (pathArray.length === 2) {
      setSelectedChatId(pathArray[1]);
    }
  }, [path.pathname]);

  return (
    <>
      <ChatModal open={showModal} handleClose={() => setShowModal(false)} />
      <Stack>
        <ChatListHeader addChatModal={() => setShowModal(true)} />
        <List
          sx={{
            width: "100%",
            // maxWidth: 360,
            bgcolor: "background.paper",
            maxHeight: "80vh",
            overflow: "auto",
          }}
        >
          {data?.chats
            ?.map((chat) => (
              <ChatListItem
                chat={chat}
                selected={chat._id === selectedChatId}
              />
            ))
            .reverse()}
        </List>
      </Stack>
    </>
  );
};

export default ChatList;
