import React from "react";
import { useContext } from "react";

import { Link } from "react-router-dom";
import ProfileContext from "./ListContext";

const ListP = ({ products }) => {
  return (
    <div>
      {products.map((data) => {
        console.log(data.id);
        return (
          <div key={data.id}>
            <Link to={`/products/${data.id}`}>
              <p>{data.title}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ListP;
