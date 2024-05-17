import { Container, Grid } from "@mui/material";
import ChatList from "../chat/ChatList";
import ChatContent from "../chat/ChatContent";

const Chat = () => {
  return (
    <Grid container>
      <Grid item xs={6} md={4}>
        <ChatList />
      </Grid>
      <Grid item xs={6} md={8} sx={{ height: "84vh" }}>
        <ChatContent />
      </Grid>
    </Grid>
  );
};

export default Chat;
