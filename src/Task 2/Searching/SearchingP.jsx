import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Manas from "./MANAS";

const SearchingP = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setData(response.data));
  }, []);

  const inp = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const match = (str1, str2) => {
    return str1.toLowerCase().includes(str2.toLowerCase());
  };

  const search = useMemo(() => {
    if (input === "") {
      return data;
    }
    return data.filter((item) => match(item.title, input));
  }, [input, data]);
  return (
    <Manas>
    <div>
      {/* {{}} */}
      <input
        type="text"
        onChange={(e) => {
          inp(e);
        }}
      />
      {search.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
    </Manas>
  );
};

export default SearchingP ;

// when we need to filter logic is on backend we hv to send input to backend and backend sends the filtered result