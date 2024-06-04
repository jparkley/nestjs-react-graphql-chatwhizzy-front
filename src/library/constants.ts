import { NavPage } from "./interfaces";

export const ERROR_UNAUTHENTICATED = "UNAUTHENTICATED";
export const TOKEN = "token";

export const publicRoutes = ["/", "/login", "/signup"];
export const userMenu = ["Profile", "Logout"];
export const navPagesForUsers: NavPage[] = [
  {
    name: "Chat",
    path: "/chat",
  },
  {
    name: "Shop",
    path: "/shop",
  },
];

export const navPagesForNonUsers: NavPage[] = [
  {
    name: "Log In",
    path: "/login",
  },
  {
    name: "Sign Up",
    path: "/signup",
  },
];
