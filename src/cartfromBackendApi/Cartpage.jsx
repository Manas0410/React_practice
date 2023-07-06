import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
              <button onClick={() => {}}>Remove from cart</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MyCartf;
