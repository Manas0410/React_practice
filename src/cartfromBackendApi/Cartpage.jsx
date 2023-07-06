import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const MyCartf = () => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    onLoadCartList();
  }, []);

  const onLoadCartList = async () => {
    const result = await axios.get("http://localhost:3000/cart");
    if (result.data) {
      setCartList(result.data);
    }
  };
  const onRemoveFromCart = async (productId) => {
    const result = await axios.delete(
      `http://localhost:3000/cart/${productId}`
    );
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
      return prevState.filter((data) => data.id !== productId);
    });
  };

  return (
    <div>
      <Link to={"/"}>Show Home</Link>
      <h1>My Cart List</h1>
      <ul>
        {cartList.map((item) => {
          return (
            <li
              key={item.id}
              style={{
                width: 400,
                border: "1px solid silver",
                padding: 12,
                listStyleType: "none",
                marginBottom: 12,
              }}
            >
              <p>{item.title}</p>
              <button onClick={() => onRemoveFromCart(item.id)}>
                Remove from cart
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MyCartf;
