import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const [click, setClick] = useState(true);

  useEffect(() => {
    console.log("Mounting");
    const handleMouseMove = (event) => {
      // Your mouse move event handling logic goes here
      //console.log("Mouse X:", event.clientX);
      //console.log("Mouse Y:", event.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Remove event listener when the component unmounts
    return () => {
      console.log("Unmounting");
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    console.log("Click Mount");

    return () => {
      console.log("Click Unmounting");
    };
  }, [click]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((result) => {
      if (result.data) {
        setProducts(result.data);
      }
    });
  }, []);

  return (
    <div>
      <h1 onClick={() => setClick(!click)}>My Products</h1>
      <ul style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {products.map((item) => {
          return (
            <li
              key={item.id}
              style={{
                padding: 12,
                border: "1px solid silver",
                width: "180px",
                listStyleType: "none",
              }}
            >
              <Link to={`/product/${item.id}`}>
                <p>{item.title}</p>
                <p>{item.price}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MyProducts;
