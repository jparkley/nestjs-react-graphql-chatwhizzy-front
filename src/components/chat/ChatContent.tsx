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
import { useEffect, useRef, useState } from "react";
import SendRounded from "@mui/icons-material/SendRounded";
import useCreateThread from "../../library/hooks/useCreateThread";
import useGetThreads from "../../library/hooks/useGetThreads";
import { Thread } from "../../gql/graphql";

const ChatContent = () => {
  const params = useParams();
  const chatId = params._id!;

  const [thread, setThread] = useState(""); // for new input
  const [threads, setThreads] = useState<Thread[]>([]); // combined threads (existing + user's + pushed)

  const { data } = useGetChat({ _id: chatId });
  const { data: existingThreads } = useGetThreads({ chatId });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createThread] = useCreateThread(chatId);

  const divRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

  const scrollToBottom = () => divRef.current?.scrollIntoView();

  useEffect(() => {
    if (existingThreads) setThreads(existingThreads.threads);
  }, [existingThreads]);

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
            {threads?.map((thread) => (
              <Grid container alignItems="center" sx={{ marginBottom: 1 }}>
                <Grid item xs={3} md={1}>
                  <Stack>
                    <Avatar
                      src={thread.user.imageUrl}
                      sx={{ width: 40, height: 40 }}
                    />
                    <Typography variant="caption">
                      {thread.user.username}
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={9} md={11}>
                  <Stack>
                    <Typography sx={{ padding: 1 }}>
                      {thread.content}
                    </Typography>
                    <Typography variant="caption" sx={{ marginLeft: 2 }}>
                      {new Date(thread.createdAt).toLocaleDateString("en-us", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
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
                if (e.key === "Enter") {
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
