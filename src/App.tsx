import { Container, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./library/apollo-client";
import router from "./components/routes/Routes";
import RouteGuard from "./components/auth/RouteGuard";
import Header from "./components/common/Header";
import mainTheme from "./theme";
import ChatList from "./components/chat/ChatList";

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <Header />
        <Grid container>
          <Grid item xs={6} md={4}>
            <ChatList />
          </Grid>
          <Grid item xs={6} md={8}>
            <Container>
              <RouteGuard>
                <RouterProvider router={router}></RouterProvider>
              </RouteGuard>
            </Container>
          </Grid>
        </Grid>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default App;
