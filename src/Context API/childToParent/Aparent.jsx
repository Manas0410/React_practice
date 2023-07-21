import React, { useState } from "react";
import Bchild from "./Bchild";
import { C2Pprovider } from "./c2pcontext/C2Pcontext";

const Aparent = () => {
  // const { name } = useContext(C2Pprovider);
  const [name, setName] = useState(localStorage.getItem("name"));
  const onNameUpdate = (data) => {
    localStorage.setItem("name", data);
    setName(data);
  };
  return (
    <C2Pprovider value={{ name, setName: onNameUpdate }}>
      <p>PARENT A {name}</p>
      <Bchild />
    </C2Pprovider>
  );
};

export default Aparent;
