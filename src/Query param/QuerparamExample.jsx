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

// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";

// export default function QueryParams() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [parsedSearchQuery, setParsedSearchQuery] = useState({});

//   useEffect(() => {
//     const paramsObject = {};

//     // Iterating over the searchParams
//     for (const [key, value] of searchParams.entries()) {
//       paramsObject[key] = value;
//     }

//     setParsedSearchQuery(paramsObject);
//   }, [searchParams]);

//   // Function to update query parameters
//   const updateQueryParam = (paramKey, paramValue) => {
//     // Update the query parameter in the searchParams object
//     searchParams.set(paramKey, paramValue);

//     // Update the URL without reloading the page
//     setSearchParams(searchParams);
//   };

//   // Example usage: updating 'param2' to 'newvalue'
//   const handleUpdateQueryParam = () => {
//     updateQueryParam("param2", "newvalue");
//   };

//   return (
//     <div>
//       {/* Your component content */}
//       <button onClick={handleUpdateQueryParam}>Update Query Param</button>
//     </div>
//   );
// }
