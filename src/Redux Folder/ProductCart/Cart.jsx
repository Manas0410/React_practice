import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const product = useSelector((state) => state.storeSlice.product);
  const cartt = useSelector((state) => state.storeSlice.cart);
  const cartData = useMemo(() => {
    const temp = cartt.map((cartItem) => {
      const prodData = product.filter((prod) => prod.id === cartItem);
      return prodData[0];
    });
    return temp;
  }, [product, cartt]);
  return (
    <div>
      <Link to={`/`}>
        <button>HOME</button>
      </Link>
      <ul>
        {cartData.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
