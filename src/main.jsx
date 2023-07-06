// import React from "react";
// import ReactDOM from "react-dom/client";
// // import App from './App.jsx'
// import "./index.css";

// import Axiosjson from "./axios/Axiosjson";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Axiosjson />
//   </React.StrictMode>
// );

// ReactDOM.createRoot(document.getElementById("root")).render(<AbtParent />);

// import ReactDOM from "react-dom/client";
// import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Details from "./axios/Details";
// import Axiosjson from "./axios/Axiosjson";
// import CartPage from "./axios/Cart";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Axiosjson />,
//   },
//   {
//     path: "details/:id",
//     element: <Details />,
//   },
//   {
//     path: "cart",
//     element: <CartPage />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductListf from "./cartfromBackendApi/Homepage";
import MyCartf from "./cartfromBackendApi/Cartpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductListf />,
  },
  {
    path: "/cart",
    element: <MyCartf />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer />
    <RouterProvider router={router} />
  </>
);
