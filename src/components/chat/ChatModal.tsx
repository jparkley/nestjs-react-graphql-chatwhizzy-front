import { useState } from "react";
import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import useCreateChat from "../../library/hooks/useCreateChat";
import router from "../routes/Routes";

interface ChatModalProps {
  open: boolean;
  handleClose: () => void;
}
const ChatModal = ({ open, handleClose }: ChatModalProps) => {
  const [chatName, setChatName] = useState("");
  const [error, setError] = useState("");
  const [createChat] = useCreateChat();

  const resetOnClose = () => {
    setChatName("");
    setError("");
    handleClose();
  };

  return (
    <>
      <Modal open={open} onClose={resetOnClose}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "35%",
            left: "55%",
            transform: "translate(-45%, -65%)",
            width: 440,
            borderRadius: 4,
            boxShadow: 3,
            bgcolor: "background.paper",
            p: 5,
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h6" component="h2">
              Start to chat
            </Typography>

            <TextField
              label="Chat Room Name"
              error={!!error}
              helperText={error}
              onChange={(e) => setChatName(e.target.value)}
            />

            <Button
              variant="outlined"
              sx={{ mt: 2 }}
              onClick={async () => {
                if (!chatName.length) {
                  setError("Chat Room Name is required");
                  return;
                }
                const newChat = await createChat({
                  variables: {
                    createChatInput: {
                      chatName: chatName,
                    },
                  },
                });
                resetOnClose();
                router.navigate(`/chat/${newChat.data?.createChat._id}`);
              }}
            >
              Save
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default ChatModal;
