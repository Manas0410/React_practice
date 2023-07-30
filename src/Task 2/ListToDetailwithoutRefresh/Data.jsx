import React, { useContext, useEffect, useState } from "react";
import ProfileContext from "./ListContext";
import ListP from "./ListP";
import axios from "axios";
import { memo } from "react";

const Data = () => {
  //   const [products, setProducts] = useState([]);
  const { products, setProducts } = useContext(ProfileContext);

  //   useEffect(() => {
  //     if (products.length === 0) {
  //       axios.get("https://fakestoreapi.com/products").then((data) => {
  //         setProducts(data.data);
  //       });
  //     }
  //   }, [products, setProducts]);
  console.log(products);
  return <ListP products={products} />;
};

export default memo(Data);
