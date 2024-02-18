import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Base from "./components/Base";
import baseBackground from "./assets/FogInForest.jpg";
import Home from "./components/Home";
import Login from "./components/Login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/Register.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: (
      <Base authComponent={<Login />} backgroundImage={baseBackground} />
    ),
  },
  {
    path: "/register",
    element: (
      <Base authComponent={<Register />} backgroundImage={baseBackground} />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
