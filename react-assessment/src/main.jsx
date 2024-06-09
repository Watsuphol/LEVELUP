import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Owner from "./components/Owner.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [{ path: "", element: <App /> }],
  },
  {
    path: "/Owner",
    element: <NavBar />,
    children: [{ path: "", element: <Owner /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
