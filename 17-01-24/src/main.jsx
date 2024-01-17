import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Page404 from "./routes/page404";
import Homepage from "./routes/homepage";
import About from "./routes/about/about";
import Contacts from "./routes/contacts/contacts";
import "./index.css";
import Product from "./routes/product";

const router = createBrowserRouter([
  {
    path: "/", // Rotta statica
    element: <Homepage />,
    errorElement: <Page404 />,
  },
  {
    path: "products/:productId", // Rotta dinamica
    element: <Product />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
