import React, { useState, useEffect } from "react";
import Data from "./Data";
import ProfileContext from "./ListContext";
import axios from "axios";

const DataParent = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (products.length === 0) {
      axios.get("https://fakestoreapi.com/products").then((data) => {
        setProducts(data.data);
      });
    }
  }, [products, setProducts]);

  return (
    <div>
      <ProfileContext.Provider value={{ products, setProducts }}>
        <Data />
      </ProfileContext.Provider>
    </div>
  );
};

export default DataParent;
