import React, { useState } from "react";
import AccordianC from "./1.AccordianC";

const AccordianP = () => {
  const [data, setData] = useState([
    { name: "name", nv: "" }, //name manas
    { age: "age", av: "" },
    { city: "city", cv: "" },
  ]);
  const nameFunc = (e) => {
    const { value } = e.target;
    setData((prevState) => {
      const temp = [...prevState];
      temp[0].nv = value;
      return temp;
    });
  };
  const ageFunc = (e) => {
    const { value } = e.target;
    setData((prevState) => {
      const temp = [...prevState];
      temp[0].av = value;
      return temp;
    });
  };
  const cityFunc = (e) => {
    const { value } = e.target;
    setData((prevState) => {
      const temp = [...prevState];
      temp[0].cv = value;
      return temp;
    });
  };
  return (
    <div>
      <input type="text" placeholder="enter name" onChange={nameFunc} />
      <input type="text" placeholder="enter age" onChange={ageFunc} />
      <input type="text" placeholder="enter city" onChange={cityFunc} />
      <AccordianC array={data} />
    </div>
  );
};

export default AccordianP;
