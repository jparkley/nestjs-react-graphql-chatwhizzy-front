import { useLocation, useParams } from "react-router-dom";
import useGetChat from "../../library/hooks/useGetChat";
import ChatDefaultImage from "./ChatDefaultImage";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AttractionsIcon from "@mui/icons-material/Attractions";
import SendRounded from "@mui/icons-material/SendRounded";
import useCreateThread from "../../library/hooks/useCreateThread";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import useGetThreads from "../../library/hooks/useGetThreads";

const ChatContent = () => {
  const params = useParams();
  const chatId = params._id!;
  const [thread, setThread] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { data } = useGetChat({ _id: chatId });
  const [createThread] = useCreateThread(chatId);
  const { data: threads } = useGetThreads({ chatId });
  const divRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const scrollToBottom = () => divRef.current?.scrollIntoView();

  useEffect(() => {
    setThread("");
    scrollToBottom();
  }, [location, threads]);

  const handleCreateThread = async () => {
    if (isSubmitting) return; // prevent multiple submission

    setIsSubmitting(true);

    try {
      await createThread({
        variables: { createThreadInput: { content: thread, chatId } },
      });
      setThread("");
      scrollToBottom();
    } catch {
      console.error("Error while writing a new thread");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <Box sx={{ maxHeight: "70vh", overflow: "auto" }}>
            {threads?.threads.map((thread) => (
              <Grid container alignItems="center" sx={{ marginBottom: 1 }}>
                <Grid item xs={3} md={1}>
                  <Avatar src="" sx={{ width: 40, height: 40 }} />
                </Grid>
                <Grid item xs={9} md={11}>
                  <Stack>
                    <Typography sx={{ padding: 1 }}>
                      {thread.content}
                    </Typography>
                    <Typography variant="caption" sx={{ marginLeft: 2 }}>
                      {new Date(thread.createdAt).toLocaleDateString()}
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            ))}
            <div ref={divRef}></div>
          </Box>

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
              onKeyDown={async (e) => {
                if (e.key == "Enter") {
                  e.preventDefault();
                  await handleCreateThread();
                }
              }}
            />
            <IconButton onClick={handleCreateThread}>
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
