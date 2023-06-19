import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
// import IsVisibleP from "./Tasks/isVisibleP";
import MsgStyleParent from "./Tasks/MsgStyleParent";
import CardP from "./Tasks/CardP";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <MsgStyleParent /> */}
    {/* <IsVisibleP /> */}
    <CardP />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("root")).render(<AbtParent />);
