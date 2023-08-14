import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

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
  console.log({ search });
  return (
    <div>
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
  );
};

export default SearchingP;
