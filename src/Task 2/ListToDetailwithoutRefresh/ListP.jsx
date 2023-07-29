import React from "react";
import { useContext } from "react";

import { Link } from "react-router-dom";
import { profileContext } from "./ListContext";

const ListP = () => {
  const { productList } = useContext(profileContext);

  return (
    <div>
      {productList.map((data) => {
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
