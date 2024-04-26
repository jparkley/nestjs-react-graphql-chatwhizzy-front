import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import router from "./components/routes/Routes";
import Auth from "./components/auth/Auth";
import { RouterProvider } from "react-router-dom";

const mainTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Container>
        <RouterProvider router={router}></RouterProvider>
      </Container>
    </ThemeProvider>
  );
};

export default App;
