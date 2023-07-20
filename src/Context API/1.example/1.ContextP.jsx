import ChildD24A from "./1.ContextC";
import { useEffect, useState } from "react";
import { ProfileProvider } from "./context/Context";
import axios from "axios";

const ParentD24A = () => {
  const [products, setProducts] = useState([]);
  const [uName, setUName] = useState("Satyam");

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((data) => {
      setProducts(data.data);
    });
  }, []);

  return (
    <ProfileProvider
      value={{ name: uName, city: "Jabalpur", productList: products }}
    >
      <div>
        <p>I am Parent D24A</p>
        <input value={uName} onChange={(e) => setUName(e.target.value)} />
        <ChildD24A />
      </div>
    </ProfileProvider>
  );
};

export default ParentD24A;
