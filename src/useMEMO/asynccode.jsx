import { useMemo, useState } from "react";

export const APIWithUseMemo = () => {
  const [products, setProducts] = useState({});
  const config = useMemo(() => {
    const apiResult = fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => {
        console.log("Data: ", data);
        setProducts(data);
        return data;
      });

    return apiResult;
  }, []);

  console.log("Re-Render: ", config, products);

  return (
    <div>
      <p>Hello</p>
    </div>
  );
};
