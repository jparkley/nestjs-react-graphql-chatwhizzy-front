import { useParams } from "react-router-dom";
import useGetChat from "../../library/hooks/useGetChat";
import ChatDefaultImage from "./ChatDefaultImage";
import { Box, Typography } from "@mui/material";
import AttractionsIcon from "@mui/icons-material/Attractions";

const ChatContent = () => {
  const params = useParams();
  const { data } = useGetChat({ _id: params._id! });

  return (
    <div>
      {params._id && data ? (
        <>
          <Box sx={{ padding: 3 }}>
            <AttractionsIcon />
            <Typography variant="h4">{data?.chat.chatName}</Typography>
          </Box>
        </>
      ) : (
        <ChatDefaultImage />
      )}
    </div>
  );
};

export default ChatContent;
