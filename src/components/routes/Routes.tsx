import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Chat from "../pages/Chat";
import Login from "../auth/Login";
import Signup from "../auth/Signup";

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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
