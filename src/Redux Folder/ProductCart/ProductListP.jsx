import React, { useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeData, storeCart } from "./ProductSlice";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductListP = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      dispatch(storeData(response.data));
    });
  }, []);

  const product = useSelector((state) => state.storeSlice.product);
  const cart = useSelector((state) => state.storeSlice.forAddedToCart);
  return (
    <div>
      <Link to={`/cart`}>
        <button>SHOW CART</button>
      </Link>
      <ul>
        {product.map((item) => {
          const { id } = item;
          return (
            <li key={item.id}>
              {item.title}
              {id in cart ? (
                <button>ADDED TO CART</button>
              ) : (
                <button onClick={() => dispatch(storeCart(item))}>
                  ADD TO CART
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductListP;
