import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";
import { BounceLoader } from "react-spinners";

const BMyProducts = () => {
  const [cartList, setCartList] = useState([]);
  const [isLoadingCart, setIsLoadingCart] = useState(true);

  useEffect(() => {
    onLoadCartList();
  }, []);

  const onLoadCartList = async () => {
    setIsLoadingCart(true);
    const result = await axios.get("http://localhost:3000/products");
    if (result.data) {
      setCartList(result.data);
    }

    setIsLoadingCart(false);
  };


  const renderList = () => {
    if (isLoadingCart) {
      return (
        <div style={{ display: "grid", placeItems: "center" }}>
          <BounceLoader color="#36d7b7" />
          <p>Please wait while we are loading your cart</p>
        </div>
      );
    }

    if (!cartList || cartList.length === 0) {
      return (
        <p>Your cart Seems Empty. Please go to product page to add something</p>
      );
    }

    return (
      <ul>
        {cartList.map((item) => {
          return (
            <CardItem
               {...item}   key={item.id}
            />
          );
        })}
      </ul>
    );
  };

  return (
    <div>
      <Link to={"/"}>Show Home</Link>
      <div>
        <button onClick={onLoadCartList}>Refresh Cart</button>
      </div>
      <h1>My Cart List</h1>
      {renderList()}
    </div>
  );
};

export default BMyProducts;