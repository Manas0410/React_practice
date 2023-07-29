import React, { useEffect, useState } from "react";
import { ProfileProvider } from "./ListContext";
import ListP from "./ListP";
import axios from "axios";

const Data = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((data) => {
      setProducts(data.data);
    });
  }, []);
  console.log(products);
  return (
    <ProfileProvider value={{ productList: products }}>
      <ListP />
    </ProfileProvider>
  );
};

export default Data;
