import { useParams } from "react-router-dom";
import useGetChat from "../../library/hooks/useGetChat";
import ChatDefaultImage from "./ChatDefaultImage";
import { IconButton, InputBase, Paper, Stack, Typography } from "@mui/material";
import AttractionsIcon from "@mui/icons-material/Attractions";
import SendRounded from "@mui/icons-material/SendRounded";
import useCreateThread from "../../library/hooks/useCreateThread";
import { useState } from "react";

const ChatContent = () => {
  const params = useParams();
  const chatId = params._id!;
  const [thread, setThread] = useState("");
  const { data } = useGetChat({ _id: chatId });
  const [createThread] = useCreateThread();

  return (
    <Stack
      sx={{
        height: "100%",
        justifyContent: "space-between",
        ml: "20px",
        mt: "40px",
      }}
    >
      {params._id ? (
        <>
          <Typography variant="h4">{data?.chat.chatName}</Typography>
          <Paper>
            <InputBase
              sx={{
                flex: 1,
                width: "100%",
                padding: "6px",
                pl: "10px",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 5px 35px, rgba(0, 0, 0, 0.01) 0px -12px 30px, rgba(0, 0, 0, 0.01) 0px 4px 6px, rgba(0, 0, 0, 0.01) 0px 12px 13px, rgba(0, 0, 0, 0.01) 0px -3px 5px",
                // backgroundColor: "blue",
              }}
              value={thread}
              onChange={(e) => setThread(e.target.value)}
            />
            <IconButton
              onClick={() =>
                createThread({
                  variables: { createThreadInput: { content: thread, chatId } },
                })
              }
            >
              <SendRounded sx={{ color: "#57A6A1" }} />
            </IconButton>
          </Paper>
        </>
      ) : (
        <ChatDefaultImage />
      )}
    </Stack>
  );
};

export default ChatContent;
