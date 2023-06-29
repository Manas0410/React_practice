import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const ProductList = () => {
  const [products, setProducts] = useState("");

  // One way
  /*   useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => setProducts(data));
  }, []); */

  // Second way
  /*   useEffect(() => {
    const callAPI = async () => {
      const results = await fetch("https://fakestoreapi.com/products");
      const parsedResult = await results.json();
      setProducts(parsedResult);
    };

    callAPI();
  }, []); */

  // Third way
  useEffect(() => {
    (async () => {
      const results = await fetch("https://fakestoreapi.com/products");
      const parsedResult = await results.json();
      setProducts(parsedResult);
    })();
  });

  if (!products) {
    return (
      <BounceLoader
        color={"#325795"}
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }

  return (
    <div>
      <h1>My Products</h1>
      {products.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.title}</p>
            <p>₹ {item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
