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
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "#E0EFE9", // Light blue color when selected
            "&:hover": {
              backgroundColor: "#CFF0DD", // Slightly darker on hover
            },
          },
        },
      },
    },
  },
});

export default mainTheme;
