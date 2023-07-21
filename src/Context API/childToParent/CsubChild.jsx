import React, { useContext } from "react";
import { C2Pcontext } from "./c2pcontext/C2Pcontext";

const CsubChild = () => {
  const { name, setName } = useContext(C2Pcontext);
  return (
    <div>
      <p>SUBCHILD C {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default CsubChild;
