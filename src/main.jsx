import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Root from "./Root.jsx";
import Home from "./Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Err from "./Err.jsx";
import Dashboard from "./Dashboard.jsx";
import ProductDetail from "./ProductDetail.jsx";
import Statistics from "./Statistics.jsx";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Err></Err>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "statics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/product/:productId",
        element: <ProductDetail></ProductDetail>,
        loader: () => fetch("/datas.json"),
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
