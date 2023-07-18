// TASK-Pagination with useEffect and useMemo
// Create a component that fetches a list of items from an API endpoint
//  and implements pagination. Use useEffect to fetch the initial data
//  and subsequent data when the page changes.
//Use useMemo to calculate the number of pages based on the total number of items
//and items per page
import axios from "axios";
import React, { useEffect, useState } from "react";

const [apiData, setApiData] = useState([]);
const PaginationP = () => {
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setApiData(response.data))
      .catch((error) => console.log(error));
  }, []);
  return <div></div>;
};

export default PaginationP;

// https://api.instantwebtools.net/v1/passenger?page=0&size=10
