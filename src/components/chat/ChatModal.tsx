import { useState } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputBase,
  Modal,
  Paper,
  Stack,
  Switch,
  TextField,
  Toolbar,
  Typography,
  outlinedInputClasses,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import useCreateChat from "../../library/hooks/useCreateChat";

interface ChatModalProps {
  open: boolean;
  handleClose: () => void;
}
const ChatModal = ({ open, handleClose }: ChatModalProps) => {
  const [isPrivate, setIsPrivate] = useState(true);
  const [chatName, setChatName] = useState<string | undefined>("");
  const [createChat] = useCreateChat();

  return (
    <>
      <Modal open={open} onClose={handleClose}>
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
            <FormGroup>
              <FormControlLabel
                style={{ width: 0 }}
                label="Private"
                control={
                  <Switch
                    defaultChecked
                    value={isPrivate}
                    onChange={(e) => setIsPrivate(e?.target.checked)}
                  />
                }
              />
            </FormGroup>
            {isPrivate ? (
              <Paper
                sx={{
                  p: "4px 4px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <InputBase sx={{ m: 1, flex: 1 }} placeholder="Search Users" />
                <IconButton sx={{ p: "8px" }}>
                  <Search />
                </IconButton>
              </Paper>
            ) : (
              <TextField
                label="Chat Room Name"
                onChange={(e) => setChatName(e.target.value)}
              />
            )}
            <Button
              variant="outlined"
              sx={{ mt: 2 }}
              onClick={() =>
                createChat({
                  variables: {
                    createChatInput: {
                      isPrivate,
                      chatName: chatName || undefined,
                    },
                  },
                })
              }
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
