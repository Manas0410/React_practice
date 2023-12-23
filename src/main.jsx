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

import { Provider } from "react-redux";

import { Mhoc } from "./Task 2/memoizingApiData/Mhoc";
import Mchild from "./Task 2/memoizingApiData/Mchild";

import LifeCycle from "./Forwardref/LifeCycle";
import BookHomeP from "./BookApp/BookHomeP";
import SearchBar from "./BookApp/SearchBar";
import No1to10Task from "./Task 2/No1to10Task";
import ChatBox from "./Task 2/throttling/ChatBox";
import TodoP from "./intvw/todoP";
import { store } from "./Redux Folder/Store";
import CalcBySaga from "./ReduxSaga/calculatorbySaga/calculator.layout";
import Movies from "./ReduxSaga/Movies/movies.layout";
import { LoopsBest, LoopsGood } from "./useMEMO/1.example";
import MemoP from "./Memo/1.parent";
import UseCallbackV22 from "./useCallBack/mainExample";
import UcbParent from "./useCallBack/AnotherExample/UcbParent";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <CalcBySaga />
        <Movies />
      </div>
    ),
  },
  {
    path: "/test",
    element: <UcbParent />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // <Mhoc>
  //   <RouterProvider router={router} />
  // </Mhoc>
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
// );232
// comit


