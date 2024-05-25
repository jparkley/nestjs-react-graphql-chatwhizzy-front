import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./library/apollo-client";
import router from "./components/routes/Routes";
import RouteGuard from "./components/auth/RouteGuard";
import Header from "./components/common/Header";
import mainTheme from "./theme";

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <Header />
        <Container sx={{ height: "100%" }}>
          <RouteGuard>
            <RouterProvider router={router}></RouterProvider>
          </RouteGuard>
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
