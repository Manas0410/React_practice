import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import ProductView from "./props2/Products.layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductView />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById("root")).render(<AbtParent />);
