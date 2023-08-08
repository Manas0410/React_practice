// import React from "react";
// import ReactDOM from "react-dom/client";
// // import App from './App.jsx'
// import "./index.css";

// import Task from "./Tasks/NinputFieldsSum/inputFParent";
// import { APIWithoutUseMemo } from "./Tasks/filterList";
// import { APIWithUseMemo } from "./useMEMO/asynccode";
// import TimerComponent from "./Task 2/TimerTask/Timer";
// import ParentD24A from "./Context API/1.example/1.ContextP";
// import Aparent from "./Context API/childToParent/Aparent";

// // ReactDOM.createRoot(document.getElementById("root")).render(
// //   <React.StrictMode>
// //     <TimerComponent />
// //   </React.StrictMode>
// // );

// ReactDOM.createRoot(document.getElementById("root")).render(<Aparent />);

import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Details from "./Task 2/ListToDetailwithoutRefresh/ListDetail";

import { store } from "./Redux Folder/ProductCart/ProductStore";
import { Provider } from "react-redux";

import Parent from "./LazyLoadingEx/Parent";
import ProductListP from "./Redux Folder/ProductCart/ProductListP";
import Cart from "./Redux Folder/ProductCart/Cart";
import Infinite from "./infinteScroll/Test1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Infinite />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// import ReactDOM from "react-dom/client";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import ProductListf from "./cartfromBackendApi/Homepage";
// import MyCartf from "./cartfromBackendApi/Cartpage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <ProductListf />,
//   },
//   {
//     path: "/cart",
//     element: <MyCartf />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <>
//     <ToastContainer />
//     <RouterProvider router={router} />
//   </>
// );
