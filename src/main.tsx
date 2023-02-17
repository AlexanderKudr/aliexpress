import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/main.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(

    <RouterProvider router={router} />

);
