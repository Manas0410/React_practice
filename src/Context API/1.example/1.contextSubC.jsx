import { useContext } from "react";
import { profileContext } from "./context/Context";

const SubChildD24B = () => {
  const { name, city, productList } = useContext(profileContext);

  console.log("productList: ", productList);
  return (
    <div>
      <p>
        I am SubChildD D24A : {name} {city}
      </p>
      <ul>
        {!productList || productList.length === 0 ? (
          <p>No Products available</p>
        ) : (
          productList.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })
        )}
      </ul>
    </div>
  );
};

export default SubChildD24B;
