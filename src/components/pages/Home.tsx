import { Box } from "@mui/material";

const Home = () => {
  return (
    <>
      <div>
        <Box
          sx={{
            backgroundImage: "url('bg-06a.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "800px",
            height: "100vh",
            width: "800px",
          }}
        >
          <h2> Welcom to ChatWhizzy!</h2>
        </Box>
        {/* <video src="/bg-mv-01.mp4" autoPlay loop muted />
        <div>
          <h2>Welcome to ChatWhizzy!</h2>
        </div> */}
      </div>
    </>
  );
};

export default Home;
