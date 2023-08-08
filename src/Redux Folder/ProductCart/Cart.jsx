import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartt = useSelector((state) => state.storeSlice.cart);

  const totalPrice = useMemo(() => {
    let values = 0;
    cartt.map((items) => (values += items.price));
    return values;
  }, [cartt]);

  return (
    <div>
      <Link to={`/`}>
        <button>HOME</button>
      </Link>
      <div style={priceSt}>TOTAL PRICE : {totalPrice}</div>
      <ul>
        {cartt.map((item) => (
          <li key={item.id}>
            {item.title}
            <p>price:{item.price} </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
const priceSt = {
  border: "1px solid black",
  borderRadius: "8px",
  padding: "12px",
};

export default Cart;
