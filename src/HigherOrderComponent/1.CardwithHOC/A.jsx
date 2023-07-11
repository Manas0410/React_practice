import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CardItem from "./CardItem";
import { toast } from "react-toastify";
import WrapperHoc from "./WrapperHOC";

const AMyCartHOC = () => {
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

  return (
    <div>
      <WrapperHoc isLoading={isLoadingCart} data={cartList}>
        <Link to={"/"}>Show Home</Link>
        <div>
          <button onClick={onLoadCartList}>Refresh Cart</button>
        </div>
        <h1>My Cart List</h1>
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
      </WrapperHoc>
    </div>
  );
};

export default AMyCartHOC;
