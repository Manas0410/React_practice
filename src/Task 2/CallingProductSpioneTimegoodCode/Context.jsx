import axios from "axios";
import React, { createContext, useState, useEffect, useContext } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState([]);

  return (
    <ProductContext.Provider value={{ productData, setProductData }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
