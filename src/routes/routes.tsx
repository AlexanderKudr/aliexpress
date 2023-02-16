import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Error from "../pages/Error";
import DashboardRoot from "../pages/User/Dashboard/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/category/:id",
        element: <Root />, //todo: add category from pages
      },
      {
        path: "/product/:id",
        element: <Root />, //todo: add product from pages
      },
    ],
  },
  {
    path: "/user/signup",
    element: <Root />, //todo: add signup from pages
  },
  {
    path: "/user/login",
    element: <Root />, //todo: add login from pages
  },
  {
    path: "/user/dashboard",
    element: <DashboardRoot />,
  },
]);
