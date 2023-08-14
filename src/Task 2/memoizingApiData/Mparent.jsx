import React from "react";
import { useContext } from "react";
import { Context } from "./Mhoc";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Mparent = () => {
  const { data, setData } = useContext(Context) || [];
  useEffect(() => {
    if (!data.length) {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => setData(response.data));
    }
  }, []);
  return (
    <div>
      {data.map((item) => {
        return (
          <Link to={`/${item.id}`}>
            <p>{item.title}</p>);
          </Link>
        );
      })}
    </div>
  );
};

export default Mparent;

// gett/sett from hoc
// 2=>call api and set
// 3=>use from context

// call ap =>memo=>useEffect
// dta  ary if data mei content no api
