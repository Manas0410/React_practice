import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";
import { toast } from "react-toastify";
import { BounceLoader } from "react-spinners";

const AMyCart = () => {
  const [cartList, setCartList] = useState([]);
  const [isLoadingCart, setIsLoadingCart] = useState(true);

  useEffect(() => {
    onLoadCartList();
  }, []);

  const onLoadCartList = async () => {
    setIsLoadingCart(true);
    const result = await axios.get("http://localhost:3000/cart");
    if (result.data) {
      setCartList(result.data);
    }

    setIsLoadingCart(false);
  };

  const onRemoveFromCart = async (id) => {
    const result = await axios.delete(`http://localhost:3000/cart/${id}`);

    if (!result.data) {
      // Show Error message
      toast("No product removed from the cart");
      return;
    }

    toast.success("Product removed from the cart!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    setCartList((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });
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
              id={item.id}
              title={item.title}
              /* {...item}  */ key={item.id}
              onRemove={onRemoveFromCart}
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

export default AMyCart;
