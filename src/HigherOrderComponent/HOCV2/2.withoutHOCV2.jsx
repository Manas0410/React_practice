import axios from "axios";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";

const WithOutHOCLoadProducts = () => {
  const [product, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios.get("http://localhost:3000/products").then((data) => {
      console.log(data.data);
      setIsLoading(false);
      setProducts(data.data);
    });
  }, []);

  const renderProduct = () => {
    if (isLoading) {
      return (
        <div>
          <BounceLoader />
          <p>Please wait</p>
        </div>
      );
    }

    return (
      <ul>
        {product.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    );
  };

  return (
    <div>
      <p>Products</p>
      {renderProduct()}
    </div>
  );
};

export default WithOutHOCLoadProducts;
