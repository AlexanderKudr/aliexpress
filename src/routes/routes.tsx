import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../pages/Root";
import Error from "../pages/Error";
import DashboardRoot from "../pages/User/Dashboard/Root";
// import SignUpPage from "../pages/SignUp";
import Homepage from "../pages/HomePage";
import Signup from "../pages/User/Signup";
import SignCarousel from "../layouts/SignCarousel";
import Signin from "../pages/User/Signin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Root />
        <Homepage />
      </>
    ),
    errorElement: <Error />,
    children: [
      // {
      //   index: true,
      //   element: <Homepage />,
      // },
      {
        path: "category/:id",
        element: <Root />, //todo: add category from pages
      },
      {
        path: "product/:id",
        element: <Root />, //todo: add product from pages
      },
    ],
  },
  {
    path: "user",
    element: <SignCarousel />,
    //todo, add loader if user exist, then redirect to dashboard
    children: [
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "",
        element: <Navigate to="signup" />,
      },
    ],
  },
  {
    path: "user/dashboard",
    element: <DashboardRoot />,
  },
]);
