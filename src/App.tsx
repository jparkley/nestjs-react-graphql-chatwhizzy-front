import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import router from "./components/routes/Routes";
import { RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./library/apollo-client";

const mainTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <Container>
          <RouterProvider router={router}></RouterProvider>
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
