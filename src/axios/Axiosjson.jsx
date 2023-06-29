import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Pdiv } from "./Jsonstyle";

const Axiosjson = () => {
  const [jsonList, setJsonList] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setJsonList(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Pdiv>
      {jsonList.map((data) => {
        const { id, title, price, description, category, image } = data;
        return (
          <Pdiv key={id}>
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={image}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{price}</p>
                    <p className="card-text">
                      <small className="text-muted">{category}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Pdiv>
        );
      })}
    </Pdiv>
  );
};

export default Axiosjson;
