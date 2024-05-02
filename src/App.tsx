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
import RouteGuard from "./components/auth/RouteGuard";

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
          <RouteGuard>
            <RouterProvider router={router}></RouterProvider>
          </RouteGuard>
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
