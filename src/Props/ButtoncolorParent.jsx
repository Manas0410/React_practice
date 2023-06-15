import React, { useState } from "react";
import Buttoncolorchild from "./Buttoncolorchild";

const ButtoncolorParent = () => {
  const [color, setcolor] = useState("");
  const handleColor = (t) => {
    setcolor(t);
  };
  return (
    <div>
      <button onClick={() => handleColor("red")}>red</button>
      <button onClick={() => handleColor("blue")}>blue</button>
      <button onClick={() => handleColor("orange")}>orange</button>
      <Buttoncolorchild color={color} />
    </div>
  );
};

export default ButtoncolorParent;
