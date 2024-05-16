import Box from "@mui/material/Box";
import { Container } from "@mui/system";

const ChatDefaultImage = () => {
  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ display: { sm: "none", md: "block" } }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              minHeight: "60vh",
              alignItems: "center",
              flexGrow: 1,
              margin: 5,
            }}
          >
            <img
              src="/chat-intro.gif"
              width={300}
              style={{
                margin: 5,
                // boxShadow:
                //   "rgba(0, 0, 0, 0.25) 0px 5px 35px, rgba(0, 0, 0, 0.01) 0px -12px 30px, rgba(0, 0, 0, 0.01) 0px 4px 6px, rgba(0, 0, 0, 0.01) 0px 12px 13px, rgba(0, 0, 0, 0.01) 0px -3px 5px",
              }}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};
export default ChatDefaultImage;
