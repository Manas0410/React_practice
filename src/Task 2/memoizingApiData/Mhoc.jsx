import React from "react";
// import useAxios from "../../myHooks/CallingApiByAxios";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Context = createContext(null);

const Mhoc = ({ children }) => {
  //   const { data = [] } = useAxios("https://fakestoreapi.com/products");
  const [data, setData] = useState([]);
  //   useEffect(() => {
  //     axios
  //       .get("https://fakestoreapi.com/products")
  //       .then((response) => setData(response.data));
  //   }, []);
  return (
    <Context.Provider value={{ data: data, setData: setData }}>
      {children}
    </Context.Provider>
  );
};

export { Mhoc, Context };
