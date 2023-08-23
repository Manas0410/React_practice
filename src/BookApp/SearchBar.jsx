import axios from "axios";
import { useEffect } from "react";

const SearchBar = ({ list }) => {
  const page = "The one and only 4444";
  useEffect(() => {
    axios
      .get(
        `http://68.178.162.203:8080/application-test-v1.1/books?search="The 69"`
      )
      .then((response) => {
        console.log(response.data.data);
        console.log("123");
      });
  }, [page]);
  return <div></div>;
};

export default SearchBar;
