import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Chat from "../pages/Chat";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import Shop from "../pages/Shop";
import Profile from "../users/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/chat/:_id",
    // element: <ChatMain />,
    element: <Chat />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

export default router;
