import axios from "axios";
import { useSearchParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const QueryParent = () => {
  const [data, setData] = useState([]);
  const [catg, setCatg] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  // Function to update query parameters
  const updateQueryParam = (paramKey, paramValue) => {
    // Update the query parameter in the searchParams object
    searchParams.set(paramKey, paramValue);

    // Update the URL without reloading the page
    setSearchParams(searchParams);
  };

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((result) => {
      if (catg === "") {
        setData(result.data.products);
      } else {
        let tempData = result.data.products.filter(
          (item) => item.category === catg
        );
        setData(tempData);
      }
    });
  }, [catg]);

  const category = (e) => {
    setCatg(e.target.value);
    const { value } = e.target;
    updateQueryParam("param2", value);
  };
  console.log(catg);
  return (
    <div>
      {/* category  */}
      <div>
        <p>SELECT CATEGORY</p>
        <input
          type="radio"
          name="category"
          value={"smartphones"}
          onChange={category}
        />
        <label htmlFor="smartphone">smartphone</label> <br />
        <input
          type="radio"
          name="category"
          value={"laptops"}
          onChange={category}
        />
        <label htmlFor="smartphone">laptops</label> <br />
        <input
          type="radio"
          name="category"
          value={"groceries"}
          onChange={category}
        />
        <label htmlFor="smartphone">groceries</label> <br />
        <input
          type="radio"
          name="category"
          value={"fragrances"}
          onChange={category}
        />
        <label htmlFor="smartphone">fragrance</label> <br />
        <input type="radio" name="category" value={""} onChange={category} />
        <label htmlFor="smartphone">ALL</label> <br />
      </div>
      {/* list of prod */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {data.map((item) => (
          <div key={item.id} style={cardStyle}>
            <img src={item.thumbnail} style={thumbnailStyle} alt={item.title} />
            <div style={contentStyle}>
              <p style={titleStyle}>{item.title}</p>
              <p style={brandStyle}>{item.brand}</p>
              <p style={categoryStyle}>{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Styling
const cardStyle = {
  width: "200px",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  background: "#f9f9f9",
  boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
};

const thumbnailStyle = {
  width: "100px",
  height: "100px",
  objectFit: "cover",
  borderRadius: "5px",
};

const contentStyle = {
  paddingTop: "10px",
};

const titleStyle = {
  fontSize: "18px",
  fontWeight: "bold",
};

const brandStyle = {
  color: "#555",
};

const categoryStyle = {
  color: "#777",
};

export default QueryParent;

// import { useSearchParams } from "react-router-dom";

// export default function QueryParams() {
//   const [searchParams, setSearchParams] = useSearchParams();

//   // Function to update query parameters
//   const updateQueryParam = (paramKey, paramValue) => {
//     // Update the query parameter in the searchParams object
//     searchParams.set(paramKey, paramValue);

//     // Update the URL without reloading the page
//     setSearchParams(searchParams);
//   };

//   // Example usage: updating 'param2' to 'newvalue'
//   const handleUpdateQueryParam = () => {
//     updateQueryParam("param2", "newvalue");
//   };

//   return (
//     <div>
//       {/* Your component content */}
//       <button onClick={handleUpdateQueryParam}>Update Query Param</button>
//     </div>
//   );
// }
