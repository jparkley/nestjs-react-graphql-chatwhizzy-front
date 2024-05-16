import { createTheme } from "@mui/material";

const mainTheme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: "Noto Sans",
    button: {
      fontSize: 16,
      letterSpacing: ".1rem",
    },
  },
});

export default mainTheme;
