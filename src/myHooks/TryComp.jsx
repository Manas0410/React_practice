import React from "react";
import useAxios from "./CallingApiByAxios";

const TryComp = () => {
  const { data, loading, error } = useAxios(
    "https://fakestoreapi.com/products"
  );
  console.log(data);
  return <div>manas</div>;
};

export default TryComp;
