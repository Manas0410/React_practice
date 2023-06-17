import React, { useState } from "react";
import Sumchild from "./Sumchild";

const Sumparent = () => {
  const [num, setNum] = useState("");
  return (
    <div>
      <input
        type="text"
        value={num}
        onChange={(ev) => {
          setNum(ev.target.value);
        }}
      />
      <Sumchild n={num} />
    </div>
  );
};

export default Sumparent;
