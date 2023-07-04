import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Pdiv } from "./Jsonstyle";
import { Link } from "react-router-dom";

const CartPage = () => {
  // Retrieve cart data from local storage
  const cartData = JSON.parse(localStorage.getItem("cartData"));
  const [cart, setCart] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setCart(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Cart Page</h1>
      {/* Render cart data */}

      {cartData.map((idd) => {
        const m = cart.filter((cd) => cd.id === idd);
        console.log("ye", m);

        const { id, title, price, description, category, image } = m[0];
        return (
          <div key={id}>
            <Pdiv>
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
          </div>
        );
      })}
    </div>
  );
};

export default CartPage;
