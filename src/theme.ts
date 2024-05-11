import { createTheme } from "@mui/material";

const mainTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: "cursive",
    button: {
      fontSize: 16,
      letterSpacing: ".1rem",
    },
  },
});

export default mainTheme;
