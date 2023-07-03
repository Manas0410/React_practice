import { useEffect, useState } from "react";

const UseEffectExamplesV1 = () => {
  const [products, setProducts] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        // We have data
        // Normal Approach
        /* let count = 0;
        for (let i = 0; i < data.length; i++) {
          count += data[i].price;
        } */

        // Approach 2 with reduce
        const count = data.reduce((acc, current) => acc + current.price, 0);

        setTotalPrice(count.toFixed(2));
        setProducts(data);
      });
  }, []);

  if (!products) {
    return <p>Please wait while we are loading</p>;
  }

  return (
    <div>
      <h1>My Products</h1>
      <p>Total Price: ₹ {totalPrice}</p>
      <ul>
        {products &&
          products.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
      </ul>
    </div>
  );
};

export default UseEffectExamplesV1;
