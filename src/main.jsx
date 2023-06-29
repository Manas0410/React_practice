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
import AccordianP from "./Tasks/1.AccordianP";
import CondInputbox from "./props4/condInputbox";
import ProductList from "./useEffect/LoadingList";
import Axiosjson from "./axios/Axiosjson";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <MsgStyleParent /> */}
    {/* <IsVisibleP /> */}
    {/* <CardP /> */}
    {/* <ListRender /> */}
    {/* <ListRenderAdd /> */}
    {/* <TemperatureP /> */}
    {/* <AccordianP /> */}
    {/* <CondInputbox /> */}
    {/* <ProductList /> */}
    <Axiosjson />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("root")).render(<AbtParent />);
