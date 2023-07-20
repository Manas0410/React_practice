import React from "react";
import { C2Pprovider } from "./c2pcontext/C2Pcontext";

const CsubChild = () => {
  return (
    <C2Pprovider value={{ name: Manas }}>
      <div>
        <p>SUBCHILD C</p>
      </div>
    </C2Pprovider>
  );
};

export default CsubChild;
