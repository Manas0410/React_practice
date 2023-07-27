//url
//localhost:5174/product/1/?name=yash&city=jabalpur&state=MP

//code

import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

import axios from "axios";

const ProductDeatilsAssignment = () => {
  //   const { productId } = useParams();
  //   const [product, setProduct] = useState({});
  const location = useLocation();
  console.log("location", location);

  const queryParams = new URLSearchParams(location.search);

  // You can now read specific query parameters using the get method
  //   const paramValue = queryParams.get("name");
  //   const paramValue1 = queryParams.get("city");
  //   console.log("Param values:-", paramValue, paramValue1);

  // Convert all query parameters to an object
  const queryParamsObj = {};
  queryParams.forEach((value, key) => {
    queryParamsObj[key] = value;
  });

  console.log("queryParamsObj=", queryParamsObj);

  return null;
};

export default ProductDeatilsAssignment;
