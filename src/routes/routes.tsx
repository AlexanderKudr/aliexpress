import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Error from "../pages/Error";
import DashboardRoot from "../pages/User/Dashboard/Root";
// import SignUpPage from "../pages/SignUp";
import Homepage from "../pages/HomePage";
import Signup from "../pages/User/Signup";

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
    element: <Signup />,
    // element: <SignUpPage />,
  },
  {
    path: "/user/signin",
    element: <div>Signin in progress</div>,
  },
  // {
  //   path: "/user/signin",
  //   element: <Root />, //todo: add login from pages
  // },
  {
    path: "/user/dashboard",
    element: <DashboardRoot />,
  },
]);
