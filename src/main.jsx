import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
// import IsVisibleP from "./Tasks/isVisibleP";
// import MsgStyleParent from "./Tasks/MsgStyleParent";
import CardP from "./Tasks/CardP";
import ListRender from "./props3/List";
import ListRenderAdd from "./props3/abhinavList";
import TemperatureP from "./Tasks/TemperatureP";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <MsgStyleParent /> */}
    {/* <IsVisibleP /> */}
    {/* <CardP /> */}
    {/* <ListRender /> */}
    {/* <ListRenderAdd /> */}
    <TemperatureP />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("root")).render(<AbtParent />);
