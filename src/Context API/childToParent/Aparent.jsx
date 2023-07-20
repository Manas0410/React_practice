import React from "react";
import { useContext } from "react";
import Bchild from "./Bchild";
import { C2Pprovider } from "./c2pcontext/C2Pcontext";

const Aparent = () => {
  const { name } = useContext(C2Pprovider);

  return (
    <div>
      <p>PARENT A</p>
      <p>{name}</p>
      <Bchild />
    </div>
  );
};

export default Aparent;
