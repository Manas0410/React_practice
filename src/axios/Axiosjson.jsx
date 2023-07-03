// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import { Pdiv } from "./Jsonstyle";
// import { Link } from "react-router-dom";

// const Axiosjson = () => {
//   const [jsonList, setJsonList] = useState([]);
//   // const [cart, setCart] = useState([
//   //   {
//   //     id: "",
//   //     title: "",
//   //     price: "",
//   //     description: "",
//   //     category: " ",
//   //     image: "",
//   //   },
//   // ]);
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((response) => setJsonList(response.data))
//       .catch((error) => console.log(error));
//   }, []);

//   const addCart = (ev) => {
//     const { value } = ev.target;
//     setCart((prevData) => {
//       [...prevData, value];
//     });
//     console.log(cart);
//   };

//   return (
//     <Pdiv>
//       {jsonList.map((data) => {
//         const { id, title, price, description, category, image } = data;
//         return (
//           <div>
//             <Link to={`/details/${id}`}>
//               <Pdiv key={id}>
//                 <div className="card mb-3" style={{ maxWidth: "540px" }}>
//                   <div className="row g-0">
//                     <div className="col-md-4">
//                       <img
//                         src={image}
//                         className="img-fluid rounded-start"
//                         alt="..."
//                       />
//                     </div>
//                     <div className="col-md-8">
//                       <div className="card-body">
//                         <h5 className="card-title">{title}</h5>
//                         <p className="card-text">{description}</p>
//                         <p className="card-text">{price}</p>
//                         <p className="card-text">
//                           <small className="text-muted">{category}</small>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </Pdiv>
//             </Link>
//             <button
//               onClick={() => {
//                 setCart((prev) => {
//                   [...prev, { id }];
//                 });
//                 console.log(cart);
//               }}
//             >
//               ADD TO CART
//             </button>
//           </div>
//         );
//       })}
//     </Pdiv>
//   );
// };

// export default Axiosjson;

import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Pdiv } from "./Jsonstyle";
import { Link } from "react-router-dom";

const Axiosjson = () => {
  const [jsonList, setJsonList] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setJsonList(response.data))
      .catch((error) => console.log(error));
  }, []);

  const addToCart = (id) => {
    setCart((prevCart) => [...prevCart, id]);
    console.log(cart);
  };

  return (
    <Pdiv>
      {jsonList.map((data) => {
        const { id, title, price, description, category, image } = data;
        return (
          <div key={id}>
            <Link to={`/details/${id}`}>
              <Pdiv>
                <div className="card mb-3" style={{ maxWidth: "540px" }}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={image}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">{price}</p>
                        <p className="card-text">
                          <small className="text-muted">{category}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Pdiv>
            </Link>

            <button onClick={() => addToCart(id)}>ADD TO CART</button>
          </div>
        );
      })}
      <Link to={`/cart`}>
        <BUtton>SHOW CART</BUtton>
      </Link>
    </Pdiv>
  );
};

export default Axiosjson;
