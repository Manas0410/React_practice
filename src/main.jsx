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

import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./axios/Details";
import Axiosjson from "./axios/Axiosjson";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Axiosjson />,
  },
  {
    path: "details/:id",
    element: <Details />,
  },
  // {
  //   path: "cart/:id",
  //   element: <Cart />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
